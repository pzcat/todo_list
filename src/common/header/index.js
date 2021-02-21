import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Btn,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoBox } from './style';
import { actionCreators } from './store';


class Header extends Component {
  showSearchInfoBox() {
    const { focused, searchInfoList, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const jsList = searchInfoList.toJS();            // Turn immutable js obj to normal list
    const pageList = [];
    if (jsList.length) {
      for (let i = page * 6; i < (page + 1) * 6; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            hot spot
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>switch</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoBox>
           {pageList}
          </SearchInfoBox>
        </SearchInfo>
      )
    }else {
      return null;
    }
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
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6b7;</span>
            {this.showSearchInfoBox(this.props.focused)}
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


}


const mapStateToProps = (state) => {
  return {
    // can also be focused: state.getIn(['header', 'focused'])
    focused: state.get('header').get('focused'),       // reflect data in state to this.props of current component
    searchInfoList: state.getIn(['header', 'searchInfoList']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action);
      dispatch(actionCreators.getList())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1));
      }else {
        dispatch(actionCreators.changePage(0));
      }
    }    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);