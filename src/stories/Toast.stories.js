import Toast from '../notifications/Toast.vue';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    color: { control: { type: 'select', options: ['blue-60', 'yellow-20', 'red-20', 'green-20'] } },
    type: { control: { type: 'select', options: ['soft', 'intense'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toast },
  template: '<Toast v-bind="$props" />',
});

export const Info = Template.bind({});
Info.args = {
  color: 'blue-60',
  message: 'This is an info alert',
};

export const Success = Template.bind({});
Success.args = {
  color: 'green-20',
  message: 'This is a success alert',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'yellow-20',
  message: 'This is a warning alert',
};

export const Error = Template.bind({});
Error.args = {
  color: 'red-20',
  message: 'This is an error alert',
};
