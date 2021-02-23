import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {
  HomeWrapper,
  HomeMiddle,
  HomeRight,
} from './style';
import washfoot from '../../statics/washfoot.jpg';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeMiddle>
          <img className='banner-img' src={washfoot} />
          <Topic />
          <List />
        </HomeMiddle>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;