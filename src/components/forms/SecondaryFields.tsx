

function SecondaryFields() {
  return (
    <div>
      <div className="flex flex-col space-y-2 w-full">
        <textarea
          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full h-full resize-none"
          placeholder="Recommendation Of Final Report"
        />
      </div>

      <div className="flex flex-col space-y-2 w-full ">
        <input
          type="text"
          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-1/2"
          placeholder="Person Who Accepted Submission"
        />
      </div>

      <div className="space-y-2 w-full ml-3">
        <label htmlFor="acceptedSubmissionDate">
          Accepted Submission Date:
        </label>
        <input
          type="date"
          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10"
        />
      </div>

      <div className="space-y-2 w-full ml-3">
        <label htmlFor="handOveredDateOfSubmission">
          Hand Overed Date Of Submission:
        </label>
        <input
          type="date"
          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10"
        />
      </div>

      <div className="space-y-2 w-full ml-3">
        <label htmlFor="dateOfFinalReportIssued">
          Date Of Final Report Issued :
        </label>
        <input
          type="date"
          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-1 "
        />
      </div>

      <div className="space-y-2 w-full ml-3">
        <label htmlFor="division">Division:</label>
        <select className="border px-3 py-2 rounded">
          <option value="">(`Select division`)</option>

          <option></option>
        </select>
      </div>

      <div id="statusFields" className="flex flex-col space-y-2  w-1/2 gap-2">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
        >
          <option value="" selected disabled>
            Select Status
          </option>
          <option value="onGoing">On-Going</option>
          <option value="closed">Closed with Charge Sheet</option>
          <option value="putAway">Put Away</option>
        </select>
      </div>
    </div>
  );
}

export default SecondaryFields;
