import { convertMillisecondsToLocalDateTime } from "../utils/date";
import { IIAssigmentDTO, InvestigationInspector } from "../@types/api";

export const baseUrl = "http://localhost:8080";
const token = sessionStorage.getItem("token");

export type Suspector = { name: string; nic: string; dob: string };

export type InterimReport = {
  fileId: string;
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

export type ChargeSheet = {
  fileId: string;
  suspectorNic: string;
  chargeSheetId: string;
  chargeSheetIssuedDate: string;
  dateOfAnswered: string;
  dateOfPersonalFileCalled: string;
  dateOfPersonalReturned: string;
  dateOfDisciplinaryOrderTaken: string;
  dateOfAppealedForPSC: string;
  pscOrderDescription: string;
  dateOfPSCOrderTaken: string;
  dateOfAppealedToAAT: string;
  dateOfAATOrderTaken: string;
  aatOrderDescription: string;
};

export type InvestigationProps = {
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

  suspectors: Suspector[];

  interimReports: InterimReport[];

  formalInquries: FormalInquiry[];

  chargeSheets: ChargeSheet[];

  investigationInspectors: {
    nic: string;
    caseNo: string;
    acquiredDate: string;
    submittedDate: string;
    reAcquiredDate: string;
    reSubmittedDate: string;
  }[];
  // investigationSuspectors: {
    interdictedDate: string;
    appealedAcceptedOrRejected: boolean;
    dateOfRestateForAppealed: string;
    dateOfFinalOrderThatInformedToAccused: string;
    dateOfAppealedForReinstate: string;
    restatedDate: string;
  // }[];
 
};

export type InvInspectorProps = {
  name: string;
  nic: string;
};

export type NewUserDetails = {
  email: string;
  firstName: string;
  lastName: string;
  locationId: number;
  locationType: string;
  password: string;
  role: string;
  provinceId: number;
  divisionId: number;
};

export type UpdateInquiries = {
  formalInquiryId: string;
  dateOfAppoint: string;
  startedDate: string;
  endDate: string;
  recommendationOfIO: string;
  dateOfRecommendation: string;
};

export type UpdateSheets = {
  chargeSheetId: string;
  chargeSheetIssuedDate: string;
  dateOfAnswered: string;
  dateOfPersonalFileCalled: string;
  dateOfPersonalReturned: string;
  dateOfDisciplinaryOrderTaken: string;
  dateOfAppealedForPSC: string;
  pscOrderDescription: string;
  dateOfPSCOrderTaken: string;
  dateOfAppealedToAAT: string;
  dateOfAATOrderTaken: string;
  aatOrderDescription: string;
};

export type UpdateReports = {
  interimReportId: string;
  nic: string;
  recommendationOfInterimReport: string;
  dateOfInterimReportIssued: string;
};

// Fetch search results
export const getSearchResults = async (keyword: string) => {
  try {
    const url = `${baseUrl}/api/investigations/search?keyword=${keyword}`;
    const res = await fetch(url);

    if (res.ok) {
      const invList: Array<any> = await res.json();
      return invList;
    } else {
      console.error(`Failed to fetch search results: ${res.status}`);
    }
  } catch (e) {
    console.error(e);
  }
};

// Fetch interim report by ID
const API_URL = "http://localhost:8080/api/interim-report";

type InterimReportData = {
  interimReportId: string;
  interimRecommendation: string;
  dateIssued: string;
};

export const getInterimReportById = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (res.ok) {
      return await res.json();
    } else {
      console.error(`Failed to fetch interim report: ${res.status}`);
    }
  } catch (error) {
    console.error(error);
  }
};

// Update interim report
export const updateInterimReport = async (
  id: string,
  data: InterimReportData
) => {
  try {
    const updatedData = JSON.stringify(data);

    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: updatedData,
    });

    if (res.ok) {
      return await res.json();
    } else {
      console.error(`Update failed: ${res.status}`);
    }
  } catch (error) {
    console.error("Update failed:", error);
  }
};

// Fetch investigation inspectors
export const getInvestigationInspectors = async (): Promise<
  Array<InvestigationInspector> | undefined
> => {
  try {
    const url = `${baseUrl}/api/inspectors`;
    
    // Retrieve the token 
    const token = sessionStorage.getItem("token");

    const res = await fetch(url, {
      method: "GET",
      headers: {
 
        Authorization: `Bearer ${token}`, 
      },
    });

    if (res.ok) {
      return await res.json();
    } else {
      console.error(`Failed to fetch inspectors: ${res.status}`);
    }
  } catch (error) {
    console.error("Error fetching inspectors:", error);
  }
};





