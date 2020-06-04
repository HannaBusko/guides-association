import React, { Component } from 'react';
import { Image, Menu, Grid, Dropdown,Radio } from 'semantic-ui-react';
import logo from '../assets/images/bag-with-text.png';
import { Link } from 'react-router-dom';


export default class HeaderDividing extends Component {
  state = { activeItem: window.location.hash.substr(1) }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Grid stackable columns='equal' className="header-grid" id="header">
          <Grid.Column floated='left' width={4} >
            <Image size='medium' verticalAlign='middle' src={logo} alt="Белорусское общество экскурсоводов и гидов-переводчиков" />
          </Grid.Column>
          <Grid.Column floated='right' className="header-grid-row">
            <Menu className="main-menu" widths={5} stackable secondary inverted>
              <Menu.Item
                as={Link} to='/'
                name='главная'
                active={activeItem === '/' || activeItem === 'home'}
                onClick={this.handleItemClick} />
              <Dropdown item text='Общество'>
                <Dropdown.Menu>
                  <Dropdown.Item text='О нас' as={Link} to='/association' 
                    active={activeItem === '/association' || activeItem === 'association'}
                    onClick={this.handleItemClick} />
                  <Dropdown.Item text='Руководство' as={Link} to='/team' 
                    active={activeItem === '/team' || activeItem === 'team'}
                    onClick={this.handleItemClick} />
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text='Участники'>
                <Dropdown.Menu>
                  <Dropdown.Item text='Гиды-переводчики' as={Link} to='/guide-list' name="guide-list"
                    active={activeItem === '/guide-list' || activeItem === 'guide-list'}
                    onClick={this.handleItemClick} />
                  <Dropdown.Item text='Экскурсоводы' as={Link} to='/tour-guide-list' name="tour-guide-list"
                    active={activeItem === '/tour-guide-list' || activeItem === 'tour-guide-list'}
                    onClick={this.handleItemClick} />
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item
                as={Link} to='/contact'
                name='контакты'
                active={activeItem === '/contact' || activeItem === 'contact'}
                onClick={this.handleItemClick}
              />
              <Radio toggle label='Ru'/>
            </Menu>
          </Grid.Column>
        </Grid>

    )
  }
}


