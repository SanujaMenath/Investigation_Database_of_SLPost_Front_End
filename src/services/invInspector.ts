import { API_PREFIX } from "../constants";

export const createInvInspector = async (data: any) => {
  try {
    const response = await fetch(`${API_PREFIX}/inspectors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
