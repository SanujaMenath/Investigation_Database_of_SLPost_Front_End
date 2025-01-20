import { Button } from "@radix-ui/themes";
import Header from "../ui/Header";

const CreateNewUser = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl border-b-4 border-indigo-200 pb-4">
            Create New User
          </h1>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="bg-white shadow-lg rounded-lg p-6 space-y-6 border border-indigo-100">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-indigo-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
                  placeholder="Enter first name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-indigo-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-indigo-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 placeholder-indigo-300"
                placeholder="Enter email address"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-indigo-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 placeholder-indigo-300"
                placeholder="Enter password"
              />
            </div>

            {/* Role and Location Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-indigo-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
                >
                  <option value="CLERK">Clerk</option>
                  <option value="DIVISIONAL_SUPERINTENDENT">DS</option>
                  <option value="DEPUTY_POST_MASTER_GENERAL">DPMG</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="locationType"
                  className="block text-sm font-medium text-indigo-700"
                >
                  Location Type
                </label>
                <select
                  id="locationType"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
                >
                  <option value="">Select Type</option>
                  <option value="PROVINCE">Province</option>
                  <option value="DIVISION">Division</option>
                </select>
              </div>
            </div>

            {/* Location Selection */}
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-indigo-700"
              >
                Select Location
              </label>
              <select
                id="location"
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
              >
                <option value="">Select location</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 
                       rounded-md transition-colors duration-200 hover:shadow-lg
                       transform hover:-translate-y-0.5"
              >
                Create User
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNewUser;
