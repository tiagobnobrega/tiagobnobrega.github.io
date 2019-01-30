import React from 'react';
import Timeline from './Timeline';

export default ({ educations }) => (
  <Timeline
    items={educations}
    title="Education"
    id="education-section"
    className="education"
    iconClass="icon ion ion-university"
  />
);
