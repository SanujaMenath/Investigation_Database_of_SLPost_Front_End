function Chargesheet() {
  return (
    <>
      {/* Charge Sheet Fields */}
      <div id="chargeSheetFields" className="flex flex-col w-full gap-2">
        <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
          Charge Sheet
        </h1>

        <div id="chargeSheetContainer" className="flex flex-col w-full gap-2">
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Charge Sheet Id"
            />
          </div>

          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Nic of accused person"
            />
          </div>

          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`chargeSheetIssuedDate`}>
              Charge Sheet Issued Date
            </label>
            <input
              type="date"
              id={`.chargeSheetIssuedDate`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Charge Sheet Issued Date"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`dateOfAnswered`}>Date of Answered</label>
            <input
              type="date"
              id={`dateOfAnswered`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Date of Answered"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`dateOfPersonalFileCalled`}>
              Date of Personal File Called
            </label>
            <input
              type="date"
              id={`dateOfPersonalFileCalled`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Date of Personal File Called"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`dateOfPersonalReturned`}>
              "Date of Personal Returned":
            </label>
            <input
              type="date"
              id={`dateOfPersonalReturned`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Date of Personal Returned"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`dateOfDisciplinaryOrderTaken`}>
              Date of Disciplinary Order Taken:
            </label>
            <input
              type="date"
              id={`dateOfDisciplinaryOrderTaken`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Date of Disciplinary Order Taken"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`dateOfAppealedForPSC`}>
              Date of Appealed For PSC:
            </label>
            <input
              type="date"
              id={`dateOfAppealedForPSC`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Date of Appealed For PSC"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`pscOrderDescription`}>
              PSC Order Description:
            </label>
            <textarea
              id={`pscOrderDescription`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="PSC Order Description"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`dateOfPSCOrderTaken`}>
              Date of PSC Order Taken
            </label>
            <input
              type="date"
              id={`dateOfPSCOrderTaken`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Date of PSC Order Taken"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`dateOfAppealedToAAT`}>
              "Date of Appealed To AAT"
            </label>
            <input
              type="date"
              id={`dateOfAppealedToAAT`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Date of Appealed To AAT"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`dateOfAATOrderTaken`}>
              "Date of AAT Order Taken"
            </label>
            <input
              type="date"
              id={`dateOfAATOrderTaken`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Date of AAT Order Taken"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label htmlFor={`aatOrderDescription`}>AAT Order Description</label>
            <textarea
              id={`aatOrderDescription`}
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="AAT Order Description"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chargesheet;
