import { useState } from "react";
import MandatoryFields, {
  MandatoryFieldsState,
} from "../components/forms/MandatoryFields";
import InterimReport, {
  InterimReportState,
} from "../components/forms/InterimReport";
import FormalInquiry, {
  FormalInquiryFormState,
} from "../components/forms/FormalInquiry";
import SecondaryFields, {
  SecondaryFieldsState,
} from "../components/forms/SecondaryFields";
import ChargeSheetForm, {
  ChargeSheetFormState,
} from "../components/forms/ChargesheetForm";
import CreateSuspector, {
  CreateSuspectorState,
} from "../components/forms/CreateSuspector";
import IIAssignment, {
  IIAssignmentState,
} from "../components/forms/IIAssignment";
import InvSuspectsForm, {
  InvSuspectsFormState,
} from "../components/forms/InvSuspectsForm";
import Header from "../components/ui/Header";
import { Button } from "@radix-ui/themes";
import { apiRequest } from "../utils/requestWrapper";

function CreateInvestigation() {
  const [mandatoryFields, setMandatoryFields] =
    useState<MandatoryFieldsState>();
  const [secondaryFields, setSecondaryFields] =
    useState<SecondaryFieldsState>();
  const [interimReport, setInterimReport] = useState<InterimReportState>();
  const [chargeSheet, setChargeSheet] = useState<ChargeSheetFormState>();
  const [formalInquiry, setFormalInquiry] = useState<FormalInquiryFormState>();
  const [suspectorDetails, setSuspectorDetails] =
    useState<CreateSuspectorState>();
  const [iiAssignment, setIIAssignment] = useState<IIAssignmentState>();
  const [invSuspectsForm, setInvSuspectsForm] =
    useState<InvSuspectsFormState>();

  // 🔹 Updated: Using an array of objects with unique IDs
  const [interimReports, setInterimReports] = useState<{ id: string }[]>([]);

  const handlePipeline = async () => {
    try {
      // Queue starts here
      // 1
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
      // 2
      await apiRequest.PostRequest({
        relativeUrl: "/interim-report/create",
        body: JSON.stringify({
          interimReportId: interimReport?.interimReportId,

        //start from here
        
        })
      });
      // Parallel
      // Promise.all([
      //   await apiRequest,
      //   await apiRequest,
      // ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-indigo-50">
        <h1 className="text-4xl text-indigo-900 font-medium mt-4">
          Create Investigation
        </h1>

        <form className="space-y-4 p-4 mx-auto w-full max-w-3xl border rounded mb-4 mt-6">
          <MandatoryFields getMandatoryFields={(s) => setMandatoryFields(s)} />
          <SecondaryFields getSecondaryFields={(s) => setSecondaryFields(s)} />

          {/* 🔹 Display all Interim Reports */}
          {interimReports.map(({ id }) => (
            <InterimReport
              key={id}
              id={id}
              getInterimReport={(s) => setInterimReport(s)}
              onRemove={() =>
                setInterimReports((prev) =>
                  prev.filter((report) => report.id !== id)
                )
              }
            />
          ))}

          {/*  Button to Add Interim Report with Unique ID */}
          <Button
            onClick={() =>
              setInterimReports((prev) => [
                ...prev,
                { id: crypto.randomUUID() },
              ])
            }
            type="button"
            variant="soft"
            radius="large"
          >
            Add Interim Report
          </Button>

          <ChargeSheetForm getChargeSheet={(s) => setChargeSheet(s)} />
          <FormalInquiry getFormalInquiry={(s) => setFormalInquiry(s)} />
          <CreateSuspector
            getSuspectorDetails={(s) => setSuspectorDetails(s)}
          />
          <IIAssignment getIIAssignment={(s) => setIIAssignment(s)} />
          <InvSuspectsForm getInvSuspectsForm={(s) => setInvSuspectsForm(s)} />

          <Button onClick={handlePipeline}>Save</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateInvestigation;
