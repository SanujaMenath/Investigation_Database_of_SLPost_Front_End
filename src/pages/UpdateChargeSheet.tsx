import React from 'react'
import {  useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UpdateSheets } from '../services/api';
import Button from "../components/UI/Button";

function UpdateChargeSheet() {
  const { t } = useTranslation();

  type FormData = UpdateSheets;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div>
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
        <h1 className="text-black dark:text-white">
          {t("Update Charge Sheet")}
        </h1>
        </div>

        <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="space-y-4 p-4 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-3xl border-r-4 border-l-4 border-b-4 border-t-4 mb-4 mt-6"
      >
          <div className="flex flex-col space-y-2 w-1/2">
                <input
                  type="text"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Charge Sheet Id")}
                  {...register(`chargeSheetId`)}
                />
              </div>

              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`chargeSheetIssuedDate`}>
                  {t("Charge Sheet Issued Date")}:
                </label>
                <input
                  type="date"
                  id={`chargeSheetIssuedDate`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Charge Sheet Issued Date")}
                  {...register(`chargeSheetIssuedDate`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`dateOfAnswered`}>
                  {t("Date of Answered")}:
                </label>
                <input
                  type="date"
                  id={`dateOfAnswered`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Answered")}
                  {...register(`dateOfAnswered`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`dateOfPersonalFileCalled`}>
                  {t("Date of Personal File Called")}:
                </label>
                <input
                  type="date"
                  id={`dateOfPersonalFileCalled`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Personal File Called")}
                  {...register(`dateOfPersonalFileCalled`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`dateOfPersonalReturned`}>
                  {t("Date of Personal Returned")}:
                </label>
                <input
                  type="date"
                  id={`dateOfPersonalReturned`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Personal Returned")}
                  {...register(`dateOfPersonalReturned`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label
                  htmlFor={`dateOfDisciplinaryOrderTaken`}
                >
                  {t("Date of Disciplinary Order Taken")}:
                </label>
                <input
                  type="date"
                  id={`dateOfDisciplinaryOrderTaken`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Disciplinary Order Taken")}
                  {...register(`dateOfDisciplinaryOrderTaken`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`dateOfAppealedForPSC`}>
                  {t("Date of Appealed For PSC")}:
                </label>
                <input
                  type="date"
                  id={`dateOfAppealedForPSC`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Appealed For PSC")}
                  {...register(`dateOfAppealedForPSC`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`pscOrderDescription`}>
                  {t("PSC Order Description")}:
                </label>
                <textarea
                  id={`pscOrderDescription`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("PSC Order Description")}
                  {...register(`pscOrderDescription`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`dateOfPSCOrderTaken`}>
                  {t("Date of PSC Order Taken")}:
                </label>
                <input
                  type="date"
                  id={`dateOfPSCOrderTaken`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of PSC Order Taken")}
                  {...register(`dateOfPSCOrderTaken`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`dateOfAppealedToAAT`}>
                  {t("Date of Appealed To AAT")}:
                </label>
                <input
                  type="date"
                  id={`dateOfAppealedToAAT`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of Appealed To AAT")}
                  {...register(`dateOfAppealedToAAT`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`dateOfAATOrderTaken`}>
                  {t("Date of AAT Order Taken")}:
                </label>
                <input
                  type="date"
                  id={`dateOfAATOrderTaken`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("Date of AAT Order Taken")}
                  {...register(`dateOfAATOrderTaken`)}
                />
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <label htmlFor={`aatOrderDescription`}>
                  {t("AAT Order Description")}:
                </label>
                <textarea
                  id={`aatOrderDescription`}
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                  placeholder={t("AAT Order Description")}
                  {...register(`aatOrderDescription`)}
                />
              </div>

              <Button size="medium" type="submit">
          {t("Submit")}
        </Button>

        </form>
    </div>
  )
}

export default UpdateChargeSheet
