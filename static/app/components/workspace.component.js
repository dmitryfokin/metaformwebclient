import {setAdapterMethods} from '../../lib/formManager/adapterToSwayer.js';

/** @returns {Schema} */
export default () => ({
  tag: 'section',
  attrs: {
    id: 'workspace',
  },
  styles: {
    //border: '1px solid #009933',
    border: '2px solid #666699',
    //height: 'calc(100vh - 140px)',
    height: 'calc(100vh - 60px)',
    margin: '0 12px',
    padding: '5px',
    borderRadius: '10px',
  },
  children: [],
  methods: {
    async showForm(formDefinition) {
      formDefinition.webWorkspaceComponent = this;
      const formComponent = { 
        path: './formddl/form.component.js',
        base: import.meta.url, 
        args: {
          formDefinition: formDefinition,
        },
      };
      await this.children.splice(0, 1, formComponent);
    },
    async closeForm() {
      await this.children.splice(0, 1);
    },
  },
  hooks: {
    init() {
      setAdapterMethods({
        showForm: this.methods.showForm,
        closeForm: this.methods.closeForm,
      });
    },
  },
});
