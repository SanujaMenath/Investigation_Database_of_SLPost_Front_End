import {  useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UpdateInquiries } from '../services/_api';
import Button from "../components/UI/Button";

function UpdateFormalInquiry() {
    const { t } = useTranslation();

    type FormData = UpdateInquiries;

    const {
      register,
      handleSubmit,
    } = useForm<FormData>();

  return (
    <div>
      
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
        <h1 className="text-black dark:text-white">
          {t("Update Formal Inquiry")}
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
                  placeholder={t("Formal Inquiry Id")}
                  {...register(`formalInquiryId`)}
                />
              </div>

              <div className=" space-y-2 w-full ml-3">
                <label htmlFor="dateOfAppoint">{t("Date Of Appoint")}:</label>
                <input
                  type="date"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                  {...register(`dateOfAppoint`)}
                />
              </div>

              <div className=" space-y-2 w-full ml-3">
                <label htmlFor="startedDate">{t("Started Date")}:</label>
                <input
                  type="date"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                  {...register(`startedDate`)}
                />
              </div>

              <div className=" space-y-2 w-full ml-3">
                <label htmlFor="endDate">{t("End Date")}:</label>
                <input
                  type="date"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                  {...register(`endDate`)}
                />
              </div>

              <div className="flex flex-col space-y-2 w-full">
                <textarea
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-auto h-full resize-none"
                  placeholder={t("Recommendation Of Investigation Officer")}
                  {...register(`recommendationOfIO`)}
                />
              </div>

              <div className=" space-y-2 w-full ml-3">
                <label htmlFor="dateOfRecommendation">
                  {t("Date Of Recommendation")}:
                </label>
                <input
                  type="date"
                  className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
                  {...register(`dateOfRecommendation`)}
                />
              </div>

              <Button size="medium" type="submit">
          {t("Submit")}
        </Button>
        </form>
        
    
    </div>
  )
}

export default UpdateFormalInquiry
