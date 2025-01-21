export type investigation = {
    fileId: string;
    incident: string;
    incidentDate: string;
    dateReferredToInvestigate: string;
    dateOfFinalReportIssued: string;
    recommendationOfFinalReport: string;
    personWhoAcceptedSubmission: string;
    acceptedSubmissionDate: string;
    handOveredDateOfSubmission: string;
    divisionId: number;
    status: string;
    createdBy: number;
}

export type InvestigationSuspector = {
    interdictedDate: string;
    appealedAcceptedOrRejected: boolean;
    dateOfRestateForAppealed: string;
    dateOfFinalOrderThatInformedToAccused: string;
    dateOfAppealedForReinstate: string;
    restatedDate: string;
  }
  
  export type InterimReport = {
    fileId?: number;
    interimReportId: string;
    nic: string;
    recommendationOfInterimReport: string;
    dateOfInterimReportIssued: string;
  };
  
  export type FormalInquiry = {
    fileId: string;
    formalInquiryId: string;
    recommendationOfIO: string;
    dateOfAppoint: string;
    startedDate: string;
    endDate: string;
    dateOfRecommendation: string;
  };