import React from 'react';
import Retro from './Retro';
import Ritos from './Ritos';
import OneOnOne from './OneOnOne';
import { BasePage } from './BasePage';

const pages = [
  'Ritos',
  '1-1',
  'Ritos',
  'Retrospectiva',
  'Ritos',
];

class Slideshow extends React.Component {
  state = {
    page: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        page: this.state.page + 1
      });
    }, 15 * 1000);
  }
  render() {
    return (
      <div>
        <BasePage PageName={pages[this.state.page % 4]} InnerComponent={this.getPage()} />
      </div>
    );
  }

  getPage() {
    switch (pages[this.state.page % 4]) {
      case 'Retrospectiva':
        return <Retro />;
      case 'Ritos':
        return <Ritos />;
      case '1-1':
        return <OneOnOne />;

      default:
        return;
    }
  }
}

export default Slideshow;