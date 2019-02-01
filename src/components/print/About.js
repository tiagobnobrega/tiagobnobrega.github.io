import React from 'react';

export const MainAbout = ({ subtitle, title, paragraphs }) => (
  <React.Fragment>
    <h2>
      <i className="fa fa-user-circle" /> About Me
    </h2>
    <section className="blocks">
      <div className="tl-tag">
        <span>&nbsp;</span>
      </div>
      <div className="separator" />
      <div className="details about">
        <div>{paragraphs && paragraphs.map((paragraph, ind) => <p key={`print-about-${ind}`}>{paragraph}</p>)}</div>
      </div>
    </section>
  </React.Fragment>
);

export const SidebarAbout = ({ phones }) => (
  <React.Fragment>
    {phones.map(phone => (
      <li>
        <i className="fa fa-phone" />
        &nbsp;{phone}
      </li>
    ))}
  </React.Fragment>
);
