import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { InvestigationProps, baseUrl } from "../api";

export const createInvestigation = async (
  data: InvestigationProps
): Promise<boolean> => {
  const url = `${baseUrl}/api/investigations`;

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
