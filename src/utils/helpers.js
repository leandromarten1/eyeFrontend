export function getToken() {
  const {
    data: { token },
  } = JSON.parse(localStorage.getItem('userToken'));

  return token;
};

