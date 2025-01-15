export const baseUrl = "http://localhost:8080";
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Invalid credentials");
    }

    const data = await response.json();

    // Save data to session storage
    sessionStorage.setItem("userEmail", data.email);
    sessionStorage.setItem(
      "userRole",
      JSON.parse(atob(data.token.split(".")[1])).role
    );
    sessionStorage.setItem("jwtToken", data.token);

    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const logout = () => {
  sessionStorage.clear();
};
