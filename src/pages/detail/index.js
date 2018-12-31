import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/grid';
import Vinyl from '../../components/vinyl';
import styles from './styles.module.css';

class DetailPage extends React.Component {
  static propTypes = {
    vinylColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
  }

  render() {
    const { vinylColors, name } = this.props;
    return (
      <Grid>
        <div className={styles.albumCover}>
          <Vinyl colors={vinylColors} />
        </div>
        <div>
          {name}
        </div>
      </Grid>
    )
  }
}

export default DetailPage;
