export const authentification = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.authdata) {
    return { Authorization: `Basic ${user.authdata}` };
  }
  return {};
};
