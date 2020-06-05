import React, { Component } from 'react';
import { Image, Menu, Dropdown, Radio, Segment } from 'semantic-ui-react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';


export default class HeaderDividing extends Component {
  state = { activeItem: window.location.hash.substr(1) }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div  className="header">
        
          <Image verticalAlign='middle' src={logo} alt="Белорусское общество экскурсоводов и гидов-переводчиков" className="logo"/>
        <div className="header-flex-row">
          <Menu className="main-menu" stackable secondary inverted>
            <Menu.Item
              as={Link} to='/'
              name='главная'
              active={activeItem === '/' || activeItem === 'home'}
              onClick={this.handleItemClick} />
            <Dropdown item text='О нас'>
              <Dropdown.Menu>
                <Dropdown.Item text='История' as={Link} to='/history'
                  active={activeItem === '/history' || activeItem === 'history'}
                  onClick={this.handleItemClick} />
                <Dropdown.Item text='Устав' as={Link} to='/rules'
                  active={activeItem === '/rules' || activeItem === 'rules'}
                  onClick={this.handleItemClick} />
                <Dropdown.Item text='Руководство' as={Link} to='/team'
                  active={activeItem === '/team' || activeItem === 'team'}
                  onClick={this.handleItemClick} />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Гиды'>
              <Dropdown.Menu>
                <Dropdown.Item text='Общая характеристика' as={Link} to='/guide-main' name="guide-main"
                  active={activeItem === '/guide-main' || activeItem === 'guide-main'}
                  onClick={this.handleItemClick} />
                <Dropdown.Item text='Поиск гида' as={Link} to='/guide-search' name="guide-search"
                  active={activeItem === '/guide-search' || activeItem === 'guide-search'}
                  onClick={this.handleItemClick} />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Подготовка'>
              <Dropdown.Menu>
                <Dropdown.Item text='Аттестация' as={Link} to='/certification' name="certification"
                  active={activeItem === '/certification' || activeItem === 'certification'}
                  onClick={this.handleItemClick} />
                <Dropdown.Item text='Повышение квалификации' as={Link} to='/professional-development' name="professional-development"
                  active={activeItem === '/professional-development' || activeItem === 'professional-development'}
                  onClick={this.handleItemClick} />
                <Dropdown.Item text='Обучающие семинары' as={Link} to='/seminars' name="seminars"
                  active={activeItem === '/seminars' || activeItem === 'seminars'}
                  onClick={this.handleItemClick} />
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
              as={Link} to='/news'
              name='новости'
              active={activeItem === '/news' || activeItem === 'news'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link} to='/contact'
              name='контакты'
              active={activeItem === '/contact' || activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
          <Segment className ="header-segment" compact>
            <span>Ru</span>
            <Radio toggle />
            <span>En</span>
          </Segment>
      </div>

    )
  }
}


