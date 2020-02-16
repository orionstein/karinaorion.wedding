import { h } from 'react-hyperscript-helpers';
export const hyper = (component) => (...args) => h(component, ...args)
