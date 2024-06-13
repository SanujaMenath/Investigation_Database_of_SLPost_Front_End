// src/pages/InvestigationDetails.tsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  createInvestigation,
  getInvestigationInspectors,
} from "../services/api";
import Button from "../components/UI/Button";
import { Calendar } from "react-ionicons";
import { InvestigationInspector, Suspector } from "../@types/api";

const Investigation: React.FC = () => {
  const { t } = useTranslation();

  type FormData = {
    fileId: string;
    incident: string;
    incidentDate: string;
    dateReferredToInvestigate: string;
    investigationInspector: string;
    caseNoOfII: string;
    suspects: string;
    interimReportId: string;
    dateOfInterimReportIssued: string;
    appealedAcceptedOrRejected: string;
    dateOfFinalReportIssued: string;
    recommendationOfFinalReport: string;
    personWhoAcceptedSubmission: string;
    acceptedSubmissionDate: string;
    handOveredDateOfSubmission: string;
    status: string;
  };

  const [formData, setFormData] = useState<FormData>({
    fileId: "",
    incident: "",
    incidentDate: "",
    dateReferredToInvestigate: "",
    investigationInspector: "",
    caseNoOfII: "",
    suspects: "",
    interimReportId: "",
    dateOfInterimReportIssued: "",
    appealedAcceptedOrRejected: "",
    dateOfFinalReportIssued: "",
    recommendationOfFinalReport: "",
    personWhoAcceptedSubmission: "",
    acceptedSubmissionDate: "",
    handOveredDateOfSubmission: "",
    status: "",
  });
  const [suspectorCount, setSuspectorCount] = React.useState<number>(0);
  const [suspectFormIndexArray, setSuspectFormIndexArray] = React.useState<
    Array<number>
  >([]);

  const [suspectorList, setSuspectorList] = React.useState<Array<Suspector>>();
  const [isSuspectorListAdded, setIsSuspectorListAdded] =
    React.useState<boolean>(false);
  const handleSuspectorList = () => {};

  const [investigationInspectorList, setInvestigationInspectorList] =
    React.useState<Array<InvestigationInspector>>();

  // States
  const [dateReferredToInvestigate, setDateRefferedToInvestigate] =
    React.useState<string>();

  // References
  const dateReferredToInvestigateRef = React.useRef<any>();

  const handleChange = async (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createInvestigation(formData);
  };

  console.log("Current Suspector List", suspectorList);

  React.useEffect(() => {
    const array = new Array(suspectorCount ? suspectorCount : 0).fill(1);
    setSuspectFormIndexArray(array);
    suspectFormIndexArray.forEach((form, index) => {
      const suspector: Suspector = {
        id: index * form,
        name: "",
        dob: "",
        nic: "",
      };

      setSuspectorList(
        suspectorList ? [...suspectorList, suspector] : [suspector]
      );
    });
  }, [suspectorCount]);

  React.useEffect(() => {
    // Initial load-ups from API
    getInvestigationInspectors()
      .then((res) => {
        if (res) {
          setInvestigationInspectorList(res);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const focusDatePicker = () => {
    if (dateReferredToInvestigateRef.current) {
      dateReferredToInvestigateRef.current.focus();
      dateReferredToInvestigateRef.current.showPicker();
    }
  };

  const handleDatePicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateRefferedToInvestigate(event.target.value);
  };

  return (
    <div className="font-normal">
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
        <h1 className="text-black dark:text-white">
          {t("Investigation Details")}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-3xl"
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
                name="fileId"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                value={formData.fileId}
                onChange={handleChange}
                placeholder={t("File Number")}
                required
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2">
              <input
                type="text"
                name="incident"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                value={formData.incident}
                onChange={handleChange}
                placeholder={t("Incident")}
                required
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2">
              <input
                type="text"
                name="incidentDate"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                value={formData.incidentDate}
                onChange={handleChange}
                placeholder={t("Incident Date")}
                required
              />
            </div>
            <div className="flex space-y-2 w-1/2">
              <div
                className={`relative border border-[#4a4a4a]/30 px-3 w-full py-2 ${
                  dateReferredToInvestigate
                    ? "text-[#4a4a4a]"
                    : "text-[#4a4a4a]/50"
                } bg-[#4a4a4a]/5  !outline-none rounded-lg m-2 cursor-default`}
              >
                {dateReferredToInvestigate
                  ? dateReferredToInvestigate
                  : "Date Referred To Investigate"}
                <div
                  onClick={focusDatePicker}
                  className="absolute right-2 top-2 cursor-pointer hover:opacity-60"
                >
                  <Calendar />
                </div>
                <input
                  ref={dateReferredToInvestigateRef}
                  type="date"
                  name="dateReferredToInvestigate"
                  id="dateReferredToInvestigate"
                  className="absolute right-2 top-2 cursor-pointer"
                  style={{ visibility: "hidden" }}
                  onChange={handleDatePicker}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Investigation Inspector Fields */}
        <div id="investigationFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Investigation Inspector")}
          </h1>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-col space-y-2 w-1/2">
              <select
                name="selectInspector"
                id="selectInspector"
                className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              >
                <option value={undefined} selected disabled>
                  Select from here
                </option>
                {investigationInspectorList?.map((each) => {
                  return (
                    <option key={each.nic} value={each.nic}>
                      {each.name}
                    </option>
                  );
                })}
              </select>

              <Button
                size="medium"
                type="button"
                className="bg-[#5964e6]/20 text-[#5964e6] font-medium w- px-3 py-1 text-sm w-[100px] rounded-lg m-2"
              >
                Add New
              </Button>
            </div>
          </div>
        </div>

        {/* Suspector Fields */}
        <div id="suspectorFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Suspector")}
          </h1>

          <div className="flex flex-col space-y-2">
            <div
              className="flex items-center justify-between w-1/2"
              id="addNewSuspectors"
            >
              <input
                className="border border-[#4a4a4a]/30 ml-2 rounded-md"
                onChange={(e) => {
                  setSuspectorCount(parseInt(e.target.value));
                  suspectFormIndexArray;
                }}
                type="number"
                min="0"
                placeholder="Enter Count"
              />
            </div>
          </div>

          <div id="supectorFormGeneration" className="flex flex-col gap-2">
            {suspectFormIndexArray.length > 0 &&
              suspectFormIndexArray.map((i, index) => {
                const _id = i * index;
                const currentSuspector = suspectorList?.find(
                  (sus) => sus.id == _id
                );
                return (
                  <div key={index * i} className="flex flex-col">
                    <div className="border border-double ">
                      <div>
                        <input
                          id="nic"
                          type="text"
                          required
                          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 w-1/2 !outline-none rounded-lg m-2"
                          placeholder={t("NIC")}
                          onChange={(e) => {
                            const thisSuspector: Suspector = {
                              id: _id,
                              nic: e.target.value, // This
                              dob: currentSuspector?.dob!,
                              name: currentSuspector?.name!,
                            };
                            setSuspectorList(
                              suspectorList
                                ? [
                                    ...suspectorList.filter(
                                      (fil) => fil.id != _id
                                    ),
                                    thisSuspector,
                                  ]
                                : [thisSuspector]
                            );
                          }}
                        />
                      </div>
                      <div>
                        <input
                          id="name"
                          type="text"
                          required
                          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 w-1/2 !outline-none rounded-lg m-2"
                          placeholder={t("Name")}
                          onChange={(e) => {
                            const thisSuspector: Suspector = {
                              id: _id,
                              nic: currentSuspector?.nic!,
                              dob: currentSuspector?.dob!,
                              name: e.target.value, // This
                            };
                            setSuspectorList(
                              suspectorList
                                ? [
                                    ...suspectorList.filter(
                                      (fil) => fil.id != _id
                                    ),
                                    thisSuspector,
                                  ]
                                : [thisSuspector]
                            );
                          }}
                        />
                      </div>
                      <div>
                        <input
                          id="dob"
                          required
                          type="date"
                          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 w-1/2 !outline-none rounded-lg m-2"
                          placeholder={t("DOB")}
                          onChange={(e) => {
                            const thisSuspector: Suspector = {
                              id: _id,
                              nic: currentSuspector?.nic!,
                              dob: e.target.value, // this
                              name: currentSuspector?.dob!,
                            };
                            setSuspectorList(
                              suspectorList
                                ? [
                                    ...suspectorList.filter(
                                      (fil) => fil.id != _id
                                    ),
                                    thisSuspector,
                                  ]
                                : [thisSuspector]
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Interim Report Fields */}
        <div id="interimReportFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Interim Report")}
          </h1>

          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              name="interimReportId"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              value={formData.interimReportId}
              onChange={handleChange}
              placeholder={t("Interim Report Id")}
            />
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <textarea
              name="recommendationOfInterimReport"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              onChange={handleChange}
              placeholder={t("Recommendation Of Interim Report")}
            />
          </div>
        </div>

        {/* Formal Inquiry Fields */}
        <div id="formalInquiryFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Formal Inquiry")}
          </h1>

          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              name="formalInquiryId"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              value={formData.interimReportId}
              onChange={handleChange}
              placeholder={t("Formal Inquiry Id")}
            />
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <textarea
              name="recommendationOfIO"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-auto h-full resize-none"
              value={formData.recommendationOfFinalReport}
              onChange={handleChange}
              placeholder={t("Recommendation Of Investigation Officer")}
            />
          </div>
        </div>

        {/* Charge Sheet Fields */}
        <div id="chargeSheetFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            {t("Charge Sheet")}
          </h1>

          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              name="chargeSheetId"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              value={formData.interimReportId}
              onChange={handleChange}
              placeholder={t("Charge Sheet Id")}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <div
            className={`relative border border-[#4a4a4a]/30 px-3 w-1/2 py-2 bg-[#4a4a4a]/5 rounded-lg m-2 ${
              formData.appealedAcceptedOrRejected
                ? "text-[#4a4a4a]"
                : "text-[#4a4a4a]/50"
            } cursor-default`}
          >
            <select
              name="appealedAcceptedOrRejected"
              id="appealedAcceptedOrRejected"
              className="w-full bg-transparent outline-none appearance-none"
              onChange={handleChange}
              value={formData.appealedAcceptedOrRejected}
            >
              <option value="" selected disabled>
                {t("Appealed Accepted Or Rejected")}
              </option>
              <option value="accepted">{t("Accepted")}</option>
              <option value="rejected">{t("Rejected")}</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <textarea
              name="recommendationOfFinalReport"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full h-full resize-none"
              value={formData.recommendationOfFinalReport}
              onChange={handleChange}
              placeholder={t("Recommendation Of Final Report")}
            />
          </div>

          <div className="flex flex-col space-y-2 w-full ">
            <input
              type="text"
              name="personWhoAcceptedSubmission"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-1/2"
              value={formData.personWhoAcceptedSubmission}
              onChange={handleChange}
              placeholder={t("Person Who Accepted Submission")}
              required
            />
          </div>

          <div
            id="statusFields"
            className="flex flex-col space-y-2  w-1/2 gap-2"
          >
            <select
              name="status"
              id="status"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              onChange={handleChange}
              value={formData.status}
            >
              <option value="" selected disabled>
                {t("Select Status")}
              </option>
              <option value="onGoing">{t("On-Going")}</option>
              <option value="closed">{t("Closed with Charge Sheet")}</option>
              <option value="putAway">{t("Putaway")}</option>
            </select>
          </div>
        </div>

        {/* <div className="flex flex-col gap-8">
         
          <div className="flex flex-col space-y-2">
            <label htmlFor="investigationInspector">
              {t("Investigation Inspector")}:
            </label>
            <input
              type="text"
              name="investigationInspector"
              className="border border-red-500 p-2 w-1/2"
              value={formData.investigationInspector}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="caseNoOfII">
              {t("Case No Of Investigation Inspector")}:
            </label>
            <input
              type="text"
              name="caseNoOfII"
              className="border border-red-500 p-2 w-1/2"
              value={formData.caseNoOfII}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="acquiredDate">
              {t("Acquired Date of Investigation Inspector")}:
            </label>
            <input
              type="date"
              name="acquiredDate"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="submittedDate">
              {t("Submitted Date of Investigation Inspector")}:
            </label>
            <input
              type="date"
              name="submittedDate"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="reacquiredDate">
              {t("Re-acquired Date of Investigation Inspector")}:
            </label>
            <input
              type="date"
              name="reacquiredDate"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="resubmittedDate">
              {t("Re-Submitted Date of Investigation Inspector")}:
            </label>
            <input
              type="date"
              name="resubmittedDate"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="addNewSuspectors">{t("Suspectors")}:</label>
            <div
              className="flex items-center justify-between w-1/2"
              id="addNewSuspectors"
            >
              <input
                className="w-20"
                onChange={(e) => setSuspectorCount(parseInt(e.target.value))}
                type="number"
              />
            </div>
          </div>

          <div id="supectorFormGeneration" className="flex flex-col gap-2">
            {suspectFormIndexArray.length > 0 &&
              suspectFormIndexArray.map((i, index) => {
                return (
                  <form key={index * i} className="flex flex-col">
                    <div className="">
                      <label htmlFor="nic">{t("NIC")}:</label>
                      <input id="nic" type="text" />
                    </div>
                    <div>
                      <label htmlFor="name">{t("Name")}:</label>
                      <input id="name" type="text" />
                    </div>
                  </form>
                );
              })}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="suspectorsDOB">
              {t("Suspector's Date Of Birth")}:
            </label>
            <input
              type="date"
              name="suspectorsDOB"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

         

          <div className="flex flex-col space-y-2">
            <label htmlFor="dateOfInterimReportIssued ">
              {t("Date of Interim Report Issued")}:
            </label>
            <input
              type="date"
              name="dateOfInterimReportIssued"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

      

          <div className="flex flex-col space-y-2">
            <label htmlFor="interdictedDate">{t("Interdicted Date")}:</label>
            <input
              type="date"
              name="interdictedDate"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="dateOfAppealedForReinstate">
              {t("Date Of Appealed For Reinstate")}:
            </label>
            <input
              type="date"
              name="dateOfAppealedForReinstate"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="appealedAcceptedOrRejected">
              {t("Appealed Accepted Or Rejected")}:
            </label>
            <select
              name="appealedAcceptedOrRejected"
              id="appealedAcceptedOrRejected"
              className="border border-red-500 p-2 w-1/2"
            >
              <option value="Select" selected disabled>
                Select
              </option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="dateOfRestateForAppealed">
              {t("Date Of Restate For Appealed ")}:
            </label>
            <input
              type="date"
              name="dateOfRestateForAppealed"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="dateOfFinalOrderThatInformedToAccused">
              {t("Date Of Final Order that Informed to Accused ")}:
            </label>
            <input
              type="date"
              name="dateOfFinalOrderThatInformedToAccused"
              className="border border-red-500 p-2 w-1/2"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="dateOfFinalReportIssued">
              {t("Date Of Final Report Issued")}:
            </label>
            <input
              type="date"
              name="dateOfFinalReportIssued"
              className="border border-red-500 p-2 w-1/2"
              value={formData.dateOfFinalReportIssued}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="personWhoAcceptedSubmission">
              {t("Person Who Accepted Submission")}:
            </label>
            <input
              type="text"
              name="personWhoAcceptedSubmission"
              className="border border-red-500 p-2 w-1/2"
              value={formData.personWhoAcceptedSubmission}
              onChange={handleChange}
              placeholder={t("Person Who Accepted Submission")}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="acceptedSubmissionDate">
              {t("Accepted Submission Date")}:
            </label>
            <input
              type="date"
              name="acceptedSubmissionDate"
              className="border border-red-500 p-2 w-1/2"
              value={formData.acceptedSubmissionDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="handOveredDateOfSubmission">
              {t("Hand Overed Date Of Submission")}:
            </label>
            <input
              type="date"
              name="handOveredDateOfSubmission"
              className="border border-red-500 p-2 w-1/2"
              value={formData.handOveredDateOfSubmission}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="status">{t("Select the Status")}:</label>
            <select
              name="status"
              id="status"
              className="border border-red-500 p-2 w-1/2"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="selectStatus" disabled selected>
                {t("Select Status")}
              </option>
              <option value="onGoing">{t("On-Going")}</option>
              <option value="closed">{t("Closed with Charge Sheet")}</option>
              <option value="putAway">{t("Putaway")}</option>
            </select>
          </div>
        </div> */}

        <Button type="submit" size="medium">
          {t("Submit")}
        </Button>
      </form>
    </div>
  );
};

export default Investigation;
