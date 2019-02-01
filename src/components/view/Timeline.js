import React from 'react';

export default ({ items, className, id, title, iconClass }) => (
  <div className={`section ${className}`} id={id}>
    <div className="title">
      {title}
      <span className="circle">
        <i className={`icon ion ${iconClass}`} />
      </span>
    </div>
    <div className="cd-timeline">
      {items.map((item, ind) => (
        <div key={`${item.title}-${ind}`} className="cd-timeline-block animated">
          <div className="cd-timeline-point">
            <i className="icon ion ion-ios-checkmark-empty" />
          </div>
          <div className="cd-timeline-content">
            <div className="content-box">
              <div className="date">{item.label}</div>
              <div className="name">{item.title}</div>
              <div className="category">{item.subtitle}</div>
              {item.paragraphs.map && item.paragraphs.map((p, idx) => (
                <p key={`${id}-${idx}`}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
