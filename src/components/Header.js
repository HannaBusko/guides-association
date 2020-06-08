import React, { Component, Fragment, useState } from 'react';
import { Image, Radio, Segment,Menu } from 'semantic-ui-react';
import logo from '../assets/images/logo.svg';

import MenuItems from './MenuItems';

import VerticalMenuBlock from './VericalMenu';
import BurgerButton from './Burger';

class HeaderDividing extends Component {
  constructor() {
    super();
    this.state = {
      isPositionVertical: (window.innerWidth <= 767) ? true : false
    };
    this.updateMenuType = this.updateMenuType.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateMenuType);
  }
  updateMenuType() {
    this.setState({
      isPositionVertical: (window.innerWidth <= 767) ? true : false
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMenuType);
  }
  render() {
    const isPositionVertical = this.state.isPositionVertical;
    return (
      <Fragment>
        {isPositionVertical ?
          <VerticalMenu />
          :
          <HorizontalMenu />
        }
      </Fragment>
    )
  }
}


const VerticalMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
      <div className="header">
        <div className="header-flex-row">
          <BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <Image verticalAlign='middle' src={logo} alt="Белорусское общество экскурсоводов и гидов-переводчиков" className="logo" />
        <Segment className="header-segment" compact>
          <span>Ru</span>
          <Radio toggle />
          <span>En</span>
        </Segment>
      </div>
      <VerticalMenuBlock menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </Fragment>
  );
}

const HorizontalMenu = () => {
  return (
    <div className="header">
      <Image verticalAlign='middle' src={logo} alt="Белорусское общество экскурсоводов и гидов-переводчиков" className="logo" />
      <div className="header-flex-row">
        <Menu className="main-menu" secondary inverted>
          <MenuItems />
        </Menu>
      </div>
      <Segment className="header-segment" compact>
        <span>Ru</span>
        <Radio toggle />
        <span>En</span>
      </Segment>
    </div>
  );
}
export default HeaderDividing;