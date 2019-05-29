function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  const field = document.querySelector('input');
  return field.value
}


function addNewElementAsLi() {
  let ul = document.querySelector('.employee-list')
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(`${retrieveEmployeeInformation()}`))
  ul.appendChild(li)
}

function addNewLiOnClick() {
  document.querySelector('form #button').addEventListener('click', function() {
    addNewElementAsLi()
    document.getElementById('test').value = ''
  });
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('.employee-list').innerHTML = ''
  })
}