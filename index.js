function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const input = document.getElementsByName("name")[0].value;
  return input;
}

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation()
  let ul = document.querySelector('ul')
  let li = document.createElement('li')
  li.innerHTML = name;
  ul.appendChild(li);
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    document.querySelector('.employee-list').innerHTML = ""
  })
}
