import { atom } from 'recoil';

const user = { username: ''};

export const authInfo = atom({
    key: 'login', // unique ID (with respect to other atoms/selectors)
    default: user, // default value (aka initial value)
});