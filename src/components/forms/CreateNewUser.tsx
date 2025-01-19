import { Button } from '@radix-ui/themes'

function CreateNewUser() {
  return (
    <div>
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 ">
        <h1 className="">Create New User</h1>
      </div>

      <form
       
        className="space-y-4 p-4 mx-auto w-full max-w-3xl border rounded mb-4 mt-6"
      >
        {/* Email */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="email">Enter the Email:</label>
          <input
            type="email"
            className="border px-3 py-2 rounded"
            placeholder="Email"
          
          />
        </div>

        {/* First Name */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="firstName">"Enter the First Name":</label>
          <input
            type="text"
            className="border px-3 py-2 rounded"
            placeholder="First Name"
          
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="lastName">Enter the Last Name:</label>
          <input
            type="text"
            className="border px-3 py-2 rounded"
            placeholder="Last Name"
          
          />
        </div>

        {/* Password */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            className="border px-3 py-2 rounded"
            placeholder="Password"
          
          />
        </div>

        {/* Role */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="role">"Select Role":</label>
          <select
            className="border w-40 px-3 py-2 rounded"
      
          >
            <option value="CLERK">CLERK</option>
            <option value="DIVISIONAL_SUPERINTENDENT">"DS"</option>
            <option value="DEPUTY_POST_MASTER_GENERAL">"DPMG"</option>
          </select>
        </div>

        {/* Location Type */}
        <div className="flex flex-wrap items-center justify-between text-lg font-medium">
          <label htmlFor="locationType">"Select Location Type":</label>
          <select
            className="border w-40 px-3 py-2 rounded"
          
          >
            <option value="">Select Type</option>
            <option value="PROVINCE">Province</option>
            <option value="DIVISION">Division</option>
            
          </select>
        </div>

        {/* Province Selection (visible only if locationType is 'DIVISION') */}
    
          <div className="flex flex-wrap items-center justify-between text-lg font-medium">
            <label htmlFor="locationId">Select location type </label>
            <select
              className="border px-3 py-2 rounded"
          
            >
              <option value="">Select location</option>
     
                <option >
                
                </option>
       
            </select>
          </div>
        

        <Button type="submit">
          Submit
        </Button>
      </form>

    </div>
  )
}

export default CreateNewUser
