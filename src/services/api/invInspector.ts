import { baseUrl ,InvInspectorProps} from "../api";

export const createInvInspector = async({
    name,
    nic
}:InvInspectorProps):Promise<boolean> =>{
    const url = `${baseUrl}/api/inspectors`;

    const rawBody = {
        name,
        nic,
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
