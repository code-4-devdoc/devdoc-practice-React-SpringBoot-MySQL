// ProjectData.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectData({ resumeId, shouldRefreshProjectData }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (resumeId) {
          fetchProjects();
        }
      }, [resumeId, shouldRefreshProjectData]);
  
      // Project 테이블 조회
      const fetchProjects = async () => {
          try {
          const response = await axios.get(`/api/resumes/${resumeId}/projects`);
          setProjects(response.data);
          } catch (error) {
          console.error('Error fetching projects:', error);
          }
      };

    // Project 테이블 삭제
    const handleDeleteProject = async (id) => {
        try {
            await axios.delete(`/api/resumes/${resumeId}/projects/${id}`);
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div>
            <h3>PROJECT 조회</h3>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <div key={project.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
                            <div>
                                <strong>프로젝트명:</strong> {project.title}
                            </div>
                            <div>
                                <strong>부연설명:</strong> {project.content}
                            </div>
                            <div>
                                <strong>프로젝트기간:</strong> {project.period}
                            </div>
                            <div>
                                <strong>진행상태:</strong> {project.current ? "진행중" : "완료"}
                            </div>
                            <strong>id:</strong> &nbsp; {project.id} &nbsp;&nbsp;&nbsp;
                            <button onClick={() => handleDeleteProject(project.id)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectData;
