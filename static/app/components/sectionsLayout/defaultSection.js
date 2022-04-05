/** @returns {Schema} */
export default (options) => ({
  tag: 'section',
  attrs: {
  },
  styles: {
    border: '2px solid rgb(203 166 39)',
    margin: '2px 2px 2px 2px',
    height: options.height || '100%',
  },
  hooks: {
  },
  children: [],
});
