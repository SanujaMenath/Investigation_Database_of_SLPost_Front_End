import { baseUrl } from "./authService";

export const createUser = async (data: any) => {
    try {  
      const response = await fetch(`${baseUrl}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });      
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
      };