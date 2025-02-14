import { APIResponse } from "../@types/api";
import { API_PREFIX } from "../constants";
import { getAuthHeaders } from "../services/authService";

export const getCommonHeaders = (): Record<string, string> => {
  return {
    "Content-Type": "application/json",
  };
};

type RequestConfig = {
  relativeUrl?: string;
  fullUrl?: string;
  body: string;
};

const PostRequest = async (
  config: RequestConfig
): Promise<APIResponse<any>> => {
  try {
    const response = await fetch(
      `${config.fullUrl ? config.fullUrl : API_PREFIX + config.relativeUrl}`,
      {
        headers: {
          ...getCommonHeaders(),
          ...getAuthHeaders(),
        },
        method: "POST",
        body: config.body,
      }
    );

    if (!response.ok)
      throw new Error(
        JSON.stringify({
          statusCode: response.status,
          message: await response.json(),
        })
      );

    return {
      success: true,
      data: await response.json(),
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: err as string,
    };
  }
};

export const apiRequest = {
  PostRequest,
};
