// SkillData.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SkillData({ resumeId, shouldRefreshSkillData }) {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        if (resumeId) {
        fetchSkills();
        }
    }, [resumeId, shouldRefreshSkillData]);

    // Skill 테이블 조회
    const fetchSkills = async () => {
        try {
        const response = await axios.get(`/api/resumes/${resumeId}/skills`);
        setSkills(response.data);
        } catch (error) {
        console.error('Error fetching skills:', error);
        }
    };

    // Skill 테이블 삭제
    const handleDeleteSkill = async (id) => {
        try {
        await axios.delete(`/api/resumes/${resumeId}/skills/${id}`);
        fetchSkills();
        } catch (error) {
        console.error('Error deleting skill:', error);
        }
    };

    return (
        <div>
        <h3>SKILL 조회</h3>
        <ul>
            {skills.map((skill) => (
                <div key={skill.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
                    <li key={skill.id}>
                        <div>
                        <strong>기술명:</strong> {skill.title}
                        </div>
                        <div>
                        <strong>부연설명:</strong> {skill.content}
                        </div>
                        <strong>id:</strong> &nbsp; {skill.id} &nbsp;&nbsp;&nbsp;
                        <button onClick={() => handleDeleteSkill(skill.id)}>X</button>
                    </li>
                </div>
            ))}
        </ul>
        </div>
    );
}

export default SkillData;
