export type FilterType = 'fileNumber' | 'nic' | 'incidentDate';

export interface SearchFilters {
  type: FilterType;
  value: string;
}

export interface SearchResult {
  id: string;
  fileNumber: string;
  nic: string;
  incidentDate: string;
  // Add other properties as needed
}