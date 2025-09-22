import { useState } from "react";
import { Button } from "@radix-ui/themes";
import { createInvInspector } from "../../services/invInspector";
import Header from "../ui/Header";

function CreateInvInspector() {
  const [formData, setFormData] = useState({ name: "", nic: "" });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic Validation
    if (!formData.name || !formData.nic) {
      setError("Both fields are required.");
      return;
    }

    try {
      const result = await createInvInspector(formData);
      if (result) {
        setSuccess("Investigation Inspector created successfully!");
        setFormData({ name: "", nic: "" }); 
      } else {
        setError(
          result?.message || "Failed to create Investigation Inspector."
        );
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">
          Create Investigation Inspector
        </h1>
        <p className="mt-2 text-sm text-indigo-600">
          Please fill in the details below
        </p>
      </div>

      {/* Form */}
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-6 space-y-6 border border-indigo-100"
      >
        {/* Name Field */}
        <div className="space-y-2 ">
          <label 
            htmlFor="name"
            className="block font-medium text-indigo-700"
          >
            Investigation Inspector's Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                     transition-colors bg-indigo-50/30 placeholder-indigo-300"
            placeholder="Enter full name"
          />
        </div>

        {/* NIC Field */}
        <div className="space-y-2">
          <label 
            htmlFor="nic"
            className="block font-medium text-indigo-700"
          >
            Investigation Inspector's NIC
          </label>
          <input
            type="text"
            id="nic"
            name="nic"
            value={formData.nic}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-indigo-200 rounded-md shadow-sm 
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                     transition-colors bg-indigo-50/30 placeholder-indigo-300"
            placeholder="Enter NIC number"
          />
        </div>

        {/* Error and Success Messages */}
        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-100">
            {error}
          </div>
        )}
        {success && (
          <div className="text-sm text-emerald-600 bg-emerald-50 p-3 rounded-md border border-emerald-100">
            {success}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <Button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 
                     rounded-md transition-all duration-200 hover:shadow-lg
                     transform hover:-translate-y-0.5"
          >
            Create Inspector
          </Button>
        </div>
      </form>
    </div>
  </div>
  </>
  );
}

export default CreateInvInspector;
