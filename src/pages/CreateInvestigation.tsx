import MandatoryFields from "../components/forms/MandatoryFields";
import InterimReport from "../components/forms/InterimReport";
import FormalInquiry from "../components/forms/FormalInquiry";
import SecondaryFields from "../components/forms/SecondaryFields";

function CreateInvestigation() {
  return (
    <div>
      <h1 className="text-4xl">Create Investigation</h1>

      <form action="" method="post">
        <MandatoryFields/>
        <SecondaryFields/>
        <InterimReport/>
        <FormalInquiry/>
      </form>
    </div>
  );
}

export default CreateInvestigation;
