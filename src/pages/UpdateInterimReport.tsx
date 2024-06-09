import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  updateInterimReport } from '../services/api';

const UpdateInterimReport: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  type FormData = {
    interimReportId: string;
    interimRecommendation: string;
    dateIssued: string;
  };

  const [formData, setFormData] = useState<FormData>({
    interimReportId: '',
    interimRecommendation: '',
    dateIssued: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const report = await getInterimReportById(id);
        setFormData(report); // Use the fetched report directly as the state
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      await updateInterimReport(id, formData);
    } else {
      console.error("Invalid ID");
    }
  };

  return (
    <div>
      <div className="font-bold">
        <div className="font-bold underline border-t-8 text-center text-4xl px-2 py-4 dark:bg-gray-900">
          <h1 className="text-black dark:text-white">Update Interim Report</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-4 dark:bg-gray-900 dark:text-white">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col space-y-2">
              <label htmlFor="interimReportId">Interim Report ID :</label>
              <input
                type="text"
                name="interimReportId"
                className="border border-red-500 p-2 w-1/2"
                value={formData.interimReportId}
                onChange={handleChange}
                placeholder="Interim Report ID"
                
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="interimRecommendation">Interim Recommendation :</label>
              <input
                type="text"
                name="interimRecommendation"
                className="border border-red-500 p-2 w-1/2"
                value={formData.interimRecommendation}
                onChange={handleChange}
                placeholder="Interim Recommendation"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="dateIssued">Date Issued :</label>
              <input
                type="date"
                name="dateIssued"
                className="border border-red-500 p-2 w-1/2"
                value={formData.dateIssued}
                onChange={handleChange}
              />
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

export default UpdateInterimReport;
