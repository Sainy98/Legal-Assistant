import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PDFViewer({ file, onClose }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-auto">
      <div className="bg-white p-4 w-3/4 h-4/5 overflow-auto rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">Judgment PDF</h2>
          <button
            onClick={onClose}
            className="text-red-600 font-bold border px-2 py-1 rounded"
          >
            Close
          </button>
        </div>

        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {/* Simulating Paragraph 7 on Page 2 */}
          <Page pageNumber={2} />
          <div className="text-white text-center bg-yellow-500 p-2 my-2 rounded">
            🔍 Highlight: Paragraph 7 (Simulated here)
          </div>
        </Document>
      </div>
    </div>
  );
}

export default PDFViewer;
