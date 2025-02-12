import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InvInspectorProps } from "../services/_api";
import Button from "../components/UI/Button";
import { createInvInspector } from "../services/api/invInspector";

function InvestigationInspector() {
  const { t } = useTranslation();

  type FormData = InvInspectorProps;

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    let isInspectorCreated = false;
    try {
      isInspectorCreated = await createInvInspector(data);
    } catch (error) {
      console.error(error);
    }
    if (isInspectorCreated) {
      alert("Investigation Inspector created Successfully!");
    } else {
      alert("Unsuccessful attempt!");
    }
  };
  return (
    <div>
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
        <h1 className="text-black dark:text-white">
          {t("Create Investigation Inspector")}
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-3xl border-r-4 border-l-4 border-b-4 border-t-4 mb-4 mt-6"
      >
        <div className="flex flex-wrap items-center justify-between text-lg text-[#4a4a4a] font-medium ml-2">
          <label htmlFor="name">{t("Investigation Inspector's Name")} :</label>
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder={t("Name of II")}
              {...register("name")}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-lg text-[#4a4a4a] font-medium ml-2">
          <label htmlFor="nic">{t("Investigation Inspector's NIC")} :</label>
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder={t("NIC of II")}
              {...register("nic")}
            />
          </div>
        </div>

        <Button size="medium" type="submit">
          {t("Submit")}
        </Button>
      </form>
    </div>
  );
}

export default InvestigationInspector;
