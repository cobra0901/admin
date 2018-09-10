import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,NavItem,Nav} from 'react-bootstrap'
import './header.css'

export class NavClass extends React.Component {
    render() {
        return (

            <Navbar>
                <Nav>
                    <NavItem>Analysis</NavItem>
                    <NavItem>Setting</NavItem>
                    <NavItem>Help</NavItem>
                    <NavItem>
                        <Link to={'/home'}>Home</Link>
                    </NavItem>
                </Nav>
            </Navbar>
    )
        ;
    }
}
