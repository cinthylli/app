import React, { useState, useEffect } from 'react'
import { Icon, Menu, Dropdown } from 'semantic-ui-react'
import { optionAddCoins, optionsCategory } from '../constants/menuConstants'
import { addPoints } from '../helpers/addPoints';
import useFetchUser from '../hooks/useFetchUser';


export const MenuExampleSecondary = (props) => {

    const { data: user } = useFetchUser(props.points);
    const { name, points: userPoints } = user;
    useEffect(() => {
        props.setPoints(userPoints);
    }, [userPoints])


    const handlePoints = async (e, { value }) => {

        let pointsset = await addPoints({ pts: value });
        props.setPoints(pointsset);
    }

    const handleCategory = (e, { value }) => {
        props.setCategory(optionsCategory[value - 1]?.text);
    }

    return (<>

        <Menu inverted color="teal" icon="labeled">
            <Menu.Item
                name='male'
            >
                <Icon name='male' />
                {name}
            </Menu.Item>
            <Menu.Item
                name='money bill alternate outline'
            >
                <Icon name='money bill alternate outline' />
                {props.points}
            </Menu.Item>

            <Menu.Item>
                <Dropdown
                    clearable
                    floating
                    item
                    selection
                    placeholder='Add Points'
                    value={props.points}
                    options={optionAddCoins}
                    onChange={handlePoints}
                >
                </Dropdown>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item position="right">
                    <Dropdown
                        clearable
                        floating
                        item
                        selection
                        placeholder='Category'
                        value={props.category}
                        options={optionsCategory}
                        onChange={handleCategory}
                    >
                    </Dropdown>
                </Menu.Item>
                <Menu.Item
                    name='list'
                    onClick={()=>{console.log("list");}}
                >
                    <Icon name='list' />
          Historico
        </Menu.Item>
                <Menu.Item
                    name='shopping cart'
                    onClick={()=>{console.log("shop");}}
                >
                    <Icon name='shopping cart' />
                    
          Productos
        </Menu.Item>

            </Menu.Menu>
        </Menu>
    </>
    )
}
export default MenuExampleSecondary;