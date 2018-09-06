export const remCalc = (base, multiplier) => {
  return (base.split('rem')[0] * multiplier) + 'rem';
};
