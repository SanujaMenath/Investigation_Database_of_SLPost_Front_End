import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { InvestigationProps,baseUrl } from "../api";

export const createInvestigation = async ({
    fileId,
    incident,
    incidentDate,
    dateReferredToInvestigate,
    dateOfFinalReportIssued,
    recommendationOfFinalReport,
    personWhoAcceptedSubmission,
    acceptedSubmissionDate,
    handOveredDateOfSubmission
}: InvestigationProps):Promise<boolean> => {
    const url = `${baseUrl}/api/investigations`;
  
    const rawBody = {
        fileId,
        incident,
        incidentDate: convertMillisecondsToLocalDateTime(
        Date.parse(incidentDate)
      ),
      dateReferredToInvestigate: convertMillisecondsToLocalDateTime(
        Date.parse(dateReferredToInvestigate)
      ),
      dateOfFinalReportIssued:convertMillisecondsToLocalDateTime(
        Date.parse(dateOfFinalReportIssued)
      ),
      recommendationOfFinalReport,

      personWhoAcceptedSubmission,

      acceptedSubmissionDate:convertMillisecondsToLocalDateTime(
        Date.parse(acceptedSubmissionDate)
      ),
      handOveredDateOfSubmission:convertMillisecondsToLocalDateTime(
        Date.parse(handOveredDateOfSubmission)
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