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
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</span>
              switch
            </SearchInfoSwitch>
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
    const { focused, handleInputFocus, handleInputBlur, searchInfoList } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(searchInfoList)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6b7;</span>
            {this.showSearchInfoBox(focused)}
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
    handleInputFocus(list) {
      console.log(list);
      (list.size === 0) && dispatch(actionCreators.getList());
      const action = actionCreators.searchFocus();
      dispatch(action);
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
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);           // change into decimal
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1));
      }else {
        dispatch(actionCreators.changePage(0));
      }
    }    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);