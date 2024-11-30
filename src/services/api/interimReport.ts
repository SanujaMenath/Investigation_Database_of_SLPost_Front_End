import { InterimReport, baseUrl } from "../api";
import { convertMillisecondsToLocalDateTime } from "../../utils/date";

export const createInterimReport = async ({
  fileId,
  interimReportId,
  iiId,
  interdictedDate,
  recommendationOfInterimReport,
  dateOfInterimReportIssued,
}: InterimReport): Promise<boolean> => {
  const url = `${baseUrl}/api/interim-report`;

  const rawBody = {
    investigation: {
      fileId: fileId,
    },
    investigationInspector: {
      nic: iiId,
    },
    interimReportId,
    interdictedDate: convertMillisecondsToLocalDateTime(interdictedDate),
    interimRecommendation: recommendationOfInterimReport,
    dateIssued: convertMillisecondsToLocalDateTime(dateOfInterimReportIssued),
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
