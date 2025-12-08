import React from 'react';

const ExperienceItem = ({ exp }) => (
    <div className="mb-8">
        <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-xl font-bold text-slate-700">{exp.title}</h3>
            <span className="text-sm text-gray-500 font-semibold">{exp.period}</span>
        </div>
        <p className="text-gray-600 italic mb-2">{exp.customer || exp.project}</p>

        {exp.description && <p className="text-gray-600 mb-2 text-sm">{exp.description}</p>}

        {exp.responsibilities && exp.responsibilities.length > 0 && (
            <ul className="list-disc list-outside ml-4 text-gray-600 space-y-1 text-sm">
                {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                ))}
            </ul>
        )}

        {exp.technologies && exp.technologies.length > 0 && (
            <p className="text-xs text-gray-400 mt-2">
                <strong>Tech:</strong> {exp.technologies.join(', ')}
            </p>
        )}
    </div>
);

const Experience = ({ experiences }) => {
    return (
        <div>
            {experiences.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
            ))}
        </div>
    );
};

export default Experience;
