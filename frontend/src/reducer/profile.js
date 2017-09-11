let validateProfileCreate = (profile) => {
  if (!profile.avatar || !profile.bio || !profile.id || !profile.owner || !profile.username || !profile.email) {
    throw new Error('VALIDTION ERROR: profile requires additional info');
  }
}

export default (state=null, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'PROFILE_CREATE':
      validateProfileCreate(payload);
      return payload
    case 'PROFILE_UPDATE':
      throw new Error('USAGE ERROR: can not update when profile is null')
      validateProfileCreate(payload)
      return {...state, ...payload}
    case 'LOGOUT':
      return null
    default:
      return state
  }
}
