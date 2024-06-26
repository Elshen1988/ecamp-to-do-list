let input = document.querySelector(".input");

let button = document.querySelector(".button");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");

let ul = document.querySelector(".ul");
let ul1 = document.querySelector(".ul1");
let ul2 = document.querySelector(".ul2");
let ul3 = document.querySelector(".ul3");



button.onclick = function () {
    if(input.value==""){
alert("boş göndərməyin")
    }else{
        ul3.style.display = "none"
    ul2.style.display = "none"
    ul1.style.display = "none"
    ul.style.display = "block"

    let check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox")
    let li = document.createElement("li");
    let buttonTag = document.createElement("button")
    buttonTag.textContent = "x"
    li.textContent = input.value;
    li.prepend(check)
    li.append(buttonTag)
    ul.append(li);
    input.value = "";
    check.onclick = function () {
        if (check.checked) {

            li.classList.toggle("styleLi") & ul2.append(li)


        }
        else {
            li.classList.toggle("styleLi")
        }

    }
    buttonTag.onclick = function () {
        ul3.append(li)
        li.style.display = "none"

    }
    button3.onclick = function () {
        li.style.display = "flex"
        ul3.style.display = "block"
        ul2.style.display = "none"
        ul1.style.display = "none"
        ul.style.display = "none"

    }
    button2.onclick = function () {
        ul.style.display = "none"
        ul3.style.display = "none"
        ul2.style.display = "block"
        ul1.style.display = "none"
    }
    button1.onclick = function () {
        ul2.style.display = "none"
        ul1.style.display = "none"
        ul3.innerHTML += ul.innerHTML
        ul3.innerHTML += ul1.innerHTML
        ul3.innerHTML += ul2.innerHTML
        ul3.style.display = "block"
    }
    }
    

}