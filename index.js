// document(referencia a documento actual).getEkementBy(referencia a elemento especifico).innerText(valor del texto)
// Aqui modifico el valor interno del texto de ese elemento "count-el"
    //document.getElementById("count-el").innerText = 5

//Increment
let countButton = document.getElementById("count-el")
let count = 0
function increment(){
    count += 1
    countButton.innerText = count
}

//Save
let prevCount = 0
function save(){
    if (document.getElementById("show-old-count").innerText == "Previous entries:"){
        document.getElementById("show-old-count").innerText += " " + count
        prevCount = count
    }else if (count == prevCount) {

    }else{
        document.getElementById("show-old-count").innerText += ", " + count
        prevCount = count
    }
    count = 0
    countButton.innerText = count
}

