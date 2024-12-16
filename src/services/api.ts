import { convertMillisecondsToLocalDateTime } from "../utils/date";
import { IIAssigmentDTO, InvestigationInspector } from "../@types/api";

export const baseUrl = "http://localhost:8080";

export type Suspector = { name: string; nic: string; dob: string };

export type InterimReport = {
  fileId: string;
  interimReportId: string;
  iiId: string;
  interdictedDate: string;
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

  appealedAcceptedOrRejected: string;
  dateOfRestateForAppealed: string;
  dateOfFinalOrderThatInformedToAccused: string;
  dateOfAppealedForReinstate: string;
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
  interdictedDate: string;
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
    const res = await fetch(url);

    if (res.ok) {
      return await res.json();
    } else {
      console.error(`Failed to fetch inspectors: ${res.status}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const sendInvestigationData = async (investigationData: InvestigationProps) => {
  try {
    const url = `${baseUrl}/api/investigations`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(investigationData), 
    });

    if (!response.ok) {
      throw new Error(`Failed to send data: ${response.statusText}`);
    }

    const result = await response.json(); 
    console.log("Investigation Data saved successfully:", result);
  } catch (error) {
    console.error("Error while sending investigation data:", error);
  }
};

// // Create assignment
// export const createIIAssignment = async (assignment: IIAssigmentDTO) => {
//   try {
//     const investigatorData: IIAssigmentDTO = {
//       caseNo: assignment.caseNo,
//       inspector: assignment.inspector,
//       investigation: assignment.investigation,
//       acquiredDate: convertMillisecondsToLocalDateTime(assignment.acquiredDate),
//       reacquiredDate: convertMillisecondsToLocalDateTime(
//         assignment.reacquiredDate || "0"
//       ),
//       submittedDate: convertMillisecondsToLocalDateTime(
//         assignment.submittedDate || "0"
//       ),
//       resubmittedDate: convertMillisecondsToLocalDateTime(
//         assignment.resubmittedDate || "0"
//       ),
//     };

//     const reqUrl = `${baseUrl}/api/assignments`;

//     const res = await fetch(reqUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(investigatorData),
//     });

//     if (res.ok) {
//       alert("II Added");
//     } else {
//       alert("II not added");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
