export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    email: string;
    userId: number;
    token: string;
  }
  
  export interface JWTPayload {
    role: string;
    sub: string;
    exp: number; 
  }