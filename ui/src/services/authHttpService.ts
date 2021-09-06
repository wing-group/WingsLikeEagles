import http from './http';

// public functions
export default {
  getLoginStatus,
};

async function getLoginStatus(): Promise<boolean> {
  const resp = await http.get('/logged_in');
  if (resp && resp.data && resp.data.body) return resp.data.body.logged_in;
  return false;
}
