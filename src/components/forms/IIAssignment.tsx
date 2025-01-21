import { Button } from "@radix-ui/themes";

function IIAssignment() {
  return (
    <div>
      <h1 className="text-lg text-[#4a4a4a] font-medium ml-2 flex items-center">
        Investigation Inspector
      </h1>
      <select
        id="selectInspector"
        className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
      >
        <option value={undefined} selected disabled>
          Select from here
        </option>
      </select>

      <div className="flex flex-col space-y-2 w-1/2">
        <div className="w-full">
          <label className="ml-3 " htmlFor="">
            Investigator's NIC
          </label>
          <input
            className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
            type="text"
            disabled
          />
          <label className="ml-3 " htmlFor="">
            Case Number of Investigator
          </label>
          <input
            className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
            type="text"
            placeholder="Case No"
          />
          <label className="ml-3 " htmlFor="">
            Aquired Date
          </label>
          <input
            className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
            type="date"
          />
          <label className="ml-3 " htmlFor="">
            Submitted Date
          </label>
          <input
            className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
            type="date"
          />
          <label className="ml-3 " htmlFor="">
            Reacquired Date
          </label>
          <input
            className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
            type="date"
          />
          <label className="ml-3 " htmlFor="">
            Resubmitted Date
          </label>
          <input
            className="text-[#4a4a4a] border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2 w-full"
            type="date"
          />

          <Button
            type="button"
            className="bg-[#e65959]/20 text-[#e65959] font-medium  px-3 py-1 text-sm w-[100px] rounded-lg m-2"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default IIAssignment;
