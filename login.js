function logfunction(){
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    if (name=="abc" && password=='123'){
        alert("You can now start your Quiz !")
        window.location.assign("topics.html")
    }
    else{
        alert("Invalid credentials !")
    }
    }

function signupfunction(){
    alert("You can start your Quiz !")
    window.location.assign("quiz2.html")
}


function startfunction1(){
    alert("You will get 15 Seconds for every question! Quiz will start as soon as you click on OK")
    window.location.assign("quiz2.html")
}


