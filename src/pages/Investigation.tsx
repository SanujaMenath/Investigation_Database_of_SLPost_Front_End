// src/pages/InvestigationDetails.tsx

import React, {  useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  InvestigationProps,
  createIIAssignment,
  createInvestigation,
  getInvestigationInspectors,
} from "../services/api";
import Button from "../components/UI/Button";
import { InvestigationInspector, Suspector } from "../@types/api";

const Investigation: React.FC = () => {
  const { t } = useTranslation();

  type FormData = InvestigationProps;

  const selectionInsepectorDropdownRef = useRef<HTMLSelectElement>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const {
    fields: suspectors,
    append: appendSuspectors,
    remove: removeSuspectors,
  } = useFieldArray({
    name: "suspectors",
    control,
  });

  const {
    fields: interimReports,
    append: appendInterimReports,
    remove: removeInterimReports,
  } = useFieldArray({
    name: "interimReports",
    control,
  });

  const {
    fields: formalInquries,
    append: appendFormalInquries,
    remove: removeFormalInquries,
  } = useFieldArray({
    name: "formalInquries",
    control,
  });

  const {
    fields: chargeSheet,
    append: appendChargeSheet,
    remove: removeChargeSheet,
  } = useFieldArray({
    name: "chargeSheet",
    control,
  });

  const {
    fields: investigationInspectors,
    append: appendinvestigationInspectors,
    remove: removeinvestigationInspectors,
  } = useFieldArray({
    name: "investigationInspectors",
    control,
  });

  const [suspectorList, setSuspectorList] = React.useState<Array<Suspector>>();

  const [investigationInspectorNICs, setInvestigationInspectorNICs] =
    React.useState<Array<{ name: string; nic: string; isAssigned: boolean }>>(
      []
    );
  const [isIIDropdownLocked, setIsIIDropdownLocked] =
    React.useState<boolean>(false);

  const [investigationInspectorList, setInvestigationInspectorList] =
    React.useState<Array<InvestigationInspector>>();

  // States
  const [dateReferredToInvestigate, setDateRefferedToInvestigate] =
    React.useState<string>();

  React.useEffect(() => {
    // Initial load-ups from API
    getInvestigationInspectors()
      .then((res) => {
        if (res) {
          setInvestigationInspectorList(
            res.map((x) => ({ ...x, disabled: false }))
          );
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="font-normal">
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
        <h1 className="text-black dark:text-white">
          {t("Investigation Details")}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="space-y-4 p-4 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-3xl border-r-4 border-l-4 border-b-4 border-t-4 mb-4"
      >
        {/* Mandatory Fields */}
        <div id="mandatoryFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Mandatory Fields")}
          </h1>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-col space-y-2 w-1/2">
              <input
                type="text"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                placeholder={t("File Number")}
                {...register("fileId")}
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2">
              <input
                type="text"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                placeholder={t("Incident")}
                {...register("incident")}
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2">
              <input
                type="text"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                placeholder={t("Incident Date")}
                {...register("incidentDate")}
              />
            </div>
            <div className="flex space-y-2 w-1/2">
              <input
                type="date"
                name="dateReferredToInvestigate"
                id="dateReferredToInvestigate"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
              />
            </div>
          </div>
        </div>

        {/* Investigation Inspector Fields */}
        <div id="investigationFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2 flex items-center">
            {t("Investigation Inspector")}
          </h1>
          <div className="flex items-center gap-1 flex-wrap">
            {investigationInspectorNICs.map((inv) => (
              <div
                key={inv.nic}
                className={`p-1 px-6 ${
                  inv.isAssigned ? "bg-green-500" : "bg-orange-500"
                } text-xs rounded-xl ml-2 mt-1 text-white`}
              >
                {inv.name} : {inv.nic}
              </div>
            ))}
          </div>
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col space-y-2 w-1/2 justify-start">
              <select
                name="selectInspector"
                id="selectInspector"
                ref={selectionInsepectorDropdownRef}
                className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              >
                <option value={undefined} selected disabled>
                  Select from here
                </option>
                {investigationInspectorList?.map((each) => {
                  const investigator = [each.name, each.nic];

                  return (
                    <option
                      key={each.nic}
                      value={each.nic}
                      disabled={each.disabled}
                    >
                      {each.name}
                    </option>
                  );
                })}
              </select>

              <div className="flex items-center gap-1">
                <Button
                  size="medium"
                  type="button"
                  className="bg-[#5964e6]/20 text-[#5964e6] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
                  onClick={() => {
                    const value = selectionInsepectorDropdownRef.current?.value;
                    if (value) {
                      setInvestigationInspectorList((prev) => {
                        if (prev)
                          return prev.map((x) => {
                            if (x.nic == value) x.disabled = true;
                            return x;
                          });
                        return prev;
                      });
                      appendinvestigationInspectors({
                        nic: value,
                        caseNo: "",
                        acquiredDate: "",
                        submittedDate: "",
                        reAcquiredDate: "",
                        reSubmittedDate: "",
                      });
                    }
                  }}
                >
                  Add New
                </Button>
                <Button
                  size="medium"
                  type="button"
                  className="bg-[#e65959]/20 text-[#e65959] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
                  onClick={() => setInvestigationInspectorNICs([])}
                >
                  Clear
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 w-1/2">
              {investigationInspectors.map((inspector, i) => (
                <div key={inspector.id} className="w-full">
                  <input
                    className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
                    type="text"
                    placeholder="NIC"
                    disabled
                    {...register(`investigationInspectors.${i}.nic`)}
                  />
                  <input
                    className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
                    type="text"
                    placeholder="Case No"
                    {...register(`investigationInspectors.${i}.caseNo`)}
                  />
                  <input
                    className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
                    type="date"
                    placeholder="Acquired Date"
                    {...register(`investigationInspectors.${i}.acquiredDate`)}
                  />
                  <input
                    className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
                    type="date"
                    placeholder="Submitted Date"
                    {...register(`investigationInspectors.${i}.submittedDate`)}
                  />
                  <input
                    className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
                    type="date"
                    placeholder="Reacquired Date"
                    {...register(`investigationInspectors.${i}.reAcquiredDate`)}
                  />
                  <input
                    className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
                    type="date"
                    placeholder="Resubmitted Date"
                    {...register(
                      `investigationInspectors.${i}.reSubmittedDate`
                    )}
                  />

                  <Button
                    size="medium"
                    type="button"
                    className="bg-[#e65959]/20 text-[#e65959] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
                    onClick={() => {
                      setInvestigationInspectorList((prev) => {
                        if (prev)
                          return prev.map((x) => {
                            if (x.nic == inspector.nic) x.disabled = false;
                            return x;
                          });
                        return prev;
                      });
                      removeinvestigationInspectors(i);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suspector Fields */}

        <div id="suspectorFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Suspector")}
          </h1>

          <Button
            size="large"
            type="button"
            className="bg-[#5964e6]/20 text-[#5964e6] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
            onClick={() =>
              appendSuspectors({
                name: "",
                nic: "",
                dob: "",
              })
            }
          >
            Add new suspector
          </Button>

          <div id="addNewSuspectorContainer">
            {suspectors.map((suspector, i) => (
              <div key={suspector.id} className="suspector border mb-4">
                <div className="flex flex-col space-y-2 w-full">
                  <input
                    id="name"
                    type="text"
                    required
                    className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 w-1/2 !outline-none rounded-lg m-2"
                    placeholder={t("Name")}
                    {...register(`suspectors.${i}.name`)}
                  />
                </div>

                <div className="flex flex-col space-y-2 w-full">
                  <input
                    id="nic"
                    type="text"
                    required
                    className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 w-1/2 !outline-none rounded-lg m-2"
                    placeholder={t("NIC number")}
                    {...register(`suspectors.${i}.nic`)}
                  />
                </div>

                <div className=" flex flex-col space-y-2 w-1/2">
                  <label htmlFor="dob">{t("Date of Birth ")}:</label>
                  <input
                    type="date"
                    className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                    {...register(`suspectors.${i}.dob`)}
                  />
                </div>

                <Button
                  size="large"
                  type="button"
                  className="bg-[#e65959]/20 text-[#e65959] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
                  onClick={() => removeSuspectors(i)}
                >
                  Remove Suspector
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Interim Report Fields */}
        <div id="interimReportFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Interim Report")}
          </h1>

          <Button
            size="large"
            type="button"
            className="bg-[#5964e6]/20 text-[#5964e6] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
            onClick={() =>
              appendInterimReports({
                interimReportId: "",
                interdictedDate: "",
                dateOfInterimReportIssued: "",
                recommendationOfInterimReport: "",
              })
            }
          >
            Add new report
          </Button>

          <div id="interimReportsContainer">
            {interimReports.map((report, i) => (
              <div key={report.id} className="report border mb-4">
                <div className="flex flex-col space-y-2 w-1/2">
                  <input
                    type="text"
                    className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                    placeholder={t("Interim Report Id")}
                    {...register(`interimReports.${i}.interimReportId`)}
                  />
                </div>

                <div className=" space-y-2 w-full ml-3">
                  <label htmlFor="interdictedDate">
                    {t("Interdicted Date ")}:
                  </label>
                  <input
                    type="date"
                    className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                    {...register(`interimReports.${i}.interdictedDate`)}
                  />
                </div>

                <div className="flex flex-col space-y-2 w-full">
                  <textarea
                    className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                    placeholder={t("Recommendation Of Interim Report")}
                    {...register(
                      `interimReports.${i}.recommendationOfInterimReport`
                    )}
                  />
                </div>

                <div className=" space-y-2 w-full ml-3">
                  <label htmlFor="dateOfInterimReportIssued">
                    {t("Date of Interim Report Issued")}:
                  </label>
                  <input
                    type="date"
                    className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                    {...register(`interimReports.${i}.dateOfInterimReportIssued`)}
                  />
                  </div>

                <Button
                  size="large"
                  type="button"
                  className="bg-[#e65959]/20 text-[#e65959] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
                  onClick={() => removeInterimReports(i)}
                >
                  Remove report
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Formal Inquiry Fields */}
        <div className="formalInquiryFields">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Formal Inquiry")}
          </h1>

          <Button
            size="large"
            type="button"
            className="bg-[#5964e6]/20 text-[#5964e6] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
            onClick={() =>
              appendFormalInquries({
                formalInquiryId: "",
                recommendationOfIO: "",
                dateOfAppoint: "",
                startedDate: "",
                endDate: "",
                dateOfRecommendation: "",
              })
            }
          >
            Add New Report
          </Button>

          {formalInquries.map((inquiry, i) => (
            <div
              key={inquiry.id}
              id="formalInquiryFields"
              className="flex flex-col w-full gap-2 border mt-3"
            >
              <div className="flex flex-col space-y-2 w-1/2">
                <input
                  type="text"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Formal Inquiry Id")}
                  {...register(`formalInquries.${i}.formalInquiryId`)}
                />
              </div>

              <div className=" space-y-2 w-full ml-3">
                <label htmlFor="dateOfAppoint">{t("Date Of Appoint")}:</label>
                <input
                  type="date"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                  {...register(`formalInquries.${i}.dateOfAppoint`)}
                />
              </div>

              <div className=" space-y-2 w-full ml-3">
                <label htmlFor="startedDate">{t("Started Date")}:</label>
                <input
                  type="date"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                  {...register(`formalInquries.${i}.startedDate`)}
                />
              </div>

              <div className=" space-y-2 w-full ml-3">
                <label htmlFor="endDate">{t("End Date")}:</label>
                <input
                  type="date"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                  {...register(`formalInquries.${i}.endDate`)}
                />
              </div>

              <div className="flex flex-col space-y-2 w-full">
                <textarea
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-auto h-full resize-none"
                  placeholder={t("Recommendation Of Investigation Officer")}
                  {...register(`formalInquries.${i}.recommendationOfIO`)}
                />
              </div>

              <div className=" space-y-2 w-full ml-3">
                <label htmlFor="dateOfRecommendation">
                  {t("Date Of Recommendation")}:
                </label>
                <input
                  type="date"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                  {...register(`formalInquries.${i}.dateOfRecommendation`)}
                />
              </div>

              <Button
                size="large"
                type="button"
                className="bg-[#e65959]/20 text-[#e65959] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
                onClick={() => removeFormalInquries(i)}
              >
                Remove report
              </Button>
            </div>
          ))}
        </div>

        {/* Charge Sheet Fields */}
        <div id="chargeSheetFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Charge Sheet")}
          </h1>

          <Button
            size="large"
            type="button"
            className="bg-[#5964e6]/20 text-[#5964e6] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
            onClick={() =>
              appendChargeSheet({
                chargeSheetId: "",
                chargeSheetIssuedDate: "",
                dateOfAnswered: "",
                dateOfPersonalFileCalled: "",
                dateOfPersonalReturned: "",
                dateOfDisciplinaryOrderTaken: "",
                dateOfAppealedForPSC: "",
                pscOrderDescription: "",
                dateOfPSCOrderTaken: "",
                dateOfAppealedToAAT: "",
                dateOfAATOrderTaken: "",
                aatOrderDescription: "",
              })
            }
          >
            Add New Charge Sheet
          </Button>

          {chargeSheet.map((chargeSheetReport, i) => (
            <div
              key={chargeSheetReport.id}
              id="chargeSheetContainer"
              className="flex flex-col w-full gap-2"
            >
              <div className="flex flex-col space-y-2 w-1/2">
                <input
                  type="text"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Charge Sheet Id")}
                  {...register(`chargeSheet.${i}.chargeSheetId`)}
                />
              </div>

              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.chargeSheetIssuedDate`}>
                  {t("Charge Sheet Issued Date")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.chargeSheetIssuedDate`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Charge Sheet Issued Date")}
                  {...register(`chargeSheet.${i}.chargeSheetIssuedDate`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.dateOfAnswered`}>
                  {t("Date of Answered")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.dateOfAnswered`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Answered")}
                  {...register(`chargeSheet.${i}.dateOfAnswered`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.dateOfPersonalFileCalled`}>
                  {t("Date of Personal File Called")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.dateOfPersonalFileCalled`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Personal File Called")}
                  {...register(`chargeSheet.${i}.dateOfPersonalFileCalled`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.dateOfPersonalReturned`}>
                  {t("Date of Personal Returned")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.dateOfPersonalReturned`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Personal Returned")}
                  {...register(`chargeSheet.${i}.dateOfPersonalReturned`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label
                  htmlFor={`chargeSheet.${i}.dateOfDisciplinaryOrderTaken`}
                >
                  {t("Date of Disciplinary Order Taken")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.dateOfDisciplinaryOrderTaken`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Disciplinary Order Taken")}
                  {...register(`chargeSheet.${i}.dateOfDisciplinaryOrderTaken`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.dateOfAppealedForPSC`}>
                  {t("Date of Appealed For PSC")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.dateOfAppealedForPSC`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Appealed For PSC")}
                  {...register(`chargeSheet.${i}.dateOfAppealedForPSC`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.pscOrderDescription`}>
                  {t("PSC Order Description")}:
                </label>
                <textarea
                  id={`chargeSheet.${i}.pscOrderDescription`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("PSC Order Description")}
                  {...register(`chargeSheet.${i}.pscOrderDescription`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.dateOfPSCOrderTaken`}>
                  {t("Date of PSC Order Taken")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.dateOfPSCOrderTaken`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of PSC Order Taken")}
                  {...register(`chargeSheet.${i}.dateOfPSCOrderTaken`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.dateOfAppealedToAAT`}>
                  {t("Date of Appealed To AAT")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.dateOfAppealedToAAT`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Appealed To AAT")}
                  {...register(`chargeSheet.${i}.dateOfAppealedToAAT`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.dateOfAATOrderTaken`}>
                  {t("Date of AAT Order Taken")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheet.${i}.dateOfAATOrderTaken`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of AAT Order Taken")}
                  {...register(`chargeSheet.${i}.dateOfAATOrderTaken`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheet.${i}.aatOrderDescription`}>
                  {t("AAT Order Description")}:
                </label>
                <textarea
                  id={`chargeSheet.${i}.aatOrderDescription`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("AAT Order Description")}
                  {...register(`chargeSheet.${i}.aatOrderDescription`)}
                />
              </div>

              <Button
                size="large"
                type="button"
                className="bg-[#e65959]/20 text-[#e65959] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
                onClick={() => removeChargeSheet(i)}
              >
                Remove Charge Sheet
              </Button>
            </div>
          ))}
        </div>

        <div
          className={`relative border border-[#4a4a4a]/30 px-3 w-1/2 py-2 bg-[#4a4a4a]/5 rounded-lg m-2  cursor-default`}
        >
          <select
            id="appealedAcceptedOrRejected"
            className="w-full bg-transparent outline-none appearance-none"
            {...register("appealedAcceptedOrRejected")}
          >
            <option value="" selected disabled>
              {t("Appealed Accepted Or Rejected")}
            </option>
            <option value="accepted">{t("Accepted")}</option>
            <option value="rejected">{t("Rejected")}</option>
          </select>
        </div>

        <div className=" space-y-2 w-full ml-3">
          <label htmlFor="dateOfRestateForAppealed">
            {t("Date Of Restate For Appealed ")}:
          </label>
          <input
            type="date"
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg  "
            {...register("dateOfRestateForAppealed")}
          />
        </div>
        <div className="space-y-2 w-full ml-3">
          <label htmlFor="dateOfFinalReportIssued">
            {t("Date Of Final Report Issued ")}:
          </label>
          <input
            type="date"
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-1 "
            {...register("dateOfFinalReportIssued")}
          />
        </div>

        <div className="space-y-2 w-full ml-3">
          <label htmlFor="dateOfFinalOrderThatInformedToAccused">
            {t("Date Of Final Order that Informed to Accused ")}:
          </label>
          <input
            type="date"
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10"
            {...register("dateOfFinalOrderThatInformedToAccused")}
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <textarea
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full h-full resize-none"
            placeholder={t("Recommendation Of Final Report")}
            {...register("recommendationOfFinalReport")}
          />
        </div>

        <div className="flex flex-col space-y-2 w-full ">
          <input
            type="text"
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-1/2"
            placeholder={t("Person Who Accepted Submission")}
            {...register("personWhoAcceptedSubmission")}
            required
          />
        </div>

        <div className="space-y-2 w-full ml-3">
          <label htmlFor="acceptedSubmissionDate">
            {t("Accepted Submission Date")}:
          </label>
          <input
            type="date"
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10"
            {...register("acceptedSubmissionDate")}
          />
        </div>

        <div className="space-y-2 w-full ml-3">
          <label htmlFor="handOveredDateOfSubmission">
            {t("Hand Overed Date Of Submission")}:
          </label>
          <input
            type="date"
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10"
            {...register("handOveredDateOfSubmission")}
          />
        </div>

        <div className="space-y-2 w-full ml-3">
          <label htmlFor="dateOfAppealedForReinstate">
            {t("Date Of Appealed For Reinstate")}:
          </label>
          <input
            type="date"
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10"
            {...register("dateOfAppealedForReinstate")}
          />
        </div>

        <div id="statusFields" className="flex flex-col space-y-2  w-1/2 gap-2">
          <select
            id="status"
            className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
            {...register("status")}
          >
            <option value="" selected disabled>
              {t("Select Status")}
            </option>
            <option value="onGoing">{t("On-Going")}</option>
            <option value="closed">{t("Closed with Charge Sheet")}</option>
            <option value="putAway">{t("Putaway")}</option>
          </select>
        </div>

        <Button type="submit" size="medium">
          {t("Submit")}
        </Button>
      </form>
    </div>
  );
};

export default Investigation;
