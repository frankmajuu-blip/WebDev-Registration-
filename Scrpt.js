// Frank - SPI 2201 Assignment
// Registration form

let myForm = document.getElementById("regform");
let myName = document.getElementById("name");
let myEmail = document.getElementById("email");
let myPassword = document.getElementById("password");
let myConfirm = document.getElementById("confirm-password");
let myGender = document.getElementById("gender");
let myDob = document.getElementById("dob");
let myCountry = document.getElementById("country");
let myPhone = document.getElementById("phone");
let myBio = document.getElementById("bio");
let myList = document.getElementById("memberList");
let myCount = document.getElementById("count");
let themeBtn = document.getElementById("theme");
let successMsg = document.getElementById("successMsg");

// test if loaded
console.log("form loaded");

myForm.addEventListener("submit", function(e){
 e.preventDefault();
 
 // clear errors first
 document.getElementById("nameError").innerText = "";
 document.getElementById("emailError").innerText = "";
 document.getElementById("passwordError").innerText = "";
 document.getElementById("confirmError").innerText = "";
 document.getElementById("genderError").innerText = "";
 document.getElementById("dobError").innerText = "";
 document.getElementById("countryError").innerText = "";
 document.getElementById("phoneError").innerText = "";
 document.getElementById("bioError").innerText = "";

 let valid = true;

 if(myName.value == ""){
   document.getElementById("nameError").innerText = "Name is required";
   valid = false;
 }
 if(myEmail.value == ""){
   document.getElementById("emailError").innerText = "Email required";
   valid = false;
 }
 if(myPassword.value == ""){
   document.getElementById("passwordError").innerText = "Password needed";
   valid = false;
 }
 if(myPassword.value.length < 6){
   document.getElementById("passwordError").innerText = "Too short min 6";
   valid = false;
 }
 if(myConfirm.value != myPassword.value){
   document.getElementById("confirmError").innerText = "Not matching";
   valid = false;
 }
 if(myGender.value == ""){
   document.getElementById("genderError").innerText = "Select gender";
   valid = false;
 }
 if(myDob.value == ""){
   document.getElementById("dobError").innerText = "Select dob";
   valid = false;
 }
 if(myCountry.value == ""){
   document.getElementById("countryError").innerText = "Country required";
   valid = false;
 }
 if(myPhone.value == ""){
   document.getElementById("phoneError").innerText = "Phone required";
   valid = false;
 }

 if(valid == false){
   return;
 }

 // hide empty note
 let empty = document.getElementById("emptyNote");
 if(empty){
   empty.style.display = "none";
 }

 // add member
 let li = document.createElement("li");
 li.innerHTML = myName.value + " - " + myEmail.value + " <button class='remove-btn'>Remove</button>";
 myList.appendChild(li);

 // count
 let all = myList.getElementsByTagName("li");
 let c = 0;
 for(let i=0; i<all.length; i++){
   if(all[i].id != "emptyNote"){
     c++;
   }
 }
 myCount.innerText = c;

 successMsg.innerText = "Success " + myName.value + " added";
 successMsg.classList.remove("hidden");

 myForm.reset();

 setTimeout(function(){
   successMsg.classList.add("hidden");
 }, 3000);
});

// remove button
myList.addEventListener("click", function(e){
 if(e.target.classList.contains("remove-btn")){
   e.target.parentElement.remove();
   let all = myList.getElementsByTagName("li");
   let c = 0;
   for(let i=0; i<all.length; i++){
     if(all[i].id != "emptyNote"){
       c++;
     }
   }
   myCount.innerText = c;
   if(c == 0){
     document.getElementById("emptyNote").style.display = "block";
   }
 }
});

// dark mode
themeBtn.addEventListener("click", function(){
 document.body.classList.toggle("dark-mode");
 if(document.body.classList.contains("dark-mode")){
   themeBtn.innerText = "Light Mode";
 } else {
   themeBtn.innerText = "Dark Mode";
 }
});
