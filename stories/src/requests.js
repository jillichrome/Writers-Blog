import auth from './components/auth-helper.js';

export async function makeRequest(method, url, data={}) {
  const user = await auth.getUser();
  const headers = {
    //'Access-Control-Allow-Headers': 'Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin',
    //'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    //"Access-Control-Allow-Methods" : "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    'Content-Type': 'application/json; charset=UTF-8',
  }

  if(user){
    headers['Authorization'] = `Bearer ${user.token}`;
  }

  return await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(data),
    withCredentials: true,
    credentials: 'include'
  })
}
