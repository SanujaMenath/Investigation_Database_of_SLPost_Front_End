import axios from "axios";
import { convertMillisecondsToLocalDateTime } from "../utils/date";
import { InvestigationInspector } from "../@types/api";

const baseUrl = "http://localhost:8080";

type InvestigationProps = {
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
};

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
  status,
}: InvestigationProps) => {
  try {
    const url = baseUrl + "/api/investigations";

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = {
      fileId,
      incident,
      incidentDate: convertMillisecondsToLocalDateTime(
        Date.parse(incidentDate)
      ),
      dateReferredToInvestigate: dateReferredToInvestigate
        ? convertMillisecondsToLocalDateTime(
            Date.parse(dateReferredToInvestigate)
          )
        : null,
      dateOfFinalReportIssued: dateOfFinalReportIssued
        ? convertMillisecondsToLocalDateTime(
            Date.parse(dateOfFinalReportIssued)
          )
        : null,
      recommendationOfFinalReport,
      personWhoAcceptedSubmission,
      acceptedSubmissionDate: acceptedSubmissionDate
        ? convertMillisecondsToLocalDateTime(Date.parse(acceptedSubmissionDate))
        : null,
      handOveredDateOfSubmission: handOveredDateOfSubmission
        ? convertMillisecondsToLocalDateTime(
            Date.parse(handOveredDateOfSubmission)
          )
        : null,
      status,
    };

    const reqOption: RequestInit = {
      method: "POST",
      body: JSON.stringify(raw),
      headers,
    };

    const res = await fetch(url, reqOption);

    if (res.ok) {
      console.log(await res.json());
      alert("Item added!");
      return;
    }

    alert("Item not added!");
  } catch (e) {
    console.log(e);
  }
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

export const updateInvestigation = async ({
  fileId,
  incident,
  incidentDate,
  dateReferredToInvestigate,
  dateOfFinalReportIssued,
  recommendationOfFinalReport,
  personWhoAcceptedSubmission,
  acceptedSubmissionDate,
  handOveredDateOfSubmission,
  status,
}: InvestigationProps) => {
  try {
    const url = `${baseUrl}/api/investigations/${fileId}`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = {
      fileId,
      incident,
      incidentDate,
      dateReferredToInvestigate,
      dateOfFinalReportIssued,
      recommendationOfFinalReport,
      personWhoAcceptedSubmission,
      acceptedSubmissionDate,
      handOveredDateOfSubmission,
      status,
    };

    const reqOption: RequestInit = {
      method: "PUT",
      body: JSON.stringify(raw),
      headers,
    };

    const res = await fetch(url, reqOption);

    if (res.ok) {
      console.log(await res.json());
      alert("Updated Successfully!");
      return;
    }

    alert("Update is not Success!");
  } catch (e) {
    console.log(e);
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
