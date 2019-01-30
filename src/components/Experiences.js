import React from 'react';
import Timeline from './Timeline';

export default ({ experiences }) => (
  <Timeline
    items={experiences}
    title="Experience"
    id="experience-section"
    className="experience"
    iconClass="icon ion ion-ios-briefcase"
  />
);
