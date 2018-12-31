import React from 'react';
import styles from './styles.module.css';

const Vinyl = ({colors}) => {
  return (
    <div className={styles.spin} style={{
      '--palette-1': colors[0],
      '--palette-2': colors[1],
      '--palette-3': colors[2],
      '--palette-4': colors[3],
    }}></div>
  )
}

export default Vinyl;
