// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResumeList from './components/ResumeList';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ResumeList />} />
        <Route path="/resumes/:resumeId" element={<ResumeForm />} />
      </Routes>
    </div>
  );
}

export default App;
