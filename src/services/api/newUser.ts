import { baseUrl,NewUserDetails } from "../api";

export const createNewUser = async({ 
    userName,
    password,
    
}:NewUserDetails): Promise<boolean> =>{
    const url = `${baseUrl}/api/users`

    const rawBody ={
    userName,
    password,
};

    const reqOption: RequestInit = {
        method: "POST",
        body: JSON.stringify(rawBody),
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      let response;
      try {
        response = await fetch(url, reqOption);
      } catch (error) {
        console.log(error);
      }
    
      return response?.status === 200 ? true : false;
    };
