import React, { FC, useEffect } from "react";

export type FormalInquiryFormState = {
  dateOfAppoint: string;
  startedDate: string;
  endDate: string;
  dateOfRecommendation: string;
  recommendationOfIO: string;
};

type FormalInquiryFormProps = {
  getFormalInquiry: (formalInquiry: FormalInquiryFormState) => void;
};
const FormalInquiryForm:FC<FormalInquiryFormProps> = ({getFormalInquiry}) => {
  const [formalInquiry, setFormalInquiry] = React.useState<FormalInquiryFormState>({
    dateOfAppoint: "",
    startedDate: "",
    endDate: "",
    dateOfRecommendation: "",
    recommendationOfIO: "",
  });

  useEffect(() => {
    getFormalInquiry(formalInquiry);
  }, [formalInquiry]);

  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Formal Inquiry Details
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Please fill in all appointment and investigation details
          </p>
        </div>

        <fieldset>
          <div className="flex flex-wrap -mx-3">
            {/* Row 1 */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="dateOfAppoint"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Date Of Appoint <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dateOfAppoint"
                value={formalInquiry.dateOfAppoint}
                onChange={(e) => setFormalInquiry({ ...formalInquiry, dateOfAppoint: e.target.value })}
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="startedDate"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Started Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="startedDate"
                value={formalInquiry.startedDate}
                onChange={(e) => setFormalInquiry({ ...formalInquiry, startedDate: e.target.value })}
                required
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              />
            </div>

            {/* Row 2 */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                End Date 
              </label>
              <input
                type="date"
                id="endDate"
                value={formalInquiry.endDate}
                onChange={(e) => setFormalInquiry({ ...formalInquiry, endDate: e.target.value })}
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor="dateOfRecommendation"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Date Of Recommendation 
              </label>
              <input
                type="date"
                id="dateOfRecommendation"
                value={formalInquiry.dateOfRecommendation}
                onChange={(e) => setFormalInquiry({ ...formalInquiry, dateOfRecommendation: e.target.value })}
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              />
            </div>

            {/* Full width textarea */}
            <div className="w-full px-3 mb-6">
              <label
                htmlFor="recommendation"
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Recommendation Of Investigation Officer
              </label>
              <textarea
                id="recommendation"
                value={formalInquiry.recommendationOfIO}
                onChange={(e) => setFormalInquiry({ ...formalInquiry, recommendationOfIO: e.target.value })}
                placeholder="Enter your recommendation here"
                rows={3}
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300
                         resize-none"
              />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default FormalInquiryForm;
