export default () => ({
  tag: 'head',
  children: [
    {
      tag: 'meta',
      attrs: {
        charset: 'utf-8',
      },
    },
    {
      tag: 'title',
      text: 'Metarhia example metaform prototype',
    },
  ],
});
