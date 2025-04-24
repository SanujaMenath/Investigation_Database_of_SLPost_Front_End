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
import { handlePipeline } from "../services/investigationService";

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
  const [chargeSheets, setChargeSheets] = useState<{ id: string }[]>([]);
  const [formalInquiries, setFormalInquiries] = useState<{ id: string }[]>([]);
  console.log("77", chargeSheet);

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

          {/* 🔹 Display all ChargeSheets */}
          {chargeSheets.map(({ id }) => (
            <ChargeSheetForm
              key={id}
              id={id}
              getChargeSheet={(s) => setChargeSheet(s)}
              onRemove={() =>
                setChargeSheets((prev) =>
                  prev.filter((report) => report.id !== id)
                )
              }
            />
          ))}

          {/*  Button to Add ChargeSheet with Unique ID */}
          <Button
            onClick={() =>
              setChargeSheets((prev) => [...prev, { id: crypto.randomUUID() }])
            }
            type="button"
            variant="soft"
            radius="large"
          >
            Add ChargeSheet
          </Button>

          {/* 🔹 Display all Formal Inquiries */}
          {formalInquiries.map(({ id }) => (
            <FormalInquiry
              key={id}
              id={id}
              getFormalInquiry={(s) => setFormalInquiry(s)}
              onRemove={() =>
                setFormalInquiries(
                  (prev) =>
                    prev?.filter((report) => report.id !== id)
                )
              }
            />
          ))}

          {/*  Button to Add Formal Inquiry with Unique ID */}
          <Button
            onClick={() =>
              setFormalInquiries((prev) => [
                ...prev,
                { id: crypto.randomUUID() },
              ])
            }
            type="button"
            variant="soft"
            radius="large"
          >
            Add Formal Inquiry
          </Button>

          <CreateSuspector
            getSuspectorDetails={(s) => setSuspectorDetails(s)}
          />
          <IIAssignment getIIAssignment={(s) => setIIAssignment(s)} />
          <InvSuspectsForm getInvSuspectsForm={(s) => setInvSuspectsForm(s)} />

          {/* Pass all states to the service function */}
          <Button
            onClick={async () => {
              await handlePipeline(
                mandatoryFields,
                secondaryFields,
                interimReport,
                chargeSheet,
                formalInquiry,
                suspectorDetails,
                iiAssignment,
                invSuspectsForm
              );
            }}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateInvestigation;
