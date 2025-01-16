import React from "react";

function InterimReport() {
  return (
    <>
      {/* Interim Report Fields */}
      <div id="interimReportFields" className="flex flex-col w-full gap-2">
        <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
          Interim Report
        </h1>

        <div id="interimReportsContainer" className="report border mb-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Interim Report Id"
            />
          </div>

          <select className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2">
            <option value="">Select from here</option>

            <option></option>
          </select>

          <div className="flex flex-col space-y-2 w-full">
            <textarea
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Recommendation Of Interim Report"
            />
          </div>

          <div className="space-y-2 w-full ml-3">
            <label htmlFor="dateOfInterimReportIssued">
              Date of Interim Report Issued
            </label>
            <input
              type="date"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InterimReport;
