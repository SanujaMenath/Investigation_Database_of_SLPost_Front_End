import React, { useState } from 'react';
import { updateInvestigation } from '../services/api';

const UpdateInv: React.FC = () => {
  // const { id } = useParams<{ id: string }>();

  type FormData = {
    fileId: string;
    incident: string;
    incidentDate: string;
    dateReferedToInvestigate: string;
    dateOfFinalReportIssued: string;
    recommendationOfFinalReport: string;
    personWhoAcceptedSubmission: string;
    acceptedSubmissionDate: string;
    handOveredDateOfSubmission: string;
    status: string;
  };

  const [formData, setFormData] = useState<FormData>({
    fileId: '',
    incident: '',
    incidentDate: '',
    dateReferedToInvestigate: '',
    dateOfFinalReportIssued: '',
    recommendationOfFinalReport: '',
    personWhoAcceptedSubmission: '',
    acceptedSubmissionDate: '',
    handOveredDateOfSubmission: '',
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateInvestigation(formData);
  };

  return (
    <div>
      

      <div className="font-bold">
        <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
          <h1 className="text-black dark:text-white">Update Investigation Details</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-4 dark:bg-gray-900 dark:text-white">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col space-y-2">
              <label htmlFor="fileId">File Number :</label>
              <input
                type="text"
                name="fileId"
                className="border border-red-500 p-2 w-1/2"
                value={formData.fileId}
                onChange={handleChange}
                placeholder="File Number"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="incident">Incident :</label>
              <input
                type="text"
                name="incident"
                className="border border-red-500 p-2 w-1/2"
                value={formData.incident}
                onChange={handleChange}
                placeholder="Incident"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="incidentDate">Incident Date :</label>
              <input
                type="date"
                name="incidentDate"
                className="border border-red-500 p-2 w-1/2"
                value={formData.incidentDate}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="dateReferedToInvestigate">Date Referred To Investigate :</label>
              <input
                type="date"
                name="dateReferedToInvestigate"
                className="border border-red-500 p-2 w-1/2"
                value={formData.dateReferedToInvestigate}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="dateOfFinalReportIssued">Date Of Final Report Issued :</label>
              <input
                type="date"
                name="dateOfFinalReportIssued"
                className="border border-red-500 p-2 w-1/2"
                value={formData.dateOfFinalReportIssued}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="recommendationOfFinalReport">Recommendation Of Final Report :</label>
              <input
                type="text"
                name="recommendationOfFinalReport"
                className="border border-red-500 p-2 w-1/2"
                value={formData.recommendationOfFinalReport}
                onChange={handleChange}
                placeholder="Recommendation Of Final Report"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="personWhoAcceptedSubmission">Person Who Accepted Submission :</label>
              <input
                type="text"
                name="personWhoAcceptedSubmission"
                className="border border-red-500 p-2 w-1/2"
                value={formData.personWhoAcceptedSubmission}
                onChange={handleChange}
                placeholder="Person Who Accepted Submission"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="acceptedSubmissionDate">Accepted Submission Date :</label>
              <input
                type="date"
                name="acceptedSubmissionDate"
                className="border border-red-500 p-2 w-1/2"
                value={formData.acceptedSubmissionDate}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="handOveredDateOfSubmission">Hand Overed Date Of Submission :</label>
              <input
                type="date"
                name="handOveredDateOfSubmission"
                className="border border-red-500 p-2 w-1/2"
                value={formData.handOveredDateOfSubmission}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="status">Select the Status :</label>
              <select
                name="status"
                id="status"
                className="border border-red-500 p-2 w-1/2"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="closed">Closed</option>
                <option value="onGoing">On-Going</option>
                <option value="putAway">Putaway</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="float-none inline-block bg-gray-500 text-white p-2 rounded-lg w-1/4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInv;
