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
  return superagent.post(`${__API_URL__}/profiles`)
  .set('Authorization', `Bearer ${auth}`)
  .field('bio', profile.bio)
  .attach('avatar', profile.avatar)
  .then(res => {
    dispatch(profileCreate(res.body));
    return res;
  })
}

export const userProfileUpdateRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState()
  return superagent.put(`${__API_URL__}/profiles/${profile._id}`)
  .set('Authorization'), `Bearer ${auth}`)
  .field('bio', profile.bio)
  .attach('avatar', profile.avatar)
  .then(res => {
    dispatch(userProfileCreate(res.body));
    return res;
  })
}

export const userProfileFetchRequest = () => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.get(`${__API_URL__}/profiles/user`)
  .set('Authorization', `Bearer ${auth}`)
  .then(res => {
    dispatch(userProfileCreate(res.body))
    return res; 
  })
}
