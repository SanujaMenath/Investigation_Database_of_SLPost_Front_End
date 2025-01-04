import { Suspector, baseUrl } from "../_api";
import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { APIResponse } from ".";

export const createSuspector = async ({
  name,
  dob,
  nic,
}: Suspector): Promise<APIResponse<string>> => {
  const url = `${baseUrl}/api/suspector/create`;

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

  return response?.status === 200 ? 
    {
      status: "success",
      data: await response?.json(),
    } : 
    {
      status: "failure",
      error: await response?.json(),
    };
};

export const deleteSuspector = async () => {};
