export const rand = () => Math.random().toString(16).slice(2);
const token = () => rand() + rand() + rand();

export const hash = () => 't_' + token().slice(0, -9);
