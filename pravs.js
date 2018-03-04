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
});

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
  profile.appendChild(photo)}
