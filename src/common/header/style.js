import styled from 'styled-components';
import logoPic from '../../statics/logo.jpeg';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({href: '/'})`
  position: absolute;
  height: 52px;
  width: 52px;
  display: block;      // inline element can't set width
  top: 0;
  left: 0;
  background: url(${logoPic});   // url('../../statics/logo.jpeg') is wrong because it treats '../' as a string
  background-size: contain; 
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: auto;
  padding-right: 70px;
  background: white;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  &.left {                       // when item has "left" class attribute, set style...
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  // background: yellow;
  .iconfont {
    position: absolute;
    right: 16px;
    bottom: 9px;
    width: 38px;
    height: 38px;
    line-height: 38px;
    border-radius: 19px;
    text-align: center;
    // background: green;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'search'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin: 9px 15px;
  box-sizing: border-box;          // kill influence of padding to width
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Btn = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;

