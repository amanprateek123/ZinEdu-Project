import React,{useState} from 'react';
import img from '../../../../images/logo.png'
import './Nav1.scss'
import {NavLink} from 'react-router-dom'
import Navres from './Navres'
import {
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  Collapse

} from 'reactstrap';

const Nav1 = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar  light expand="md" className="nav1">
        <NavbarBrand href="/ZinEdu-Project" className="brand">
            <img src={img} alt="pic" className="brand_img"/>
        </NavbarBrand>  
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <Navres openModal={props.openModal}/>
          </Nav>
          <Nav className="mr-auto" navbar>
                <div className='navitem'>
                <NavLink to="/components/" className="zinedu">ZINEDU LIVE</NavLink>
                <NavLink to="/components/" className="mle">MAKING LEARNING EXCITING</NavLink>
                </div>            
          </Nav>
        </Collapse>
          
          <div className="nav_text" onClick={props.openModal}>
            <NavLink to="#" className="nav_subtext">
            LOGIN
            </NavLink>
          </div>   
      </Navbar>
    </div>
  );
}

export default Nav1;

