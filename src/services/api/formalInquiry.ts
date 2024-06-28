import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { FormalInquiry, baseUrl } from "../api";

export const createFormalInquiry = async ({
  formalInquiryId,
  recommendationOfIO,
  dateOfAppoint,
  startedDate,
  endDate,
  dateOfRecommendation,
}: FormalInquiry): Promise<boolean> => {
  const url = `${baseUrl}/api/formal-inquiries`;

  const rawBody = {
    formalInquiryId,
    recommendationOfIO,

    dateOfAppoint: convertMillisecondsToLocalDateTime(
      Date.parse(dateOfAppoint)
    ),
    startedDate: convertMillisecondsToLocalDateTime(Date.parse(startedDate)),
    endDate: convertMillisecondsToLocalDateTime(Date.parse(endDate)),
    dateOfRecommendation: convertMillisecondsToLocalDateTime(
      Date.parse(dateOfRecommendation)
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
