const MandatoryFields = () => {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Mandatory Fields
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Please fill in all required information
          </p>
        </div>
        <fieldset>
          {/* Form Layout - Two fields per row */}
          <div className="flex flex-wrap -mx-3">
            {/* Row 1 */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="fileId"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                File Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fileId"
                placeholder="Ex: Inv/01"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="incident"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Incident <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="incident"
                placeholder="Ex: Vehicle Accident"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
              />
            </div>

            {/* Row 2 */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="incidentDate"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Incident Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="incidentDate"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="dateReferred"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Date Referred To Investigate{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dateReferred"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default MandatoryFields;
