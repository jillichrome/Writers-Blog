export const deleteUser = (params, credentials) => {
  return fetch('/home/' + params.id, {
    method:'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then(response => {return response.json()})
  .catch(error => console.log(error));
}

export const signoutUser = () => {
  return fetch('/signout', {
    method: 'POST',
    credentials: 'same-origin'
  }).then(response => console.log())
  .catch(error => console.log(error));
}
