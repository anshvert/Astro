import React from "react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar: React.FC<{}> = ({}) => {
    return (
        <>
            <Sidebar>
                <Menu>
                    <SubMenu label="System Design">
                    <MenuItem> New </MenuItem>
                    <MenuItem> Popular </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}
export default SideBar