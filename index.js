function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  let employee=document.createElement('li')
  employee.innerHTML = retrieveEmployeeInformation()
  document.querySelector('.employee-list').appendChild(employee) 
  document.querySelector('input').value = ''
}

function addNewLiOnClick(){
  document.querySelector('form').addEventListener('submit',addNewElementAsLi)
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener('click',()=>{
    document.querySelector('.employee-list').innerHTML = ''
  })
}

