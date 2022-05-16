export function useToken() {
  const token = localStorage.getItem('token');

  return token ? true : false;
}
