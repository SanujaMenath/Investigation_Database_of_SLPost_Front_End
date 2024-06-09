declare global {
 export type FormData = {
    fileId: string;
    incident: string;
    incidentDate: string;
    dateReferedToInvestigate: string;
    dateOfFinalReportIssued: string;
    recommendationOfFinalReport: string;
    personWhoAcceptedSubmission: string;
    acceptedSubmissionDate: string;
    handOveredDateOfSubmission: string;
    status: string;
  };
}
