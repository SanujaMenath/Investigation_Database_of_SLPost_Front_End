import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UpdateReports } from "../services/api";
import Button from "../components/UI/Button";

const UpdateInterimReport: React.FC = () => {
  const { t } = useTranslation();

  type FormData = UpdateReports;

  const { register, handleSubmit } = useForm<FormData>();

  return (
    <div>
      <div className="font-bold">
        <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
          <h1 className="text-black dark:text-white">
            {t("Update Interim Report")}
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
              placeholder={t("Interim Report Id")}
              {...register(`interimReportId`)}
            />
          </div>

          <div className=" space-y-2 w-full ml-3">
            <label htmlFor="interdictedDate">{t("Interdicted Date ")}:</label>
            <input
              type="date"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
              {...register(`interdictedDate`)}
            />
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <textarea
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder={t("Recommendation Of Interim Report")}
              {...register(`recommendationOfInterimReport`)}
            />
          </div>

          <div className=" space-y-2 w-full ml-3">
                  <label htmlFor="dateOfInterimReportIssued">
                    {t("Date of Interim Report Issued")}:
                  </label>
                  <input
                    type="date"
                    className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                    {...register(`dateOfInterimReportIssued`)}
                  />
                  </div>

          <Button size="medium" type="submit">
          {t("Submit")}
        </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInterimReport;
