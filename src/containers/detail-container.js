import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import DetailPage from '../pages/detail';
import peopleData from '../data/people';

const transformColor = (color, opacity) => {
  const rgb = color._rgb;
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

class DetailContainer extends Component {
  render() {
    const { match } = this.props;
    const {params: {name}} = match;
    if (peopleData[name]) {
      const metadata = peopleData[name];
      const vinylColors = metadata.vibrantColors.map(
        (color) => (transformColor(color, 0.8))
      );
      return (
        <DetailPage
          vinylColors={vinylColors}
          name={metadata.humanName} />
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }
  }
}

export default DetailContainer;
