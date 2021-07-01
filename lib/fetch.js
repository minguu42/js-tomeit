const BASE_URL = 'http://localhost:8080'

export const postData = async (path = '/', data = {}, currentUser) => {
  const idToken = await currentUser.getIdToken(true)
  const response = await window.fetch(BASE_URL + path, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: idToken
    },
    body: JSON.stringify(data)
  })

  return response.json()
}

export const fetchData = async (path = '/', currentUser) => {
  const idToken = await currentUser.getIdToken(true)
  const response = await window.fetch(BASE_URL + path, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: idToken
    }
  })

  return response.json()
}

export const putData = async (path = '/', data = {}, currentUser) => {
  const idToken = await currentUser.getIdToken(true)
  const response = await window.fetch(BASE_URL + path, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: idToken
    },
    body: JSON.stringify(data)
  })

  return response.json()
}
