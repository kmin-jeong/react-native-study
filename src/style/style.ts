/* eslint-disable prettier/prettier */
const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  orange: '#FF8F50',
  green: '#57BB73',
  blue: '#5061FF',
  purple: '#C750FF',
  pink: '#FF7474',
  gray: '#F5F5F5',
  darkGray: '#888888',
};

export default COLORS;

export type Theme = keyof typeof COLORS;
