import React from 'react';

export default ({ items, id, title, iconClass }) => (
  <React.Fragment>
    <h2>
      <i className={iconClass} /> {title}
    </h2>
    {items.map((item, ind) => (
      <section key={`${title}-${ind}`} className="blocks">
        <div className="tl-tag">
          <span>{item.label.split('-')[0]}</span>
          {item.label.split('-')[1] && <span>{item.label.split('-')[1]}</span>}
        </div>
        <div className="decorator" />
        <div className="details">
          <header>
            <h3>{item.title}</h3>
            <span className="place">{item.subtitle}</span>
            {item.location && (
              <span className="location">
                <i className="fa fa-globe-americas" />
                &nbsp;{item.location}
              </span>
            )}
          </header>
          <div>
            <ul>{item.paragraphs.map && item.paragraphs.map((p, idx) => <li key={`${id}-${idx}`}>{p}</li>)}</ul>
          </div>
        </div>
      </section>
    ))}
  </React.Fragment>
);
