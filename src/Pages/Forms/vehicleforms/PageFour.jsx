import React from 'react';
import { useDropzone } from 'react-dropzone';

const AccountSetup = () => {
  // File uploads
  const FileUploader = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-blue-400 rounded-md p-4 text-center cursor-pointer hover:bg-blue-50 transition"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the files here...</p>
        ) : (
          <p className="text-gray-500">
            Drag and drop files here or{' '}
            <span className="text-blue-500 underline">Select files</span>
          </p>
        )}
      </div>
    );
  };

  // Document list
  const documentList = [
    'Pan Card',
    'Aadhar Card',
    'Employer ID card',
    'Joining/Confirmation/Experience Letter',
    'Last 12 month salary Account Statement',
    'Existing Loan Account Statement',
    'Latest 6 month salary slip',
    '3 year form 16 (part A B) and 26 AS',
    '3 year ITR and computation',
    'Driving licenses',
    'NOC/Loan close statements for loans closed in one year',
  ];

  return (
    <div className="flex flex-col lg:flex-row p-8 py-12 mx-4 rounded-lg shadow-md bg-[#C0F7FB]">
      {/* Left Section */}
      <div className=" form-slidebar">
        {/* <div className="mb-8">
          <img src="/logo.png" alt="Logo" className="h-16" />
        </div>
        <div>
          <img src="/icon.png" alt="Icon" className="h-32" />
        </div> */}
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 bg-white p-8 py-12 mx-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Account Set Up</h2>
        <p className="text-gray-600 mb-6">
          Set up your account for your loan application
        </p>

        {/* Steps */}
        <div className="flex justify-between items-center mb-6">
          {[1, 2, 3, 4].map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg border-4 ${
                  index <= 2 ? 'border-blue-400' : 'border-blue-200'
                }`}
              >
                {step}
              </div>
              {index !== 3 && (
                <div className="w-16 h-1 bg-blue-400 rounded-full mx-2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Document Upload Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-4 text-left">#</th>
              <th className="border border-gray-300 p-4 text-left">Document Name</th>
              <th className="border border-gray-300 p-4 text-left">Upload Documents</th>
            </tr>
          </thead>
          <tbody>
            {documentList.map((doc, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-4 text-center">{index + 1}</td>
                <td className="border border-gray-300 p-4">{doc}</td>
                <td className="border border-gray-300 p-4">
                  <FileUploader onDrop={(acceptedFiles) => console.log(acceptedFiles)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
