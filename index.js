function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}


function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const li = document.createElement('li')

  document.body.querySelector('ul').appendChild(li)

  return li.innerHTML = retrieveEmployeeInformation();
}

function addNewLiOnClick() {
  const submit = document.body.querySelectorAll('input')[1]

  return submit.addEventListener('click', function () {
    addNewElementAsLi()
    
    document.querySelector('input').value = ""
  });
}

function clearEmployeeListOnLinkClick() {
  const clear = document.body.querySelector('a')

  return clear.addEventListener('click', function() {
    document.body.querySelector('ul').innerHTML = ""
  });
}

preventRefreshOnSubmit()