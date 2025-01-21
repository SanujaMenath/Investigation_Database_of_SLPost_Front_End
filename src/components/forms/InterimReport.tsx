
const InterimReport = () => {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Interim Report
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Enter interim report details
          </p>
        </div>

        <div className="space-y-6">
          {/* First Row - Two Fields */}
          <div className="flex flex-wrap -mx-3">
            {/* Interim Report ID */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="interimReportId"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Interim Report ID
              </label>
              <input
                type="text"
                id="interimReportId"
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
                placeholder="Enter report ID"
              />
            </div>

            {/* Select Field */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="reportType"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Select Invesgation Inspector 
              </label>
              <select
                id="reportType"
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              >
                <option value="">Select from here</option>
                <option value="type1">II 1</option>
                <option value="type2">II 2</option>
              </select>
            </div>
          </div>

          {/* Recommendation Textarea */}
          <div className="space-y-2">
            <label
              htmlFor="recommendation"
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Recommendation Of Interim Report
            </label>
            <textarea
              id="recommendation"
              rows={3}
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 placeholder-indigo-300 resize-none"
              placeholder="Enter your recommendation here..."
            />
          </div>

          {/* Date Field */}
          <div className="space-y-2">
            <label
              htmlFor="issuedDate"
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Date of Interim Report Issued
            </label>
            <input
              type="date"
              id="issuedDate"
              className="w-full md:w-1/2 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterimReport;
