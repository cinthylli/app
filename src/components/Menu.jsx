import React, { Component } from 'react'
import { Icon, Menu, Dropdown } from 'semantic-ui-react'

export default class MenuExampleLabeledIcons extends Component {
    state = { activeItem: 'gamepad' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu icon='labeled'>
                <Menu.Item
                    name='male'
                    active={activeItem === 'male'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='male' />
          Nombre Largo Apellido
        </Menu.Item>

                <Menu.Item
                    name='money bill alternate outline'
                    active={activeItem === 'money bill alternate outline'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='money bill alternate outline' />
          Monedas
        </Menu.Item>

                <Menu.Item
                    name='list'
                    active={activeItem === 'list'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='list' />
          Historico
        </Menu.Item>
                <Menu.Item
                    name='shopping cart'
                    active={activeItem === 'shopping cart'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='shopping cart' />
          Productos
        </Menu.Item>
        <Menu.Item>
              <Dropdown
                clearable
                floating
                item
                selection
                placeholder='Category'
                value={this.state.category}
                options={[
                  { key: 1, text: 'Phones', value: 1 },
                  { key: 2, text: 'Gaming', value: 2 },
                  { key: 3, text: 'Laptops', value: 3 },
                  { key: 4, text: 'Cameras', value: 4 },
                  { key: 5, text: 'Monitors & TV', value: 5 },
                  { key: 6, text: 'Audio', value: 6 },
                  { key: 7, text: 'Drones', value: 7 },
                  { key: 8, text: 'PC Accessories', value: 8 },
                  { key: 9, text: 'Smart Home', value: 9 },
                  { key: 10, text: 'Tablets & E-readers', value: 10 },
                ]}
                onChange={this.handleClickCategory}
              >
              </Dropdown>
            </Menu.Item>        
            </Menu>
        )
    }
}