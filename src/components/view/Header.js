import React from 'react';

export default class Header extends React.Component {
  state = {
    isActive: false,
    isFixed: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const shouldBeFixed = window.scrollY > 100;
    const { isFixed } = this.state;
    if (shouldBeFixed && !isFixed) {
      this.setState({ isFixed: true });
    }
    if (!shouldBeFixed && isFixed) {
      this.setState({ isFixed: false });
    }
  };

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const { links } = this.props;
    const { isActive, isFixed } = this.state;

    return (
      <header>
        <div className={`top-menu ${isActive && 'active'} ${isFixed && 'fixed'}`}>
          <ul>
            {links.map(l => (
              <li key={l.href} className={l.isActive || ''}>
                <a className="btn_animated" href={`#${l.href}`}>
                  <span className="circle">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a className="menu-btn" onClick={this.handleClick}>
            <span />
          </a>
        </div>
      </header>
    );
  }
}
