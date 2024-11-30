import { baseUrl, NewUserDetails } from "../api";

export const createNewUser = async ({
  email,
  firstName,
  lastName,
  locationId,
  locationType,
  password,
  role,
}: NewUserDetails): Promise<boolean> => {
  const url = `${baseUrl}/api/users`;

  const rawBody = {
    email,
    first_name: firstName, 
    last_name: lastName,
    location_id: locationId,
    location_type: locationType,
    password,
    role,
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
    console.error("Error creating new user:", error);
  }

  return response?.status === 200; 
};
