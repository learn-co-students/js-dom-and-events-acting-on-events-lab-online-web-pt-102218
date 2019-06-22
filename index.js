function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  document.querySelector('ul').innerHTML = `<li>${retrieveEmployeeInformation()}</li>`
}

function addNewLiOnClick() {
  document.addEventListener('click', addNewElementAsLi());
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', (e => document.querySelector('ul').innerHTML = ""));
}