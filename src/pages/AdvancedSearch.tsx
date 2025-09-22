import { Box, Container, Text } from "@radix-ui/themes";
import { SearchBar } from "../components/search/SearchBar";
import Header from "../components/ui/Header";
import { useState } from "react";
import { SearchService } from "../services/search";
import { SearchQuery, SearchResult } from "../@types/search";

export default function AdvancedSearch() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    filterType: "fileNumber",
    searchValue: "",
  });
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [messages, setMessages] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSearch = async () => {
    const apiResponse = await SearchService.search(searchQuery);

    if (apiResponse.success && apiResponse.data) {
      setSearchResults(apiResponse.data);
      setMessages((prev) => [...prev, apiResponse.message || ""]);
    } else {
      setErrors((prev) => [...prev, apiResponse.error || ""]);
    }
  };

  console.log({
    searchResults,
    messages,
    errors,
  });

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-indigo-50 py-3 mb-4">
        <Container size="3">
          <div className="mb-6">
            <h1 className="text-2xl text-indigo-900 font-bold mb-1">
              Search & Filter
            </h1>
            <p className="text-sm text-indigo-600">
              Select the filter type and enter the search term.
            </p>
          </div>

          <SearchBar
            searchValue={searchQuery.searchValue}
            onSearchValueChange={(updatedValue) => {
              setSearchQuery((prev) => ({
                filterType: prev.filterType || "fileNumber",
                searchValue: updatedValue,
              }));
            }}
            onSearchButtonClicked={async () => {
              await handleSearch();
            }}
            onFilterChange={(type) =>
              setSearchQuery((prev) => ({
                filterType: type,
                searchValue: prev.searchValue,
              }))
            }
          />

          <div>{messages[messages.length - 1]}</div>
        </Container>
      </div>
    </div>
  );
}
