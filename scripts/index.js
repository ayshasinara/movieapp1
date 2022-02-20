function handlePricSort() {
    var selected = document.querySelector("#selected").value;
    // console.log(selected);
    if (selected == "High") {
        getMove.sort(function (a, b) {
            return Number(b.rating) - Number(a.rating);
        });
    }
    if (selected == "Low") {
        getMove.sort(function (a, b) {
            return Number(a.rating) - Number(b.rating)
        });
    }
    console.log(getMove);
    displayData(getMove);
}

var moviearr=[]
function movies(a,b,c,d){
   this.name=a;
this.relese=b;
this.img=c;
this.rating=d
}
var Parasite=new movies("Parasite","31 Jan 2020 ","https://m.media-amazon.com/images/I/91KArYP03YL._AC_SY679_.jpg","4.5");
moviearr.push(Parasite)
var Athiran=new movies("Athiran","12 April 2019","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUciIwSMGTaT6fmSlKJdKSuJquh1xtkwUPBOWnEctwo2pNcI5I","4.0");
moviearr.push(Athiran)
var Tenet=new movies("Tenet","03 Sep 2020","https://cdn.shopify.com/s/files/1/0057/3728/3618/products/tenet2020.ar_480x.progressive.jpg?v=1578062934","3.0");
moviearr.push(Tenet)
var Parasite=new movies("Parasite","31 Jan 2020 ","https://m.media-amazon.com/images/I/91KArYP03YL._AC_SY679_.jpg","4.5");
moviearr.push(Parasite)
var Athiran=new movies("Athiran","12 April 2019","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUciIwSMGTaT6fmSlKJdKSuJquh1xtkwUPBOWnEctwo2pNcI5I","2.0");
moviearr.push(Athiran)
var Tenet=new movies("Tenet","03 Sep 2020","https://cdn.shopify.com/s/files/1/0057/3728/3618/products/tenet2020.ar_480x.progressive.jpg?v=1578062934","4.0");
moviearr.push(Tenet)

var Parasite=new movies("Parasite","31 Jan 2020 ","https://m.media-amazon.com/images/I/91KArYP03YL._AC_SY679_.jpg","4.5");
moviearr.push(Parasite)
var Athiran=new movies("Athiran","12 April 2019","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUciIwSMGTaT6fmSlKJdKSuJquh1xtkwUPBOWnEctwo2pNcI5I","4.0");
moviearr.push(Athiran)
var Tenet=new movies("Tenet","03 Sep 2020","https://cdn.shopify.com/s/files/1/0057/3728/3618/products/tenet2020.ar_480x.progressive.jpg?v=1578062934","4.0");
moviearr.push(Tenet)


localStorage.setItem("movies",JSON.stringify(moviearr))

var getMove= JSON.parse(localStorage.getItem("movies"))
console.log(typeof(getMove))

function displayData(getMove) {
    document.querySelector("#movies").innerHTML = ""
    getMove.map(function (ele) {
        var div = document.createElement("div");
        div.setAttribute("class", "box")
        var left=document.createElement("div");
        left.setAttribute("class", "box2")
        var image = document.createElement("img")
        image.setAttribute("src", ele.img);
        image.setAttribute("class", "myimg")
        var right=document.createElement("div");
        right.setAttribute("class", "box3")
        var name = document.createElement("h2");
        name.textContent = ele.name;
        var date = document.createElement("p");
        date.textContent = ele.relese;
        var rating = document.createElement("p");
        rating.textContent = ele.rating;
        left.append(image);
        right.append(name, date, rating)
       div.append(left,right);

        document.querySelector("#movies").append(div)
    });
}
 window.onload=displayData(getMove);
console.log(getMove)






 var arr=["https://s.yimg.com/ny/api/res/1.2/QUZ2vWjSP0XSQNFV.k6BzQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/sOFk9hHVUmo3MA8c6uVvYg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/hypebeast_936/78a84450f648a883375976db87131f25",
 "https://cdn.shopify.com/s/files/1/0581/5012/5749/products/the-batman_poster_goldposter_com_3_938x1390.jpg?v=1635174847",
 "http://www.movienewsletters.net/photos/277217R1.jpg",];
var i=0;
var time=1000

var abc=setInterval(()=>{
   
    var main=document.getElementById("Slideshows");
    main.src=arr[i]
    if (i==arr.length-1) {
        i=0;
      }
   i++;
},1000)
    
window.onload=abc;

    
  


