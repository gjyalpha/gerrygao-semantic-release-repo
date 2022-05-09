export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop. Now I am a new major version');
  }
  return a + b;
};
