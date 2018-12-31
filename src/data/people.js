import colors from './playlist-colors.json';
import metadata from './playlist-metadata.json';
import * as deepmerge from 'deepmerge';

export default deepmerge(
  colors,
  metadata
);
