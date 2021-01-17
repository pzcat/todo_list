import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn, SearchWrapper } from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          <SearchWrapper>
            <NavSearch />
            <span className="iconfont">&#xe6b7;</span>
          </SearchWrapper>
          <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
          <NavItem className='right'>Login</NavItem>
        </Nav>
        <Addition>
          <Btn className='writing'>
            <span className="iconfont">&#xe653;&nbsp;</span>
            Write Blog
          </Btn>
          <Btn className='reg'>Register</Btn>
          
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;