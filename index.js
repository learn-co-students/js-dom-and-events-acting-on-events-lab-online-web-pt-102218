function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
 return document.querySelector('input').value
  
}

function addNewElementAsLi() {
  let input = retrieveEmployeeInformation() 
  
  document.querySelector(`.employee-list`).insertAdjacentHTML('beforeend', `<li>${input}</li>`)
}


function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    resetInput()
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}

preventRefreshOnSubmit()
