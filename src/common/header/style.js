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
  .zoom {
    position: absolute;
    right: 16px;
    bottom: 9px;
    width: 38px;
    height: 38px;
    line-height: 38px;
    border-radius: 19px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
    .slide-enter {
      transition: all .2s ease-out;
    }
    .slide-enter-active {
      width: 240px;                 // status entered
    }
    .slide-exit {
      transition: all .2s ease-out;
    }
    .slide-exit-active {
      width: 160px;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'search'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;          // clockwise
  margin: 9px 15px;
  box-sizing: border-box;          // kill influence of padding to width
  border: None;
  outline: None;  
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20xp;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;      // to rotate
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const SearchInfoBox = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #333;
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

