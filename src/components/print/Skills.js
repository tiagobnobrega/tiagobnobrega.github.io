import React from 'react';

export default ({ skills }) => {
  if (!skills) return null;
  return (
    <div className="side-block print-skills">
      <h1>Skills</h1>
      {skills.map(category => (
        <React.Fragment>
          <h2 className="skill-category">{category.categoryName}</h2>
          {category.items.map(it => (
            <li>
              <span className="skill-label">{it.title}</span>
              <span className="skill-value">{(it.value / 10).toFixed(1)}</span>
            </li>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
