import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

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
          Nombre
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
            </Menu>
        )
    }
}