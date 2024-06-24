import React from 'react'
import { useTranslation } from "react-i18next";

function NewUser() {
    const { t } = useTranslation();
    
  return (
    <div>
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
        <h1 className="text-black dark:text-white">
          {t("Create New USer")}
        </h1>
      </div>
    </div>
  )
}

export default NewUser
