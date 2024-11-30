import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { FormalInquiry, baseUrl } from "../api";

export const createFormalInquiry = async ({
  formalInquiryId,
  fileId,
  recommendationOfIO,
  dateOfAppoint,
  startedDate,
  endDate,
  dateOfRecommendation,
}: FormalInquiry): Promise<boolean> => {
  const url = `${baseUrl}/api/formal-inquiries`;

  const rawBody = {
    investigation: {
      fileId: fileId,
    },

    id:formalInquiryId,
   
    dateOfAppoint: convertMillisecondsToLocalDateTime(
      (dateOfAppoint)
    ),
    startedDate: convertMillisecondsToLocalDateTime(startedDate),
    endDate: convertMillisecondsToLocalDateTime(endDate),

    recommendationOfIO,

    dateOfRecommendation: convertMillisecondsToLocalDateTime(
      (dateOfRecommendation)
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
