console.time('Bootstrap');

export default () => ({
  tag: 'html',
  styles: {
    fontFamily: 'Helvetica',
  },
  attrs: {
    lang: 'en',
  },
  hooks: {
    init() {
      //console.timeEnd('Bootstrap | index hook init()');
    },
  },
  children: [
    { path: './head', base: import.meta.url },
    {
      tag: 'body',
      styles: {
        margin: 0,
        'background-color': '#000 !important',
      },
      hooks: {
        async init() {
          console.log('Body init');

          // const registerFormData = await patientService.getRegisterFormData();
          // const registerForm = createForm(registerFormData);
          // this.children.push(registerForm, addFormButton, removeFormButton);
        },
        async effect() {
          console.log('Body effect');
          //import 'console.js'; 
        },
      },
      children: [
        {
          tag: 'section',
          attrs: {
            id: 'main',
            styles: {
              'background-color': '#000 !important',
            },
          },
          children: [
            {
              path: '../components/panelColors.js',
              base: import.meta.url,
            },
            {
              path: './leyoutApplicaton.js',
              base: import.meta.url,
            },
          ],
        },
      ],
    },
  ],
});
