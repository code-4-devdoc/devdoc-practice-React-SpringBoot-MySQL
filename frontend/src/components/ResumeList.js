// ResumeList.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ResumeList() {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchResumes();
  }, []);

  // Resume 목록 조회
  const fetchResumes = async () => {
    try {
      const response = await axios.get('/api/resumes');
      setResumes(response.data);
    } catch (error) {
      console.error('Failed to fetch resumes', error);
    }
  };

  // Resume 테이블 생성
  const createResume = async () => {
    try {
      const response = await axios.post('/api/resumes');
      fetchResumes();
    } catch (error) {
      console.error('Failed to create resume', error);
    }
  };

  // Resume 테이블 삭제
  const deleteResume = async (id) => {
    try {
      await axios.delete(`/api/resumes/${id}`);
      fetchResumes();
    } catch (error) {
      console.error('Failed to delete resume', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Resume List</h2>
      <button onClick={createResume} style={{ fontSize: '2rem', padding: '1rem' }}>+</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {resumes.map(resume => (
          <li key={resume.id} style={{ marginTop: '1rem' }}>
            <button onClick={() => navigate(`/resumes/${resume.id}`)}>{`Resume ${resume.id}`}</button>
            <button onClick={() => deleteResume(resume.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeList;
