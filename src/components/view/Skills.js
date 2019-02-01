import React from 'react';

const SkillItem = ({ title, value, key }) => (
  <li key={key}>
    <div className="name">{title}</div>
    <div className="progress">
      <div className="percentage" style={{ width: `${value}%` }}>
        <span className="percent">
          <i className="icon ion ion-ios-checkmark-empty" />
        </span>
      </div>
    </div>
  </li>
);

const SkillRow = (row, ind) => (
  <div key={`skill-row-${ind}`} className="row skill-row">
    {row.map((skill, idx) => (
      <div key={`skill-row-${ind}-${idx}`} className="col col-m-12 col-t-6 col-d-6">
        <div className="content-box animated">
          <div className="i_title">
            <div className="icon">
              <i className={skill.iconClass} />
            </div>
            <div className="name">{skill.categoryName}</div>
          </div>
          <div className="skills">
            <ul>{skill.items.map(it => SkillItem({ ...it, key: `${skill.categoryName}-${it.title}` }))}</ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ({ skills = [], id }) => {
  if (skills.length === 0) return null;
  const skillsClone = [...skills];
  skillsClone.reverse();
  let pair = skillsClone.splice(-2);
  const rows = [];
  while (pair.length > 1) {
    pair.reverse();
    rows.push(pair);
    pair = skillsClone.splice(-2);
  }
  if (pair.length > 0) rows.push(pair);

  return (
    <div className="section skills" id={id}>
      <div className="title">Skills</div>
      {rows.map(SkillRow)}
    </div>
  );
};
