const ChargeSheetForm = () => {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Charge Sheet Details
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Please fill in all charge sheet information
          </p>
        </div>

        <fieldset>
          <div className="flex flex-wrap -mx-3">
            {/* Row 1 */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="chargeSheetId"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Charge Sheet ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="chargeSheetId"
                placeholder="Enter charge sheet ID"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="nicAccused"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                NIC of Accused Person <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nicAccused"
                placeholder="Enter NIC number"
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
              />
            </div>

            {/* Date Fields */}
            {[
              {
                id: "chargeSheetIssuedDate",
                label: "Charge Sheet Issued Date",
              },
              { id: "dateOfAnswered", label: "Date of Answered" },
              {
                id: "dateOfPersonalFileCalled",
                label: "Date of Personal File Called",
              },
              {
                id: "dateOfPersonalReturned",
                label: "Date of Personal Returned",
              },
              {
                id: "dateOfDisciplinaryOrderTaken",
                label: "Date of Disciplinary Order Taken",
              },
              { id: "dateOfAppealedForPSC", label: "Date of Appealed For PSC" },
              { id: "dateOfPSCOrderTaken", label: "Date of PSC Order Taken" },
              { id: "dateOfAppealedToAAT", label: "Date of Appealed To AAT" },
              { id: "dateOfAATOrderTaken", label: "Date of AAT Order Taken" },
            ].map((field) => (
              <div key={field.id} className="w-full md:w-1/2 px-3 mb-6">
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-indigo-700 mb-2"
                >
                  {field.label} 
                </label>
                <input
                  type="date"
                  id={field.id}
                  className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           transition-colors bg-indigo-50/30"
                />
              </div>
            ))}

            {/* Textarea Fields */}
            <div className="w-full px-3 mb-6">
              <label
                htmlFor="pscOrderDescription"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                PSC Order Description 
              </label>
              <textarea
                id="pscOrderDescription"
                placeholder="Enter PSC order description"
                rows={3}
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300
                         resize-none"
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label
                htmlFor="aatOrderDescription"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                AAT Order Description 
              </label>
              <textarea
                id="aatOrderDescription"
                placeholder="Enter AAT order description"
                rows={3}
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300
                         resize-none"
              />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ChargeSheetForm;
