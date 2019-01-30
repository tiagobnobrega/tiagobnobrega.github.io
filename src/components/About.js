import React from 'react';

const getAge = (birthdayStr = '') => {
  const [year, month, day] = birthdayStr.split('-');
  const birthday = new Date(year, month + 1, day);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default ({ birthday, citizenship, address, phones, email, job, title, paragraphs, donwloadUrl, contactUrl }) => (
  <div className="section about" id="about-section">
    <div className="content-box">
      <div className="row">
        <div className="col col-m-12 col-t-5 col-d-5">
          <div className="info-list">
            <ul>
              <li>
                <strong>
                  <span>Age:</span>
                </strong>{' '}
                {`${getAge(birthday)} Years`}
              </li>
              <li>
                <strong>
                  <span>Job:</span>
                </strong>{' '}
                {job}
              </li>
              <li>
                <strong>
                  <span>Citizenship:</span>
                </strong>{' '}
                {citizenship}
              </li>
              <li>
                <strong>
                  <span>Address:</span>
                </strong>{' '}
                {address}
              </li>
              <li>
                <strong>
                  <span>Phone:</span>
                </strong>{' '}
                {phones.map(phone => (
                  <React.Fragment key={phone}>
                    <a href={`tel:${phone.replace(/[0-9\s()\-+]/g, '')}`}>{phone}</a>
                    <br />
                  </React.Fragment>
                ))}
              </li>
              <li>
                <strong>
                  <span>E-mail:</span>
                </strong>{' '}
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-m-12 col-t-7 col-d-7">
          <div className="text-box">
            <p>
              <strong>{title}</strong>
            </p>
            {paragraphs.map((paragraph, ind) => (
              <p key={`about-${ind}`}>{paragraph}</p>
            ))}
          </div>
          <div className="bts">
            <a href="#" className="btn btn_animated">
              <span className="circle">Download CV</span>
            </a>
            <a href="#" className="btn extra contact-btn btn_animated">
              <span className="circle">Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
