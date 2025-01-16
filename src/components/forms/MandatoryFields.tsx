import React from 'react'

function MandatoryFields() {
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
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                placeholder="Ex:- Inv/01"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2">
              <label htmlFor="fileId" className="ml-3">
                "Incident"
              </label>
              <input
                type="text"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
                placeholder="Ex:- Vehcle Accident"
              />
            </div>

            <div className="flex flex-col space-y-2 w-1/2 mt-3">
              <label className="ml-3" htmlFor="incidentDate">
                Incident Date
              </label>
              <input
                type="date"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              />
            </div>
            <div className=" space-y-2 w-1/2 mt-3">
              <label className="ml-3 " htmlFor="">
                Date Referred To Investigate
              </label>
              <input
                type="date"
                id="dateReferredToInvestigate"
                className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
              />
            </div>
          </div>
        </div>
        </fieldset>
    </>
  )
}

export default MandatoryFields
