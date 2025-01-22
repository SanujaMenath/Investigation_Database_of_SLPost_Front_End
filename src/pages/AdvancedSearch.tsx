import { Box, Container, Text } from "@radix-ui/themes";
import { useSearch } from "../services/search";
import { SearchBar } from "../components/search/SearchBar";
import Header from "../components/ui/Header";

export default function AdvancedSearch() {
  const { results, error, setFilters, performSearch } = useSearch();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-indigo-50 py-3 mb-4">
        <Container size="3">
          <Box py="6">
            <div className="mb-6">
              <h1 className="text-2xl text-indigo-900 font-bold mb-1">
                Search & Filter
              </h1>
              <p className="text-sm text-indigo-600">
                Select the filter type and enter the search term.
              </p>
            </div>

            <SearchBar
              onSearch={performSearch}
              onFilterChange={(type) => setFilters((prev) => ({ ...prev, type, value: "" }))}
            />

            <Box mt="6">
              {error && <Text color="red">{error}</Text>}
              {results.map((result) => (
                  <Box key={result.id} p="4" mb="2" className="bg-white shadow rounded">
                    <h2 className="text-lg font-semibold text-indigo-800"></h2>
                    <p className="text-sm text-gray-600"></p>
                  </Box>
                ))}
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
