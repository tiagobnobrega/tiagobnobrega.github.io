import React from 'react';
import './print.scss';
import cvConfig from '../../cv-config';
import { MainAbout, MainStarted, Experiences, Education, Timeline, SidebarAbout, SidebarStarted, SidebarSkills } from '../components/print';
import { SECTION_TYPES as TYPES } from '../constants';

const mainComponents = {
  [TYPES.ABOUT]: MainAbout,
  [TYPES.EXPERIENCE]: Experiences,
  [TYPES.EDUCATION]: Education,
  [TYPES.SKILLS]: null, // placed @ sidebar
  [TYPES.STARTED]: MainStarted,
  // [TYPES.SERVICES]: Services,
  [TYPES.TIMELINE]: Timeline,
};

const sidebarComponents = {
  [TYPES.ABOUT]: SidebarAbout,
  [TYPES.EXPERIENCE]: null,
  [TYPES.EDUCATION]: null,
  [TYPES.SKILLS]: SidebarSkills,
  [TYPES.STARTED]: SidebarStarted,
  // [TYPES.SERVICES]: Services,
  [TYPES.TIMELINE]: null,
};
export default class Print extends React.Component {
  render() {
    return (
      <div className="print">
        <section className="main">
          {cvConfig.map(section => {
            const SectionComponent = mainComponents[section.type] || null;
            return SectionComponent ? (
              <section className="main-block">
                <SectionComponent {...section.props} id={section.id} />
              </section>
            ) : null;
          })}
        </section>

        <aside className="sidebar">
          <div className="side-block contact">
            <h1>Contact Info</h1>

            <ul>
              {cvConfig.map(section => {
                if ([TYPES.STARTED, TYPES.ABOUT].includes(section.type)) {
                  const SectionComponent = sidebarComponents[section.type] || null;
                  return SectionComponent ? <SectionComponent {...section.props} id={section.id} /> : null;
                }
                return null;
              })}
            </ul>
          </div>

          {cvConfig.map(section => {
            if (![TYPES.STARTED, TYPES.ABOUT].includes(section.type)) {
              const SectionComponent = sidebarComponents[section.type] || null;
              return SectionComponent ? <SectionComponent {...section.props} id={section.id} /> : null;
            }
            return null;
          })}

        </aside>
      </div>
    );
  }
}
