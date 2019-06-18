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
  let u = document.querySelector('.employee-list')
  let l = document.createElement('li');
  l.appendChild(document.createTextNode(`${retrieveEmployeeInformation()}`))
  u.appendChild(l)
}


function clearEmployeeListOnLinkClick(){
  let list = document.querySelector("a")
  list.addEventListener("click",function(){
    document.querySelector("ul.employee-list").innerHTML = ""
  })
}

function addNewLiOnClick(){
  let submit = document.querySelector("input[type=submit]")
  submit.onclick = addNewElementAsLi()
  document.querySelector("input").value = ""

}