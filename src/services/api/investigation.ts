import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { InvestigationProps, baseUrl } from "../api";

export const createInvestigation = async ({
  fileId,
  incident,
  incidentDate,
  dateReferredToInvestigate,
  dateOfFinalReportIssued,
  recommendationOfFinalReport,
  personWhoAcceptedSubmission,
  acceptedSubmissionDate,
  handOveredDateOfSubmission,
  divisionId,
  status,
}: InvestigationProps): Promise<boolean> => {
  const url = `${baseUrl}/api/investigations`;

  const rawBody = {
    fileId,
    incident,
    incidentDate: convertMillisecondsToLocalDateTime(incidentDate),
    dateReferredToInvestigate: convertMillisecondsToLocalDateTime(
      dateReferredToInvestigate
    ),
    dateOfFinalReportIssued: convertMillisecondsToLocalDateTime(
      dateOfFinalReportIssued
    ),
    recommendationOfFinalReport,

    personWhoAcceptedSubmission,

    acceptedSubmissionDate: convertMillisecondsToLocalDateTime(
      acceptedSubmissionDate
    ),
    handOveredDateOfSubmission: convertMillisecondsToLocalDateTime(
      handOveredDateOfSubmission
    ),
    divisionId,
    status,
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
