export type FilterType = "fileNumber" | "nic" | "incidentDate";

export interface SearchQuery {
  filterType: FilterType;
  searchValue: string;
}

export interface SearchResult {
  id: string;
  fileId: string;
  incident: string;
  incidentDate: string;
  dateReferredToInvestigate: string;
  dateOfFinalReportIssued: string;
  status: string;
  // Add other properties as needed
}
