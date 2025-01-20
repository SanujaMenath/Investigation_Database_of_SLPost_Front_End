import { baseUrl } from "./authService";

export const createInvInspector = async (data: any) => {
    try {  
      const response = await fetch(`${baseUrl}/api/inspectors`, {
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
      } 