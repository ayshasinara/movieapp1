document.querySelector("form"),addEventListener("submit",formSubmit);
var studentArr=JSON.parse(localStorage.getItem("studentDatas"))||[]
function formSubmit(event){
     event.preventDefault();
     var name=document.getElementById('name').value;
     var number=document.getElementById('num').value;
     var mail=document.getElementById('mail').value;
     var pass=document.getElementById('pass').value;
     if(name.length==0||number.length==0||mail.length==0||pass.length==0){
          alert("Input can not be left blank")
     }
     else{
     var obj={
          name:name,
          number:number,
          mail:mail,
          pass:pass}
          studentArr.push(obj)
         localStorage.setItem("studentDatas",JSON.stringify(studentArr)) 
         alert("sign in success")
         window.location.href = "login.html"
console.log(studentArr)}
     }
