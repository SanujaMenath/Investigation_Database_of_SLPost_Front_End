import { Button } from "@radix-ui/themes"


function CreateInvestigationInpector() {

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
        <h1 className="text-black dark:text-white">
          Create Investigation Inspector
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 dark:bg-gray-900 dark:text-white mx-auto w-full max-w-3xl border-r-4 border-l-4 border-b-4 border-t-4 mb-4 mt-6"
      >
        <div className="flex flex-wrap items-center justify-between text-lg text-[#4a4a4a] font-medium ml-2">
          <label htmlFor="name">Investigation Inspector's Name :</label>
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="Name of II"

            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-lg text-[#4a4a4a] font-medium ml-2">
          <label htmlFor="nic">Investigation Inspector's NIC :</label>
          <div className="flex flex-col space-y-2 w-1/2">
            <input
              type="text"
              className="border border-[#4a4a4a]/30 px-3 py-2 bg-[#4a4a4a]/5 !outline-none rounded-lg m-2"
              placeholder="NIC of II"

            />
          </div>
        </div>

        <Button  type="submit">
          Create
        </Button>
      </form>
    </div>
  )
}

export default CreateInvestigationInpector
