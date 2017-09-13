import superagent from 'superagent';

export const profileCreate = (profile) => ({
  type: 'PROFILE_CREATE',
  payload: profile
})

export const profileUpdate = (profile) => ({
  type: 'PROFILE_UPDATE',
  payload: profile
})

export const profileCreateRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/profile`)
  .set('Authorization', `Bearer ${auth}`)
  .field('bio', profile.bio)
  .attach( res => {
    dispatch(dispatchCreate(res.body));
    return res;
  })
}