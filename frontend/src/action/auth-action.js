import superagent from 'superagent';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token
});

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE'
});

export const signupRequest = user => dispatch => {
  console.log('attempting to make this user:', user)
  return superagent.post(`${__API_URL__}/api/signup`)
  .send(user)
  .then(res => {
    dispatch(tokenSet(res.text))
    try{
      localStorage.auth = res.text;
    } catch(err) {
      console.error('auth-action.js', err);
    }
    return res;
  })
}

export const loginRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/api/login`)
  .auth(user.userName, user.passWord)
  .then(res => {
    console.log('res', res.text);
    dispatch(tokenSet(res.text))
    try {
      localStorage.auth = res.text;
    } catch(err) {
      console.error(err);
    }
    return res;
  })
}
