import Dialog from '../notifications/Dialog.vue';

export default {
  title: 'Explorer/Dialog',
  component: Dialog,
  argTypes: {
    type: { control: { type: 'select', options: ['informative', 'success', 'alert'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Dialog },
  template: '<Dialog v-bind="$props" />',
});

export const Informative = Template.bind({});
Informative.args = {
  type: 'informative',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'alert',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

