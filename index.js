function preventRefreshOnSubmit() {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })
}

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const employeeList = document.querySelector('.employee-list')
  employeeList.innerHTML = employeeList.innerHTML + `<li>${retrieveEmployeeInformation()}</li>`
}

function addNewLiOnClick() {
  addNewElementAsLi()
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', () => {
    document.getElementsByClassName('employee-list')[0].innerHTML = ''
  })
}

preventRefreshOnSubmit()
