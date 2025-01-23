import { useState } from "react";
import { SearchFilters, SearchResult } from "../@types/search";
import { baseUrl, getAuthToken } from "./authService";

export const useSearch = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFilters | null>(null);
  const [error, setError] = useState<string | null>(null);

  const performSearch = async () => {
    if (!filters?.type || !filters?.value) {
      setError("Filters are invalid or incomplete.");
      return;
    }
    console.log("Filters before search:", filters);

    setLoading(true);
    setError(null);

    try {
      const authToken = getAuthToken();
      const url = new URL(`${baseUrl}/api/investigations/search`);
      url.searchParams.append("filterType", filters.type);
      url.searchParams.append("filterValue", filters.value);

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch results.");
      }

      const data = await response.json();
      if (!Array.isArray(data)) throw new Error("Invalid response format.");

      setResults(data as SearchResult[]);
    } catch (err: any) {
      console.error("Search failed:", err);
      setError(err.message || "An unknown error occurred.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    results,
    loading,
    error,
    filters,
    setFilters,
    performSearch,
  };
};
