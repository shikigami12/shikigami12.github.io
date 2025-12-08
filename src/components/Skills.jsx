import React from 'react';

const Skills = ({ skills }) => {
    return (
        <div>
            {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx} className="mb-6">
                    <h4 className="font-bold text-slate-700 mb-2">{category}</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {items.map((skill, sIdx) => (
                            <li key={sIdx}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;
