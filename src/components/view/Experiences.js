import React from 'react';
import Timeline from './Timeline';

export default ({ experiences, id }) => (
  <Timeline items={experiences} title="Experience" id={id} className="experience" iconClass="icon ion ion-ios-briefcase" />
);
