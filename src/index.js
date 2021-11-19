import Toast from './notifications/Toast.vue';
import Dialog from './notifications/Dialog.vue';

// const install = (Vue, options) => {
// 	if (install.installed) return;
//   install.installed = true;
  
//   Vue.component('Toast', Toast);
// }

// Object.assign(Toast, {install: install})

// let GlobalVue = null;
// if (typeof window !== 'undefined') {
// 	GlobalVue = window.Vue;
// } else if (typeof global !== 'undefined') {
// 	GlobalVue = global.Vue;
// }
// if (GlobalVue) {
// 	GlobalVue.use(Toast);
// }
export default {
  install(Vue) {
    Vue.component('Toast', Toast);
    Vue.component('Dialog', Dialog);
  },
};

export {
	Toast,
  Dialog
}