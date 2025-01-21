import { Button } from "@radix-ui/themes";
import MandatoryFields from "../components/forms/MandatoryFields";
import SecondaryFields from "../components/forms/SecondaryFields";
import Header from "../components/ui/Header";

function UpdateInvestigations() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center min-h-screen bg-indigo-50 py-3 mb-4">
        <MandatoryFields />
        <SecondaryFields />
        <div className="mt-4 ">
          <Button variant="soft">Update</Button>
        </div>
      </div>
    </>
  );
}

export default UpdateInvestigations;
