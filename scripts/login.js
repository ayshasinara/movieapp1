document.querySelector("form").addEventListener("submit",login);
var regnm=JSON.parse(localStorage.getItem("studentDatas"));
var count=0;
function login(event){
    event.preventDefault();
    var email=document.getElementById("eml").value;
    var password=document.getElementById("password").value;
    for(var i=0;i<regnm.length;i++){
        if(regnm[i].mail==email&&regnm[i].pass==password){
            alert("Login successfull");
            window.location.href="index.html";
        }
        else{
            count++;
        }
    }
    if(count==regnm.length){
        alert("invalid Credentials")
    }
}