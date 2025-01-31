import React, { FC, useEffect } from "react";

export type SecondaryFieldsState = {
  reccomendationOfFinalReport: string;
  personWhoAcceptedSubmission: string;
  dateOfAcceptance: string;
  handOveredDateOfSubmission: string;
  dateOfFinalReportIssued: string;
  divisionId: string;
  status: string;
}

  type SecondaryFieldsProps = {
   getSecondaryFields: (secondaryFields: SecondaryFieldsState) => void
  }

  const SecondaryFields: FC<SecondaryFieldsProps> = ({ getSecondaryFields }) => {
    const [secondaryFields, setSecondaryFields] = React.useState<SecondaryFieldsState>({
    reccomendationOfFinalReport: "",
    personWhoAcceptedSubmission: "",
    dateOfAcceptance: "",
    handOveredDateOfSubmission: "",
    dateOfFinalReportIssued: "",
    divisionId: "",
    status: "",
    });

    useEffect(() => {
      getSecondaryFields(secondaryFields);
    }, [secondaryFields]);
   
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Secondary Fields
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Additional investigation details
          </p>
        </div>

        {/* Recommendation Textarea */}
        <div className="space-y-2">
          <label 
            htmlFor="recommendation" 
            className="block text-sm font-medium text-indigo-700"
          >
            Recommendation Of Final Report
          </label>
          <textarea
            id="recommendation"
            rows={3}
            value={secondaryFields.reccomendationOfFinalReport}
            onChange={(e) => setSecondaryFields({ ...secondaryFields, reccomendationOfFinalReport: e.target.value })}
            className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                     transition-colors bg-indigo-50/30 placeholder-indigo-300 resize-none"
            placeholder="Enter your recommendation here..."
          />
        </div>

        {/* Two Fields Per Row Layout */}
        <div className="flex flex-wrap -mx-3">
          {/* Person Who Accepted */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label 
              htmlFor="acceptedBy" 
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Person Who Accepted Submission
            </label>
            <input
              type="text"
              id="acceptedBy"
              value={secondaryFields.personWhoAcceptedSubmission}
              onChange={(e) => setSecondaryFields({ ...secondaryFields, personWhoAcceptedSubmission: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 placeholder-indigo-300"
              placeholder="Enter name"
            />
          </div>

          {/* Accepted Date */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label 
              htmlFor="acceptedDate" 
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Accepted Submission Date
            </label>
            <input
              type="date"
              id="acceptedDate"
              value={secondaryFields.dateOfAcceptance}
              onChange={(e) => setSecondaryFields({ ...secondaryFields, dateOfAcceptance: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>

          {/* Hand Overed Date */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label 
              htmlFor="handOveredDate" 
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Hand Overed Date Of Submission
            </label>
            <input
              type="date"
              id="handOveredDate"
              value={secondaryFields.handOveredDateOfSubmission}
              onChange={(e) => setSecondaryFields({ ...secondaryFields, handOveredDateOfSubmission: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>

          {/* Final Report Date */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label 
              htmlFor="finalReportDate" 
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Date Of Final Report Issued
            </label>
            <input
              type="date"
              id="finalReportDate"
              value={secondaryFields.dateOfFinalReportIssued}
              onChange={(e) => setSecondaryFields({ ...secondaryFields, dateOfFinalReportIssued: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>

          {/* Division */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label 
              htmlFor="division" 
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Division
            </label>
            <select
              id="division"
              value={secondaryFields.divisionId}
              onChange={(e) => setSecondaryFields({ ...secondaryFields, divisionId: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            >
              <option value="">Select division</option>
              <option value="1">Division 1</option>
              <option value="2">Division 2</option>
            </select>
          </div>

          {/* Status */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label 
              htmlFor="status" 
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Status
            </label>
            <select
              id="status"
              value={secondaryFields.status}
              onChange={(e) => setSecondaryFields({ ...secondaryFields, status: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            >
              <option value="" disabled selected>Select Status</option>
              <option value="onGoing">On-Going</option>
              <option value="closed">Closed with Charge Sheet</option>
              <option value="putAway">Put Away</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SecondaryFields;