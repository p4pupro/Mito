import { atom } from 'recoil';

export const data = [
    {label: 'Web', value: 'web'}, 
    {label: 'iOS', value: 'ios'}, 
    {label: 'Android', value: 'android'}
  ]; 
  
  export const dataPicker = atom({
    key: 'platforms', // unique ID (with respect to other atoms/selectors)
    default: data[0], // default value (aka initial value)
  });