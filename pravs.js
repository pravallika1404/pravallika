function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("pravs.json",function(text){
   let data=JSON.parse(text);
   console.log(data);
   basicinfo(data.basics);
   eduinfo(data.education);
   skills(data.skills);
});
//flex-parent
var main=document.querySelector('.flex-parent');

function basicinfo(basic){
  var profile=document.getElementById("basics");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone)
  var email=document.createElement("h3");
  email.innerHTML=basic.email;
  profile.appendChild(email)
  var photo=document.createElement("img");
  photo.src=basic.photo;
  photo.setAttribute("id","photo");
  profile.appendChild(photo);
}
var right=document.createElement("div");
right.classList.add("content-child");
//append right to main
main.appendChild(right);
//education div
var e1=document.createElement("div");
e1.classList.add("edu");
/*appending div to right*/right.appendChild(e1);
/*creartion of h1*/
var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.textContent=("education details");
h1.appendChild(document.createElement("HR"));
console.log(right);
/*appending of h1*/e1.appendChild(h1);

function eduinfo(education){
  for(i in education){
//course creation
    var h2=document.createElement("h2");
    h2.classList.add("edu1");
    h2.textContent=education[i].course;
/*append h2 to h1*/h1.appendChild(h2);
    //college creation
    var h3=document.createElement("h3");
    h3.classList.add("edu2");
    h3.textContent=education[i].college;
/*append h3 to h2*/h2.appendChild(h3);
console.log(right);
    // for data getting
    var ul=document.createElement("ul");
    ul.classList.add("edu3");
    /*append ul to h3*/h3.appendChild(ul);
    // for(j in education.data){
      var li=document.createElement("li");
      li.textContent=education[i].data;
/*append list to ul*/
ul.appendChild(li);
  // }
}
}
//skills
function skills(pravs)
{
  var table=document.createElement("table");
  var row="";
  for(var k=0;k<pravs.length;k++){
    row+="<tr><td><strong>"+pravs[k].name+"</strong></td><td>"+pravs[k].info+"</td></tr>";
  }
  table.innerHTML=row;
  right.appendChild(table);
}
