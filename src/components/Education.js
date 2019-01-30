import React from 'react';
import Timeline from './Timeline';

export default ({ educations, id }) => (
  <Timeline
    items={educations}
    title="Education"
    id={id}
    className="education"
    iconClass="icon ion ion-university"
  />
);
