export type FilterType = 'fileNumber' | 'nic' | 'incidentDate';

export interface SearchFilters {
  type: FilterType;
  value: string;
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