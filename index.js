function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let employeeList = document.querySelector('ul.employee-list')
  let newEmployee = document.createElement('li')
  newEmployee.innerHTML = retrieveEmployeeInformation()
  employeeList.appendChild(newEmployee)
}

function addNewLiOnClick() {
  const button = document.querySelector('input[type="submit"]')
  button.addEventListener('click', addNewElementAsLi())
  document.querySelector('input').value = ""
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  link.addEventListener('click', function() {
    let employeeList = document.querySelector('ul.employee-list')
    let child = employeeList.firstChild
    while (child) {
      employeeList.removeChild(child)
      child = employeeList.firstChild
    }
  })
}
