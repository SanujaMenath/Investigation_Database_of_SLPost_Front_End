import { baseUrl, NewUserDetails } from "../_api";

export const createNewUser = async ({
  email,
  firstName,
  lastName,
  locationId,
  locationType,
  password,
  role,
}: NewUserDetails): Promise<boolean> => {
  const url = `${baseUrl}/api/users/create`;

  const rawBody = {
    email,
    firstName,
    lastName,
    locationId,
    locationType,
    password,
    role,
  };

  // Retrieve the token from sessionStorage
  const token = sessionStorage.getItem("token");

  const reqOption: RequestInit = {
    method: "POST",
    body: JSON.stringify(rawBody),
    headers: {
      "Content-Type": "application/json",
      // Add Authorization header with the token
      Authorization: `Bearer ${token}`,
    },
  };

  let response;
  try {
    response = await fetch(url, reqOption);

    if (response.ok) {
      console.log("User created successfully.");
    } else {
      console.error("Error creating new user. Status:", response.status);
      const errorData = await response.json();
      console.error("Error details:", errorData);
    }
  } catch (error) {
    console.error("Error creating new user:", error);
  }

  return response?.status === 200;
};
