// SkillForm.js

import React, { useState } from 'react';
import axios from 'axios';

function SkillForm({ resumeId, onSubmit }) {
    const [skillTitle, setSkillTitle] = useState('');
    const [skillContent, setSkillContent] = useState('');

    // Skill 테이블 생성 + 새로고침
    const handleSkillSubmit = async () => {
        try {
        await axios.post(`/api/resumes/${resumeId}/skills`, {
            title: skillTitle,
            content: skillContent
        });
        setSkillTitle('');
        setSkillContent('');
        onSubmit();
        } catch (error) {
        console.error('Error submitting skill:', error);
        }
    };

    return (
        <div>
        <h2>SKILL 입력폼</h2>
        <div>
            <label>
            기술명:
            <input type="text" value={skillTitle} onChange={(e) => setSkillTitle(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            부연설명:
            <input type="text" value={skillContent} onChange={(e) => setSkillContent(e.target.value)} />
            </label>
        </div>
        <button onClick={handleSkillSubmit}>Submit</button>
        </div>
    );
}

export default SkillForm;
