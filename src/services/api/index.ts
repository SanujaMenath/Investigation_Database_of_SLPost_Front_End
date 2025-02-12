import { InvestigationInspectorResponse } from "../../@types/api";
import {
  ChargeSheet,
  FormalInquiry,
  InterimReport,
  Investigation,
  InvestigationInspector,
  InvestigationSuspector,
  Suspector,
} from "../_api";
import { createInterimReport } from "./interimReport";
import { createInvestigation } from "./investigation";
import { createInvInspectorAssignment } from "./invInspector";
import { createSuspector } from "./suspector";

export type APIResponse<T> = {
  status: "success" | "failure";
  data?: T;
  error?: string;
};

type InvestigationCreationRequestProps = {
  investigation: Investigation;

  suspectors: Suspector[];

  interimReports: InterimReport[];

  formalInquries: FormalInquiry[];

  chargeSheets: ChargeSheet[];

  investigationInspectors: InvestigationInspector[];

  investigationSuspectors: InvestigationSuspector[];
};

export const investigationCreationPipeline = async (
  request: InvestigationCreationRequestProps
) => {
  try {
    // Investigation creation
    const investigationResponse = await createInvestigation(
      request.investigation
    );

    if (investigationResponse.status !== "success") {
      // return an error
      return;
    }

    // Suspectors creation
    const suspectorCount = request.suspectors.length;
    let suspectorCounter = 0;
    const suspectorsCreationResponse = await Promise.all(
      request.suspectors.map(async (suspector) => {
        await createSuspector(suspector);
        suspectorCounter++;
        return;
      })
    );

    if (!(suspectorsCreationResponse.length === suspectorCount)) {
      // return an error
      return;
    }

    // Investigation inspector creation
    const id = investigationResponse.data?.id;
    if(!id) return alert("Failed to create investigation");

    const inspectors = request.investigationInspectors.map(
      (invInspectorAssignment) =>
        createInvInspectorAssignment(
          invInspectorAssignment,
          id
        )
    );
    const investigationInspectorAssignment = await Promise.all(inspectors);

    const allInspectorsCreated = investigationInspectorAssignment.every(
      (response) => response === true
    );
    
    if (!allInspectorsCreated) {
      console.error("Failed to create one or more investigation inspectors");
      return;
    }
    
    // Interim report creation
    const interimReportResponses = await Promise.all(
      request.interimReports.map(async (interimReport) => {
      
        return createInterimReport({ ...interimReport});``
      })
    );

    const allInterimReportsCreated = interimReportResponses.every(
      (response) => response === true
    );


    // Formal inquiry creation

    // Charge sheet creation

    

    // Investigation suspectors creation
  } catch (error) {
    console.error(error);
  }
};
