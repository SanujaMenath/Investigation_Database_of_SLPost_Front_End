import { APIResponse } from ".";
import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { Investigation, InvestigationProps, baseUrl } from "../_api";

export const createInvestigation = async (
  data: Investigation
): Promise<APIResponse<{id: number}>> => {
  const url = `${baseUrl}/api/investigations/create`;

  const token = sessionStorage.getItem("token");

  const rawBody = {
    ...data,
    incidentDate: convertMillisecondsToLocalDateTime(data.incidentDate),
    dateReferredToInvestigate: convertMillisecondsToLocalDateTime(
      data.dateReferredToInvestigate
    ),
    dateOfFinalReportIssued: convertMillisecondsToLocalDateTime(
      data.dateOfFinalReportIssued
    ),
    acceptedSubmissionDate: convertMillisecondsToLocalDateTime(
      data.acceptedSubmissionDate
    ),
    handOveredDateOfSubmission: convertMillisecondsToLocalDateTime(
      data.handOveredDateOfSubmission
    ),
  };

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

  return response?.status === 200
    ? {
        status: "success",
        data: await response?.json(),
      }
    : {
        status: "failure",
        error: await response?.json(),
      };
};
