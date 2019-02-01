import React from 'react';

export const MainStarted = ({ title, subtitle }) => (
  <React.Fragment>
    <header className="title">
      <h1>{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </header>
  </React.Fragment>
);

export const SidebarStarted = ({ email, social, site }) => (
  <React.Fragment>
    {email && (
      <li>
        <i className="fa fa-envelope" />
        &nbsp;{email}
      </li>
    )}
    {site && (
      <li>
        <i className="fa fa-globe" />
        &nbsp;{site}
      </li>
    )}
    {social &&
      social.map(soc => (
        <li>
          <i className={soc.iconClass} />
          &nbsp;{soc.printed}
        </li>
      ))}
  </React.Fragment>
);
