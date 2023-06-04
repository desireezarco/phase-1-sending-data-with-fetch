const data = {
    name: "Steve",
    email: "steve@steve.com"
}

const configurationObject = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
   },
    body: JSON.stringify(data)
}

function submitData(user, email) {
  return fetch(`http://localhost:3000/users`, configurationObject) 
    .then(res => res.json())
    .then((data) => renderId(data))
    .catch((error) => renderError(error))
}

function renderId(data){
    const div = document.createElement('div')
    div.textContent = data.id
    document.querySelector('body').append(div)
}

function renderError(error){
    const div = document.createElement('div')
    div.textContent = error.message
    document.querySelector('body').append(div)
}
