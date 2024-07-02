import { Suspector, baseUrl } from "../api";
import { convertMillisecondsToLocalDateTime } from "../../utils/date";

export const createSuspector = async ({
  name,
  dob,
  nic,
}: Suspector): Promise<boolean> => {
  const url = `${baseUrl}/api/suspector`;

  const rawBody = {
    nic,
    name,
    dob: convertMillisecondsToLocalDateTime(dob),
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

export const deleteSuspector = async () => {};
