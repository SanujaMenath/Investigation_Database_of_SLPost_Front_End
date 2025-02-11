import React, { useState } from "react";
import MandatoryFields, { MandatoryFieldsState } from "../components/forms/MandatoryFields";
import InterimReport, { InterimReportState } from "../components/forms/InterimReport";
import FormalInquiry, { FormalInquiryFormState } from "../components/forms/FormalInquiry";
import SecondaryFields, { SecondaryFieldsState,} from "../components/forms/SecondaryFields";
import ChargeSheetForm, { ChargeSheetFormState } from "../components/forms/ChargesheetForm";
import CreateSuspector, { CreateSuspectorState } from "../components/forms/CreateSuspector";
import IIAssignment, { IIAssignmentState } from "../components/forms/IIAssignment";
import InvSuspectsForm, { InvSuspectsFormState } from "../components/forms/InvSuspectsForm";



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
        <InterimReport
          getInterimReport={(s) => setInterimReport(s)}
          onRemove={() => {}}
        />
        <ChargeSheetForm getChargeSheet={(s) => setChargeSheet(s)} />

        <FormalInquiry getFormalInquiry={(s) => setFormalInquiry(s)} />
        <CreateSuspector getSuspectorDetails={(s) => setSuspectorDetails(s)} />
        <IIAssignment getIIAssignment={(s) => setIIAssignment(s)} />
        <InvSuspectsForm getInvSuspectsForm={(s) => setInvSuspectsForm(s)} />
      </form>
    </div>
  );
}

export default CreateInvestigation;
