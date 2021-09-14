import http from './http';
import safety from '../library/safety';
import store from '../store/store';

// public functions
export default {
  getLoginStatus,
  logIn,
  logOut,
  register,
};

/**
 * sends get request to middleware to check if client is logged_in and get user data
 * @returns [logged_in: boolean, user: object]
 */
async function getLoginStatus(): Promise<[boolean, Record<string, unknown>]> {
  const resp = (await http.get('/current_user')) as Record<string, unknown>;
  const logged_in = safety.get(resp, 'data.body.logged_in', false) as boolean;
  const user = safety.get(resp, 'data.body.user', {}) as Record<
    string,
    unknown
  >;
  return [logged_in, user];
}

/**
 * sends login post request to middleware
 * @param email
 * @param password
 * @returns [logged_in: boolean, user: object]
 */
async function logIn(
  email: string,
  password: string
): Promise<[boolean, Record<string, unknown>]> {
  const resp = await http.post('/login', {
    user: {
      email,
      password,
    },
  });
  const logged_in = safety.get(resp, 'data.body.logged_in', false) as boolean;
  const user = safety.get(resp, 'data.body.user', {}) as Record<
    string,
    unknown
  >;
  return [logged_in, user];
}

/**
 * sends logout delete request to middleware
 * @returns logged_in: boolean
 */
async function logOut(): Promise<boolean> {
  const resp = await http.delete('/logout');
  const logged_in = safety.get(resp, 'data.body.logged_in', false) as boolean;
  return logged_in;
}

/**
 * sends post request to middleware, attempting to create new user
 * @param email
 * @param password
 * @param password_conf
 * @param display_name
 * @param translation
 * @returns boolean if logged_in after
 */
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
