import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Btn, SearchWrapper } from './style';


const Header = (props) => {
  return(
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left'>Home</NavItem>
        <NavItem className='left'>Download</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused': ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>               
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe6b7;</span>
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
  );

}

const mapStateToProps = (state) => {
  return {
    focused: state.focused       // reflect data in state to props of current component
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);