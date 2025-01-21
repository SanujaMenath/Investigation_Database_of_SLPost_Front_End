import MandatoryFields from "../components/forms/MandatoryFields";
import InterimReport from "../components/forms/InterimReport";
import FormalInquiry from "../components/forms/FormalInquiry";
import SecondaryFields from "../components/forms/SecondaryFields";
import Header from "../components/ui/Header";
import Chargesheet from "../components/forms/Chargesheet";
import CreateSuspector from "../components/forms/CreateSuspector";

function CreateInvestigation() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-indigo-50">
        <h1 className="text-4xl text-indigo-900 font-medium mt-4">
          Create Investigation
        </h1>

        <form className="space-y-4 p-4 mx-auto w-full max-w-3xl border rounded mb-4 mt-6">
          <MandatoryFields />
          <SecondaryFields />
          <InterimReport />
          <Chargesheet />
          <FormalInquiry />
          <CreateSuspector />
        </form>
      </div>
    </div>
  );
}

export default CreateInvestigation;
