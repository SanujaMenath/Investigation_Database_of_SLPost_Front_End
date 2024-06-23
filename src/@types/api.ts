export type InvestigationInspector = {
  nic: string;
  name: string;
  assignments: Array<any>; // Change any to relevant
  disabled:boolean;
};

export type Suspector = {
  id: number;
  nic: string;
  name: string;
  dob: string;
};

export type IIAssigmentDTO = {
  caseNo: string;
  investigation?: string;
  inspector: string;
  acquiredDate: string;
  submittedDate?: string;
  reacquiredDate?: string;
  resubmittedDate?: string;
};
