import { APIResponse } from "../@types/api";
import { SearchQuery, SearchResult } from "../@types/search";
import { API_PREFIX } from "../constants";
import { getCommonHeaders } from "../utils/request";
import { getAuthHeaders } from "./authService";

export const SearchService = {
  search: async (query: SearchQuery): Promise<APIResponse<SearchResult[]>> => {
    try {
      // Query filtering
      const { filterType, searchValue } = query;
      const endpoint =
        filterType === "fileNumber"
          ? `${API_PREFIX}/investigations/search?value=${searchValue}`
          : filterType === "nic"
          ? `${API_PREFIX}/investigation-suspectors/search?value=${searchValue}`
          : `${API_PREFIX}/investigations/search?value=${searchValue}`;

      const response = await fetch(endpoint, {
        headers: {
          ...getCommonHeaders(),
          ...getAuthHeaders(),
        },
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      return {
        success: true,
        message: "Search fetch success",
        data: await response.json(),
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        error: "Search fetch failed",
      };
    }
  },
};
