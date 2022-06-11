document.querySelector("#btn").addEventListener("click", function(){
    let request = new XMLHttpRequest() // создание запроса
    // request setup
    request.open('GET', "i.json", false)
    request.send()
    if(request.status == 200){
        console.log(request.responseText)
        document.querySelector("#result").innerHTML=(JSON.parse(request.responseText)).name
    }
})