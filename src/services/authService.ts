import { useNavigate } from "react-router-dom";
import { JWTPayload, LoginResponse } from "../@types/auth-types";
import { API_PREFIX } from "../constants";

class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

const DEFAULT_TIMEOUT = 15000;

export const login = async (
  email: string,
  password: string,
  timeout: number = DEFAULT_TIMEOUT
): Promise<LoginResponse> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${API_PREFIX}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new AuthError(data.message || "Authentication failed");
    }

    // Type guard to validate response shape
    if (!isValidLoginResponse(data)) {
      throw new AuthError("Invalid response format from server");
    }

    await storeAuthData(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new AuthError("Request timeout. Please try again.");
      }
      throw new AuthError(error.message);
    }
    throw new AuthError("An unexpected error occurred");
  } finally {
    clearTimeout(timeoutId);
  }
};

// Type guard
const isValidLoginResponse = (data: any): data is LoginResponse => {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.email === "string" &&
    typeof data.token === "string" &&
    typeof data.userId === "number"
  );
};

const storeAuthData = async (data: LoginResponse): Promise<void> => {
  try {
    // Decode and validate JWT
    const payload = decodeJWT(data.token);
    if (!isValidJWTPayload(payload)) {
      throw new AuthError("Invalid token payload");
    }

    // Check token expiration
    if (payload.exp * 1000 < Date.now()) {
      throw new AuthError("Token has expired");
    }

    // Store auth data
    sessionStorage.setItem("userEmail", data.email);
    sessionStorage.setItem("userId", data.userId.toString());
    sessionStorage.setItem("userRole", payload.role);
    sessionStorage.setItem("jwtToken", data.token);
  } catch (error) {
    sessionStorage.clear();
    throw error;
  }
};

const decodeJWT = (token: string): JWTPayload => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(window.atob(base64));
  } catch (error) {
    throw new AuthError("Failed to decode JWT token");
  }
};

const isValidJWTPayload = (payload: any): payload is JWTPayload => {
  return (
    typeof payload === "object" &&
    payload !== null &&
    typeof payload.role === "string" &&
    typeof payload.exp === "number" &&
    typeof payload.sub === "string"
  );
};

export const isAuthenticated = (): boolean => {
  const token = sessionStorage.getItem("jwtToken");
  if (!token) return false;

  try {
    const payload = decodeJWT(token);
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

// Get current user data
// user role
export const getUserRole = (): string | null => {
  return sessionStorage.getItem("userRole");
};

// user ID
export const getUserId = (): string | null => {
  return sessionStorage.getItem("userId");
};

// Get token for API calls
export const getAuthToken = (): string | null => {
  return sessionStorage.getItem("jwtToken");
};

export const getAuthHeaders = (): Record<string, string> => {
  return {
    Authorization: `Bearer ${getAuthToken()}`,
  };
};

// logout function
export const logout = async (): Promise<void> => {
  const navigate = useNavigate();
  try {
    sessionStorage.clear();
    localStorage.clear();
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    navigate("/login");
  }
};
