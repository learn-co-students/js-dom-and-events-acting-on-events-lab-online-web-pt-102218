function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
document.read
preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
    return document.querySelector("input").value
}

function addNewElementAsLi(){
    let element = document.createElement("li")
    element.innerHTML = retrieveEmployeeInformation()
    let ul = document.querySelector("ul.employee-list")
    ul.appendChild(element)
}

function addNewLiOnClick(){
    let submitButton = document.querySelector("input[type=submit]")
    submitButton.onclick = addNewElementAsLi()
    document.querySelector("input").value = ""
}

function clearEmployeeListOnLinkClick(){
    let clearList = document.querySelector("a")
    clearList.addEventListener("click", function(){
      let ul = document.querySelector("ul.employee-list")
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
    });
}