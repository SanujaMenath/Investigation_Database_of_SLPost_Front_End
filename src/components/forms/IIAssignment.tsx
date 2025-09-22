import { Button } from "@radix-ui/themes";

function IIAssignment() {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Investigation Inspector Details
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Please select an inspector and fill in the required information
          </p>
        </div>

        <div className="space-y-4">
          {/* Select Inspector */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="selectInspector"
              className="w-1/3 text-sm font-medium text-indigo-700"
            >
              Select Inspector <span className="text-red-500">*</span>
            </label>
            <select
              id="selectInspector"
              className="w-2/3 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                     transition-colors bg-indigo-50/30 text-indigo-700"
            >
              <option value="" disabled selected>
                Select from here
              </option>
            </select>
          </div>

          {/* NIC Field */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="inspectorNic"
              className="w-1/3 text-sm font-medium text-indigo-700"
            >
              Investigator's NIC
            </label>
            <input
              id="inspectorNic"
              type="text"
              disabled
              className="w-2/3 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                     bg-indigo-50/30 text-indigo-500"
            />
          </div>

          {/* Case Number */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="caseNumber"
              className="w-1/3 text-sm font-medium text-indigo-700"
            >
              Case Number <span className="text-red-500">*</span>
            </label>
            <input
              id="caseNumber"
              type="text"
              placeholder="Enter case number"
              className="w-2/3 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                     transition-colors bg-indigo-50/30 placeholder-indigo-300"
            />
          </div>

          {/* Date Fields */}
          {[
            { id: "acquiredDate", label: "Acquired Date" },
            { id: "submittedDate", label: "Submitted Date" },
            { id: "reacquiredDate", label: "Reacquired Date" },
            { id: "resubmittedDate", label: "Resubmitted Date" },
          ].map((field) => (
            <div key={field.id} className="flex items-center gap-4">
              <label
                htmlFor={field.id}
                className="w-1/3 text-sm font-medium text-indigo-700"
              >
                {field.label} 
              </label>
              <input
                type="date"
                id={field.id}
                className="w-2/3 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
              />
            </div>
          ))}

          {/* Add Button */}
          <div className="pt-4 flex justify-end gap-3">
            <Button
              variant="soft"
              type="button"
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 font-medium px-6 py-2 rounded-md
                     transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add
            </Button>

            {/* Delete Button */}
            <button
              type="button"
              className="bg-red-100 hover:bg-red-200 text-red-600 font-medium px-3 py-1 rounded-md
                     transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IIAssignment;
