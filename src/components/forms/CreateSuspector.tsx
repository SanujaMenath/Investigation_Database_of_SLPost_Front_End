
const CreateSuspector = () => {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Accused Person Details
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Please provide the suspect's information
          </p>
        </div>

        <div className="space-y-4">
          {/* Name Field */}
          <div className="flex items-center gap-4">
            <label 
              htmlFor="name"
              className="w-1/3 text-sm font-medium text-indigo-700"
            >
              Name of the Accused <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Enter full name"
              className="w-2/3 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 placeholder-indigo-300"
            />
          </div>

          {/* NIC Field */}
          <div className="flex items-center gap-4">
            <label 
              htmlFor="nic"
              className="w-1/3 text-sm font-medium text-indigo-700"
            >
              NIC Number <span className="text-red-500">*</span>
            </label>
            <input
              id="nic"
              type="text"
              required
              placeholder="Ex: 999999999V"
              className="w-2/3 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 placeholder-indigo-300"
            />
          </div>

          {/* Date of Birth Field */}
          <div className="flex items-center gap-4">
            <label 
              htmlFor="dob"
              className="w-1/3 text-sm font-medium text-indigo-700"
            >
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              id="dob"
              type="date"
              required
              className="w-2/3 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSuspector;