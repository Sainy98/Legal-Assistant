import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LegalAssistant = () => {
  const [question, setQuestion] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Simulated data
  const answerData = {
    answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
    citation: {
      text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7 of the document)",
      pdfUrl: "https://lexisingapore-my.sharepoint.com/personal/harshit_lexi_sg/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fharshit%5Flexi%5Fsg%2FDocuments%2Fcases%2FDani%20Vs%20Pritam%20%28Future%2010%20at%20age%2054%2D55%29%2Epdf&parent=%2Fpersonal%2Fharshit%5Flexi%5Fsg%2FDocuments%2Fcases&ga=1",
      paragraph: 7
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      setIsSubmitting(true);
      // Simulate API call delay
      setTimeout(() => {
        setShowAnswer(true);
        setIsSubmitting(false);
      }, 1200);
    }
  };

  const openPdf = () => {
    window.open(answerData.citation.pdfUrl, '_blank');
  };

  return (
    <div className="legal-assistant-container">
      <div className="legal-assistant-content">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="header-section"
        >
          <h1 className="main-title">Legal Research Assistant</h1>
          <p className="subtitle">Get authoritative answers to your legal questions with verified citations</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="question-card"
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="question" className="form-label">
                Ask your legal question
              </label>
              <motion.textarea
                id="question"
                rows={4}
                className="question-input"
                placeholder="E.g. In a motor accident claim where the deceased was self-employed..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                whileFocus={{ scale: 1.005 }}
              />
            </div>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="button-loading">
                  <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Researching...
                </span>
              ) : 'Get Answer'}
            </motion.button>
          </form>
        </motion.div>
        
        <AnimatePresence>
          {showAnswer && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="answer-section"
            >
              <motion.div 
                className="answer-card"
                whileHover={{ scale: 1.005 }}
              >
                <h2 className="section-title">
                  <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Your Question
                </h2>
                <p className="answer-text question-text">{question}</p>
              </motion.div>
              
              <motion.div 
                className="answer-card"
                whileHover={{ scale: 1.005 }}
              >
                <h2 className="section-title">
                  <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Answer
                </h2>
                <p className="answer-text">{answerData.answer}</p>
              </motion.div>
              
              <motion.div 
                className="citation-card"
                whileHover={{ y: -3 }}
              >
                <h2 className="section-title">
                  <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Supporting Citation
                </h2>
                <motion.div 
                  className="citation-content"
                  onClick={openPdf}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="citation-text-container">
                    <p className="citation-text">{answerData.citation.text}</p>
                    <motion.p 
                      className="citation-link"
                      whileHover={{ x: 2 }}
                    >
                      View source document (Paragraph {answerData.citation.paragraph})
                      <svg className="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          className="footer-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>This is a simulated legal research assistant. Answers are for demonstration purposes only.</p>
        </motion.div>
      </div>

      <style jsx>{`
        .legal-assistant-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%);
          padding: 3rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .legal-assistant-content {
          max-width: 56rem;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .main-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, #2563eb 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          color: #64748b;
          max-width: 28rem;
          margin: 0 auto;
        }

        .question-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #334155;
          margin-bottom: 0.5rem;
        }

        .question-input {
          width: 808px;
          padding: 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 0.5rem;
          font-size: 1rem;
          color: #334155;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .question-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .question-input::placeholder {
          color: #94a3b8;
        }

        .submit-button {
          width: 100%;
          background: linear-gradient(90deg, #2563eb 0%, #4f46e5 100%);
          color: white;
          font-weight: 500;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.2s ease;
        }

        .submit-button:hover {
          background: linear-gradient(90deg, #1d4ed8 0%, #4338ca 100%);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-loading {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinner {
          animation: spin 1s linear infinite;
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.75rem;
        }

        .spinner-circle {
          opacity: 0.25;
        }

        .spinner-path {
          opacity: 0.75;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .answer-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .answer-card, .citation-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          

        }
          .answer-card > .section-title{
       padding: 0rem;
          }

        .citation-card {
          padding: 0;
          overflow: hidden;
          
        }

        .section-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          padding: 1.5rem;
          padding-bottom: 0;
        }

        .citation-card .section-title {
          padding-bottom: 0.75rem;
        }

        .section-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        }

        .answer-text {
          color: #334155;
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          line-height: 1.6;
          box-shadow: 0px 0px 4px 3px #80808036;
        }

        .question-text {
          background-color: #f8fafc;
          border-left: 4px solid #60a5fa;
          box-shadow: 0px 0px 4px 3px #80808036;
        }

        .answer-text {
          background-color: #eff6ff;
          border-left: 4px solid #3b82f6;
        }

        .citation-content {
          padding: 0 1.5rem 1.5rem;
          cursor: pointer;
          
        }

        .citation-text-container {
          color: #334155;
          background-color: #f8fafc;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .citation-content:hover .citation-text-container {
          border-color: #93c5fd;
        }

        .citation-text {
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .citation-link {
          color: #2563eb;
          font-weight: 500;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
        }

        .citation-link:hover {
          color: #1e40af;
        }

        .link-icon {
          width: 1rem;
          height: 1rem;
          margin-left: 0.25rem;
        }

        .footer-note {
          text-align: center;
          font-size: 0.875rem;
          color: #64748b;
          margin-top: 3rem;
        }

        @media (max-width: 640px) {
          .legal-assistant-container {
            padding: 2rem 1rem;
          }
          
          .main-title {
            font-size: 1.5rem;
          }
          
          .question-card, .answer-card, .citation-card {
            padding: 1rem;
          }
          
          .section-title {
            padding: 1rem;
            padding-bottom: 0;
          }
          
          .citation-content {
            padding: 0 1rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LegalAssistant;