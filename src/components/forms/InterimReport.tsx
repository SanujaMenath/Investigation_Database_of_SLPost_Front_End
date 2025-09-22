import  { FC, useEffect, useState } from "react";

export type InterimReportState = {
  interimReportId: string;
  invInspectorNic: string;
  issuedDate: string;
  reportReccomendation: string;
};

type Inspector = {
  id: string;
  name: string;
  nic: string;
};

type InterimReportProps = {
  id: string;
  getInterimReport: (interimReport: InterimReportState) => void;
  onRemove?: (id: string) => void;
};

const 
InterimReport: FC<InterimReportProps> = ({
  getInterimReport,
  onRemove,
  id,
}) => {
  const [interimReport, setInterimReport] = useState<InterimReportState>({
    interimReportId: "",
    invInspectorNic: "",
    issuedDate: "",
    reportReccomendation: "",
  });

  useEffect(() => {
    getInterimReport(interimReport);
  }, [interimReport]);

  const [invInspector, setInvInspector] = useState<Inspector[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/inspectors")
      .then((response) => response.json())
      .then((data) => setInvInspector(data));
  }, []);

  return (
    <div 
      className="relative max-w-3xl bg-white shadow-lg rounded-lg p-6 border border-indigo-100 mb-8"
    >
      <div className="space-y-6">
        {/* Delete Button */}
        <button
          className="absolute bg-indigo-50 px-1 rounded-[5px] font-semibold top-2 right-2 text-red-500 hover:text-red-700"
          title="Delete Report"
          onClick={() => {
            if (onRemove) onRemove(id);
          }}
        >
          ✕
        </button>

        {/* Section Header */}
        <div className="border-b border-indigo-100 pb-4">
          <h2 className="text-xl font-semibold text-indigo-900">
            Interim Report {id}
          </h2>
          <p className="mt-1 text-sm text-indigo-600">
            Enter interim report details
          </p>
        </div>

        <div className="space-y-6 mt-6">
          <div className="flex flex-wrap -mx-3">
            {/* Interim Report ID */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor={`interimReportId-${id}`}
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Interim Report ID
              </label>
              <input
                type="text"
                id={`interimReportId-${id}`}
                required
                value={interimReport.interimReportId}
                onChange={(e) =>
                  setInterimReport({
                    ...interimReport,
                    interimReportId: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30 placeholder-indigo-300"
                placeholder="Enter report ID"
              />
            </div>

            {/* Select Field */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                htmlFor={`inspector-${id}`}
                className="block text-sm font-medium text-indigo-700 mb-2"
              >
                Select Investigation Inspector
              </label>
              <select
                id={`inspector-${id}`}
                value={interimReport.invInspectorNic}
                onChange={(e) =>
                  setInterimReport({
                    ...interimReport,
                    invInspectorNic: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                         transition-colors bg-indigo-50/30"
              >
                <option value="">Select from here</option>
                {invInspector.map((item) => (
                  <option key={item.id} value={item.nic}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Recommendation Textarea */}
          <div className="space-y-2">
            <label
              htmlFor={`recommendation-${id}`}
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Recommendation Of Interim Report
            </label>
            <textarea
              id={`recommendation-${id}`}
              rows={3}
              value={interimReport.reportReccomendation}
              onChange={(e) =>
                setInterimReport({
                  ...interimReport,
                  reportReccomendation: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30 placeholder-indigo-300 resize-none"
              placeholder="Enter your recommendation here..."
            />
          </div>

          {/* Date Field */}
          <div className="space-y-2">
            <label
              htmlFor={`issuedDate-${id}`}
              className="block text-sm font-medium text-indigo-700 mb-2"
            >
              Date of Interim Report Issued
            </label>
            <input
              type="date"
              id={`issuedDate-${id}`}
              value={interimReport.issuedDate}
              onChange={(e) =>
                setInterimReport({
                  ...interimReport,
                  issuedDate: e.target.value,
                })
              }
              className="w-full md:w-1/2 px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-colors bg-indigo-50/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterimReport;