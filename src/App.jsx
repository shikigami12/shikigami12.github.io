import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './index.css';

function App() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/cv.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load CV data');
        }
        return response.json();
      })
      .then(data => {
        setCvData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-slate-500">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
          <p>Loading CV...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!cvData) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-10 font-sans text-gray-800 leading-relaxed">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none print:my-0 print:max-w-full">

        <Header profile={cvData.profile} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

          {/* Sidebar (Left Column) */}
          <div className="bg-slate-50 p-8 md:col-span-1 border-r border-gray-200">

            <h3 className="text-lg font-bold uppercase tracking-wider text-slate-800 mb-4 border-b-2 border-slate-300 pb-2">
              Technical Skills
            </h3>
            <Skills skills={cvData.skills} />

            {cvData.certifications && cvData.certifications.length > 0 && (
              <>
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-800 mb-4 border-b-2 border-slate-300 pb-2 mt-8">
                  Certifications
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  {cvData.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>•</span> {/* Simple bullet replacement if icon not available, or use font-awesome if installed. Sticking to text for now. */}
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {cvData.languages && cvData.languages.length > 0 && (
              <>
                <h3 className="text-lg font-bold uppercase tracking-wider text-slate-800 mb-4 border-b-2 border-slate-300 pb-2 mt-8">
                  Languages
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  {cvData.languages.map((lang, idx) => (
                    <li key={idx}>• {lang}</li>
                  ))}
                </ul>
              </>
            )}

          </div>

          {/* Main Content (Right Column) */}
          <div className="p-8 md:col-span-2">

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Professional Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                {cvData.summary}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-gray-200 pb-2">
              Experience
            </h2>
            <Experience experiences={cvData.experience} />

          </div>

        </div>
      </div>

      <footer className="mt-12 text-center text-gray-500 text-sm pb-8">
        <p>&copy; {new Date().getFullYear()} {cvData.profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
