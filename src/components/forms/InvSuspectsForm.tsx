const InvSuspectsForm = () => {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Investigation Details Related To Suspects
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Please provide investigation appeal and order information
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Select Suspect*/}
          <div className="space-y-2">
            <label
              htmlFor="selectSuspect"
              className="block text-sm font-medium text-indigo-700"
            >
              Select Suspect
            </label>
            <select
              id="selectSuspect"
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 text-indigo-700"
            >
              <option value="" disabled selected>
                Select From the List
              </option>
              <option value="nic">Suspect 1</option>
              <option value="nic">Suspect 2</option>
            </select>
          </div>

          {/* Interdicted Date */}
          <div className="space-y-2">
            <label
              htmlFor="interdictedDate"
              className="block text-sm font-medium text-indigo-700"
            >
              Interdicted Date
            </label>
            <input
              type="date"
              id="interdictedDate"
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>

          {/* Date of Appealed for Reinstate */}
          <div className="space-y-2">
            <label
              htmlFor="dateOfAppealedForReinstate"
              className="block text-sm font-medium text-indigo-700"
            >
              Date of Appealed for Reinstate{" "}
            </label>
            <input
              type="date"
              id="dateOfAppealedForReinstate"
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>

          {/* Appeal Status Select */}
          <div className="space-y-2">
            <label
              htmlFor="appealedAcceptedOrRejected"
              className="block text-sm font-medium text-indigo-700"
            >
              Appeal Status
            </label>
            <select
              id="appealedAcceptedOrRejected"
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 text-indigo-700"
            >
              <option value="" disabled selected>
                Appealed Accepted Or Rejected
              </option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Date of Restate for Appealed */}
          <div className="space-y-2">
            <label
              htmlFor="dateOfRestateForAppealed"
              className="block text-sm font-medium text-indigo-700"
            >
              Date of Restate for Appealed{" "}
            </label>
            <input
              type="date"
              id="dateOfRestateForAppealed"
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>

          {/* Date of Final Order */}
          <div className="space-y-2">
            <label
              htmlFor="dateOfFinalOrder"
              className="block text-sm font-medium text-indigo-700"
            >
              Date of Final Order
            </label>
            <input
              type="date"
              id="dateOfFinalOrder"
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvSuspectsForm;
