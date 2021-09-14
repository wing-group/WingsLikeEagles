import http from './http';
import safety from '../library/safety';
import store from '../store/store';

// public functions
export default {
  getLoginStatus,
  register,
};

async function getLoginStatus(): Promise<boolean> {
  const resp = (await http.get('/current_user')) as Record<string, unknown>;
  // if (resp && resp.data && resp.data.body) return resp.data.body.logged_in;
  return safety.get(resp, 'data.body.logged_in', false) as boolean;
}

async function register(
  email: string,
  password: string,
  password_conf: string,
  display_name?: string,
  translation?: string
): Promise<boolean> {
  const resp = (await http.post('/register', {
    user: {
      email: email,
      password: password,
      password_confirmation: password_conf,
      display: display_name,
      default_version: translation,
    },
  })) as Record<string, unknown>;
  // handle response
  const logged_in = safety.get(resp, 'data.body.logged_in', false) as boolean;
  // try and save the user
  if (logged_in) {
    const user = safety.get(resp, 'data.body.user', null) as Record<
      string,
      unknown
    >;
    if (user !== null) {
      store.dispatch('auth/logIn', user);
    }
    // something went wrong...
    // lets be graceful and pretend it failed
    else {
      return false;
    }
  }
  return logged_in;
}
