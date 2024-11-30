import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { NewUserDetails } from "../services/api";
import Button from "../components/UI/Button";
import { createNewUser } from "../services/api/newUser";
import {
  fetchProvinces,
  fetchDivisions,
} from "../services/api/locationService";

function NewUser() {
  const { t } = useTranslation();
  const [locations, setLocations] = useState<string[]>([]);

  type FormData = NewUserDetails;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  // Watch locationType field
  const locationType = watch("locationType");

  useEffect(() => {
    const loadLocations = async () => {
      if (locationType === "Province") {
        const provinces = await fetchProvinces();
        setLocations(provinces);
      } else if (locationType === "Division") {
        const divisions = await fetchDivisions();
        setLocations(divisions);
      } else {
        setLocations([]);
      }
    };
    loadLocations();
  }, [locationType]);

  const onSubmit = async (data: FormData) => {
    let isUserCreated = false;

    try {
      isUserCreated = await createNewUser(data);
    } catch (error) {
      console.error(error);
    }
    if (isUserCreated) {
      alert("User created successfully");
    } else {
      alert("Failed to create New User");
    }
  };

  return (
    <div>
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
        <h1 className="text-black dark:text-white">{t("Create New User")}</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-3xl border rounded mb-4 mt-6"
      >
        {/* Email */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="email">{t("Enter the Email")}:</label>
          <input
            type="email"
            className="border px-3 py-2 rounded"
            placeholder={t("Email")}
            {...register("email", { required: true })}
          />
        </div>

        {/* First Name */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="firstName">{t("Enter the First Name")}:</label>
          <input
            type="text"
            className="border px-3 py-2 rounded"
            placeholder={t("First Name")}
            {...register("firstName", { required: true })}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="lastName">{t("Enter the Last Name")}:</label>
          <input
            type="text"
            className="border px-3 py-2 rounded"
            placeholder={t("Last Name")}
            {...register("lastName", { required: true })}
          />
        </div>

        {/* Password */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="password">{t("Enter Password")}:</label>
          <input
            type="password"
            className="border px-3 py-2 rounded"
            placeholder={t("Password")}
            {...register("password", { required: true })}
          />
        </div>

        {/* Role */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="role">{t("Select Role")}:</label>
          <select
            className="border w-40 px-3 py-2 rounded"
            {...register("role", { required: true })}
          >
            <option value="Admin">{t("Admin")}</option>
            <option value="CLERK">{t("User")}</option>
          </select>
        </div>

        {/* Location Type */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="locationType">{t("Select Location Type")}:</label>
          <select
            className="border w-40 px-3 py-2 rounded"
            {...register("locationType", { required: true })}
          >
            <option value="">{t("Select Type")}</option>
            <option value="PROVINCE">{t("Province")}</option>
            <option value="DIVISION">{t("Division")}</option>
            <option value="ISLAND">{t("Island")}</option>
          </select>
        </div>

        {/* Location */}
        {locationType && (
          <div className="flex flex-wrap items-center justify-between text-lg font-medium">
            <label htmlFor="location">{t("Select Location")}:</label>
            <select
              className="border px-3 py-2 rounded"
              {...register("locationId", { required: true })}
            >
              <option value="">{t("Select Location")}</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        )}

        <Button size="medium" type="submit">
          {t("Submit")}
        </Button>
      </form>
    </div>
  );
}

export default NewUser;
