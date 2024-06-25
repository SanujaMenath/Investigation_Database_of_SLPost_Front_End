import React from 'react'
import {  useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { NewUserDetails } from '../services/api';
import Button from "../components/UI/Button";

function NewUser() {
    const { t } = useTranslation();

    type FormData = NewUserDetails;

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
          {t("Create New USer")}
        </h1>
        </div>

        <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="space-y-4 p-4 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-3xl border-r-4 border-l-4 border-b-4 border-t-4 mb-4 mt-6"
      >
        <div className="flex flex-wrap items-center justify-between text-lg text-[#4a4a4a] font-medium ml-2">
          <label htmlFor="userName">{t("Enter the Username")} :</label>
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder={t("Username")}
              {...register("userName")}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-lg text-[#4a4a4a] font-medium ml-2">
          <label htmlFor="password">{t("Enter Password")} :</label>
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder={t("Password")}
              {...register("password")}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-lg text-[#4a4a4a] font-medium ml-2">
          <label htmlFor="matchpassword">{t("Re-Enter Password")} :</label>
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder={t("Re-Enter Password")}
              {...register("matchpassword")}
            />
          </div>
        </div>

        <Button size="medium" type="submit">
          {t("Submit")}
        </Button>
      </form>
      </div>
    
  )
}

export default NewUser
