import React, { FC, useEffect } from "react";

export type MandatoryFieldsState = {
  fileNumber: string;
  incident: string;
  dateOfIncident: string;
  dateReferredToInvestigate: string;
};

type MandatoryFieldsProps = {
  getMandatoryFields: (mandatoryFields: MandatoryFieldsState) => void;
};

const MandatoryFields: FC<MandatoryFieldsProps> = ({ getMandatoryFields }) => {
  const [mandatoryFields, setMandatoryFields] =
    React.useState<MandatoryFieldsState>({
      fileNumber: "",
      incident: "",
      dateOfIncident: "",
      dateReferredToInvestigate: "",
    });

  useEffect(() => {
    getMandatoryFields(mandatoryFields);
  }, [mandatoryFields]);

  return (
    <>
       <fieldset>
          <div id="mandatoryFields" className="flex flex-col w-full gap-2">
          <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
            Mandatory Fields
          </h1>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-col space-y-2 w-1/2">
              <label className="ml-3" htmlFor="fileId">
                File  Number
              </label>
              <input
                type="text"
                id="fileId"
                value={mandatoryFields.fileNumber}
                onChange={(e) =>
                  setMandatoryFields({
                    ...mandatoryFields,
                    fileNumber: e.target.value,
                  })
                }
                placeholder="Ex: Inv/01"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2">
              <label htmlFor="fileId" className="ml-3">
                "Incident"
              </label>
              <input
                type="text"
                id="incident"
                value={mandatoryFields.incident}
                onChange={(e) =>
                  setMandatoryFields({
                    ...mandatoryFields,
                    incident: e.target.value,
                  })
                }
                placeholder="Ex: Vehicle Accident"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2 mt-3">
              <label className="ml-3" htmlFor="incidentDate">
                Incident Date
              </label>
              <input
                type="date"
                id="incidentDate"
                value={mandatoryFields.dateOfIncident}
                onChange={(e) =>
                  setMandatoryFields({
                    ...mandatoryFields,
                    dateOfIncident: e.target.value,
                  })
                }
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              />
            </div>
            <div className=" space-y-2 w-1/2 mt-3">
              <label className="ml-3 " htmlFor="">
                Date Referred To Investigate
              </label>
              <input
                type="date"
                id="dateReferred"
                value={mandatoryFields.dateReferredToInvestigate}
                onChange={(e) =>
                  setMandatoryFields({
                    ...mandatoryFields,
                    dateReferredToInvestigate: e.target.value,
                  })
                }
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              />
            </div>
          </div>
          </div>
        </fieldset>
    </>
  )
}

export default MandatoryFields
