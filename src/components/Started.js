import React from 'react';

export default ({ email, title, subtitle, avatarUrl, social }) => (
  <div className="section started">
    <div className="st-box">
      <div className="st-bts">
        <a href={`mailto:${email}`} className="btn_animated">
          <span className="circle">
            <i className="icon ion ion-android-send" />
          </span>
        </a>
      </div>
      <div className="st-image">
        <img src={avatarUrl} alt="" />
      </div>
      <div className="st-title">{title}</div>
      <div className="st-subtitle">{subtitle}</div>
      <div className="st-soc">
        {social.map(soc => (
          <a key={soc.url} target="bank" href={soc.url} className="btn_animated">
            <span className="circle">
              <i className={soc.iconClass} />
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
);
