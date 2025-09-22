import { apiRequest } from "../utils/requestWrapper";
0;
import { MandatoryFieldsState } from "../components/forms/MandatoryFields";
import { SecondaryFieldsState } from "../components/forms/SecondaryFields";
import { InterimReportState } from "../components/forms/InterimReport";
import { ChargeSheetFormState } from "../components/forms/ChargesheetForm";
import { FormalInquiryFormState } from "../components/forms/FormalInquiry";
import { CreateSuspectorState } from "../components/forms/CreateSuspector";
import { IIAssignmentState } from "../components/forms/IIAssignment";
import { InvSuspectsFormState } from "../components/forms/InvSuspectsForm";

/*
 **  Function to handle investigation pipeline. **
 */

export const handlePipeline = async (
  mandatoryFields?: MandatoryFieldsState,
  secondaryFields?: SecondaryFieldsState,
  interimReport?: InterimReportState,
  chargeSheet?: ChargeSheetFormState,
  formalInquiry?: FormalInquiryFormState,
  suspectorDetails?: CreateSuspectorState,
  iiAssignment?: IIAssignmentState,
  invSuspectsForm?: InvSuspectsFormState
) => {
  try {
    // Step 1: Create Mandatory Fields and Secondary Fields
    await apiRequest.PostRequest({
      relativeUrl: "/investigations/create",
      body: JSON.stringify({
        fileId: mandatoryFields?.fileNumber,
        incident: mandatoryFields?.incident,
        incidentDate: mandatoryFields?.dateOfIncident,
        dateReferredToInvestigate: mandatoryFields?.dateReferredToInvestigate,
        createdBy: mandatoryFields?.createdBy,
        ...secondaryFields,
      }),
    });

    
    //Step 2: Create Suspector
    await apiRequest.PostRequest({
      relativeUrl: "/suspector/create",
      body: JSON.stringify({
        nic: suspectorDetails?.nic,
        name: suspectorDetails?.name,
        dob: suspectorDetails?.dateOfBirth,
      })
    })

    // Step 2: Create Interim Report
    // await apiRequest.PostRequest({
    //   relativeUrl: "/interim-report/create",
    //   body: JSON.stringify({
    //     interimReportId: interimReport?.interimReportId,
    //     fileId: mandatoryFields?.fileNumber,
    //     invInspectorNic: interimReport?.invInspectorNic,
    //     reportReccomendation: interimReport?.reportReccomendation,
    //     issuedDate: interimReport?.issuedDate,  

    //   }),
    // });

    // Parallel
    // Promise.all([
    //   await apiRequest,
    //   await apiRequest,
    // ]);
  } catch (err) {
    console.error(err);
  }
};
