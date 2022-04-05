console.time('Bootstrap');

export default () => ({
  tag: 'html',
  styles: {
    fontFamily: 'Helvetica',
  },
  attrs: {
    lang: 'en',
  },
  children: [
    { path: './head2', base: import.meta.url },
    {
      tag: 'body',
      children: [
        {
          tag: 'div',
          text: 'WORK блин',
        },
      ],
    },
  ],
});
