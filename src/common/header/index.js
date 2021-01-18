import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn, SearchWrapper } from './style';

class Header extends Component {

constructor(props) {
  super(props);
  this.state = {
    focused: false
  }
  this.handleInputFocus = this.handleInputFocus.bind(this);
  this.handleInputBlur = this.handleInputBlur.bind(this)
}

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused': ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>               
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont': 'iconfont'}>&#xe6b7;</span>
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

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;