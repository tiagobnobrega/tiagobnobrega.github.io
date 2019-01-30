import React from 'react';

const ServiceRow = (row, ind) => (
  <div key={`skill-row-${ind}`} className="row">
    {row.map((service, idx) => (
      <div key={`${service.title}-${idx}`} className="col col-m-12 col-t-6 col-d-6">
        <div className="content-box animated">
          <div className="i_title">
            <div className="icon">
              <i className={service.iconClass} />
            </div>
            <div className="name">{service.title}</div>
          </div>
          <p>{service.abstract}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ({ services = [], id }) => {
  if (services.length === 0) return null;
  const servicesClone = [...services];
  let pair = servicesClone.splice(-2);
  const rows = [];
  while (pair.length > 1) {
    rows.push(pair);
    pair = servicesClone.splice(-2);
  }
  if (pair.length > 0) rows.push(pair);
  return (
    <div className="section service" id={id}>
      <div className="title">Services</div>
      {rows.map(ServiceRow)}
    </div>
  );
};
