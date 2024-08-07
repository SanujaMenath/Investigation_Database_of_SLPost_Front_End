import axios from "axios";
import { convertMillisecondsToLocalDateTime } from "../utils/date";
import { IIAssigmentDTO, InvestigationInspector } from "../@types/api";

export const baseUrl = "http://localhost:8080";

export type Suspector = { name: string; nic: string; dob: string };

export type InterimReport = {
  interimReportId: string;
  interdictedDate: string;
  recommendationOfInterimReport: string;
  dateOfInterimReportIssued: string;
};

export type FormalInquiry = {
  formalInquiryId: string;
  recommendationOfIO: string;
  dateOfAppoint: string;
  startedDate: string;
  endDate: string;
  dateOfRecommendation: string;
};

export type ChargeSheet = {
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
  status: string;

  suspectors: Suspector[];

  interimReports: InterimReport[];

  formalInquries: FormalInquiry[];

  investigationInspectors: {
    nic: string;
    caseNo: string;
    acquiredDate: string;
    submittedDate: string;
    reAcquiredDate: string;
    reSubmittedDate: string;
  }[];

  chargeSheet: ChargeSheet[];

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
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  matchpassword: string;
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

export const getSearchResults = async (keyword: string) => {
  try {
    const url = baseUrl + `/api/investigations/search?keyword=${keyword}`;

    const reqOption: RequestInit = {
      method: "GET",
    };

    const res = await fetch(url, reqOption);

    if (res.ok) {
      const invList: Array<any> = await res.json();

      return invList;
    }
  } catch (e) {
    console.error(e);
  }
};

const API_URL = "http://localhost:8080/api/interim-report";

type InterimReportData = {
  interimReportId: string;
  interimRecommendation: string;
  dateIssued: string;
};

export const getInterimReportById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateInterimReport = async (
  id: string,
  data: InterimReportData
) => {
  try {
    const { interimReportId, interimRecommendation, dateIssued } = data;

    const updatedData = {
      interimReportId,
      interimRecommendation,
      dateIssued,
    };

    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Update failed:", error);
    throw error;
  }
};

export const getInvestigationInspectors = async (): Promise<
  Array<InvestigationInspector> | undefined
> => {
  try {
    const url = `${baseUrl}/api/inspectors`;

    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createIIAssignment = async (assignment: IIAssigmentDTO) => {
  try {
    const investigatorData: IIAssigmentDTO = {
      caseNo: assignment.caseNo,
      inspector: assignment.inspector,
      investigation: assignment.investigation,
      acquiredDate: convertMillisecondsToLocalDateTime(assignment.acquiredDate),
      reacquiredDate: convertMillisecondsToLocalDateTime(
        assignment.reacquiredDate ? assignment.reacquiredDate : "0"
      ),
      submittedDate: convertMillisecondsToLocalDateTime(
        assignment.submittedDate ? assignment.submittedDate : "0"
      ),
      resubmittedDate: convertMillisecondsToLocalDateTime(
        assignment.resubmittedDate ? assignment.resubmittedDate : "0"
      ),
    };

    const reqUrl = `${baseUrl}/api/assignments`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const res = await fetch(reqUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(investigatorData),
    });

    if (res.status == 200) alert("II Added");
    else alert("II not added");
  } catch (error) {
    console.log(error);
  }
};
