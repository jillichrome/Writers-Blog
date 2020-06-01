export const findUser = (params, credentials) => {
  return fetch('/home/' + params._id, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + credentials.t
    }
  }).then(response => {
    return response.json();
  }).catch(error => console.log(error));
};

export const deleteUser = (params, credentials) => {
  return fetch('/home/' + params._id, {
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
    method: 'GET'
  }).then(response => response.json())
  .catch(error => console.log(error));
}
