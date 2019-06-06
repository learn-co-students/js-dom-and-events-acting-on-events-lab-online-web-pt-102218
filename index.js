function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

var input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return input.value 
}


function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation()
  let employeeul = document.querySelector('.employee-list'); 
  let li = document.createElement("li")
  li.innerHTML = employeeName
  employeeul.appendChild(li)
  
} 
function resetInput(){
  document.querySelector('input').value = ''
} 

function addNewLiOnClick() { 
  return document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
   addNewElementAsLi()
    resetInput();
  });
}
function clearEmployeeListOnLinkClick() {
  return document.querySelector('a').addEventListener('click', function(e) { let employeeul = document.querySelector('.employee-list'); 
  employeeul.innerHTML = "" } )
}
