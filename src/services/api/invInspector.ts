import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { baseUrl, InvestigationInspector, InvInspectorProps } from "../_api";

export const createInvInspector = async ({
  name,
  nic,
}: InvInspectorProps): Promise<boolean> => {
  const url = `${baseUrl}/api/inspectors`;

  const rawBody = {
    name,
    nic,
  };
  const token = sessionStorage.getItem("token");

  const reqOption: RequestInit = {
    method: "POST",
    body: JSON.stringify(rawBody),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

export const createInvInspectorAssignment = async (
  data: InvestigationInspector,
  fileId: number
): Promise<boolean> => {
  const url = `${baseUrl}/api/assignments`;

  const rawBody = {
    ...data,
    investigation: {
      id: fileId,
    },
    inspector: {
      nic: data.nic,
    },
    acquiredDate: convertMillisecondsToLocalDateTime(data.acquiredDate),
    submittedDate: convertMillisecondsToLocalDateTime(data.submittedDate),
    reAcquiredDate: convertMillisecondsToLocalDateTime(data.reAcquiredDate),
    reSubmittedDate: convertMillisecondsToLocalDateTime(data.reSubmittedDate),
  };
  const token = sessionStorage.getItem("token");

  const reqOption: RequestInit = {
    method: "POST",
    body: JSON.stringify(rawBody),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
