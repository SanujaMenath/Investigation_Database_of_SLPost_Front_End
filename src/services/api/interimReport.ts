import { InterimReport,baseUrl } from "../api"
import { convertMillisecondsToLocalDateTime } from "../../utils/date"

export const createInterimReport = async({
    interimReportId,
    interdictedDate,
    recommendationOfInterimReport,
    dateOfInterimReportIssued

}:InterimReport): Promise<boolean>=>{
    const url = `${baseUrl}/api/interim-report`;

    const rawBody = {
        interimReportId,
        interdictedDate: convertMillisecondsToLocalDateTime(
            Date.parse(interdictedDate)
          ),
        recommendationOfInterimReport,
        dateOfInterimReportIssued: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfInterimReportIssued)
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