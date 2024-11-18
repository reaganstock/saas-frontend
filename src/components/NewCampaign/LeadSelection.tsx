import React, { useState } from 'react';
import { Upload, FileSpreadsheet, Search, AlertCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface LeadSelectionProps {
  leads: any[];
  onLeadsUpdate: (leads: any[]) => void;
  onNext: () => void;
  onBack: () => void;
}

function LeadSelection({ leads, onLeadsUpdate, onNext, onBack }: LeadSelectionProps) {
  const [uploadType, setUploadType] = useState<string | null>(null);
  const [recentLists, setRecentLists] = useState([
    {
      id: 1,
      name: 'Tech Founders',
      count: 2500,
      date: '2024-02-20',
    },
    {
      id: 2,
      name: 'Marketing Directors',
      count: 1800,
      date: '2024-02-19',
    },
  ]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.csv'],
    },
    onDrop: (acceptedFiles) => {
      // Handle CSV file upload
      console.log('Files:', acceptedFiles);
    },
  });

  const renderUploadSection = () => {
    switch (uploadType) {
      case 'csv':
        return (
          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed ${
              isDragActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-700'
            } rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-500/10 transition-colors`}
          >
            <input {...getInputProps()} />
            <Upload size={32} className="mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">Drop your CSV file here</p>
            <p className="text-sm text-gray-400">or click to select file</p>
          </div>
        );
      case 'sheets':
        return (
          <div className="text-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Connect Google Sheets
            </button>
            <p className="mt-4 text-sm text-gray-400">
              Connect your Google account to import leads directly from Google Sheets
            </p>
          </div>
        );
      case 'recent':
        return (
          <div className="space-y-4">
            {recentLists.map((list) => (
              <div
                key={list.id}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
              >
                <div>
                  <p className="font-medium">{list.name}</p>
                  <p className="text-sm text-gray-400">
                    {list.count.toLocaleString()} leads • {list.date}
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
                  Select
                </button>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const uploadMethods = [
    {
      id: 'csv',
      icon: Upload,
      label: 'Upload CSV',
      description: 'Import leads from a CSV file',
    },
    {
      id: 'sheets',
      icon: FileSpreadsheet,
      label: 'Google Sheets',
      description: 'Connect and import from Google Sheets',
    },
    {
      id: 'recent',
      icon: Search,
      label: 'Recent Lists',
      description: 'Use a previously uploaded list',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-blue-400 mt-1" size={20} />
          <div>
            <p className="text-blue-400 font-medium">Lead Import Guidelines</p>
            <p className="text-sm text-blue-300 mt-1">
              Ensure your lead list includes required fields: full_name, platform_username, company
            </p>
          </div>
        </div>
      </div>

      {!uploadType ? (
        <div className="grid gap-4">
          {uploadMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setUploadType(method.id)}
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-left"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg">
                <method.icon size={24} />
              </div>
              <div>
                <p className="font-medium">{method.label}</p>
                <p className="text-sm text-gray-400">{method.description}</p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setUploadType(null)}
            className="mb-6 text-gray-400 hover:text-white"
          >
            ← Back to import options
          </button>
          {renderUploadSection()}
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!leads.length}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-400"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default LeadSelection;