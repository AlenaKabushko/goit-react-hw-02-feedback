import styled from 'styled-components';
import {
  flexbox,
  background,
  border,
  color,
  grid,
  layout,
  shadow,
  space,
  typography,
} from 'styled-system';

const Box = styled('div')(
  flexbox,
  background,
  border,
  color,
  grid,
  layout,
  shadow,
  space,
  typography
);

export default Box;
