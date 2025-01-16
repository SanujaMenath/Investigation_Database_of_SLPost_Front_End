import React from "react";

function FormalInquiry() {
  return (
    <>
      {/* Formal Inquiry Fields */}
      <div className="formalInquiryFields">
        <h1 className="text-lg text-[#4a4a4a] font-medium ml-2">
          Formal Inquiry
        </h1>

        <div
          id="formalInquiryFields"
          className="flex flex-col w-full gap-2 border mt-3"
        >
          <div className=" space-y-2 w-full ml-3">
            <label htmlFor="dateOfAppoint">Date Of Appoint:</label>
            <input
              type="date"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
            />
          </div>

          <div className=" space-y-2 w-full ml-3">
            <label htmlFor="startedDate">Started Date:</label>
            <input
              type="date"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
            />
          </div>

          <div className=" space-y-2 w-full ml-3">
            <label htmlFor="endDate">"End Date":</label>
            <input
              type="date"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
            />
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <textarea
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-auto h-full resize-none"
              placeholder="Recommendation Of Investigation Officer"
            />
          </div>

          <div className=" space-y-2 w-full ml-3">
            <label htmlFor="dateOfRecommendation">
              "Date Of Recommendation"
            </label>
            <input
              type="date"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 pr-10 pl-10 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormalInquiry;
