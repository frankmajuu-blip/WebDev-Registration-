// STEP 6: Register the member (DOM creation) - Frank majuu
function registerMember() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const country = document.getElementById("country").value;
  const bio = document.getElementById("bio").value;
  const phone = document.getElementById("phone").value;
  const memberList = document.getElementById("memberList");
  const emptyMsg = document.getElementById("emptyMsg");

  const li = document.createElement("li");
  li.innerHTML = `<div><b>${fullName}</b><br><small>${email} | ${gender} | ${country} | ${phone}</small><br><small>${bio}</small></div><button class="remove-btn">Remove</button>`;
  
  memberList.appendChild(li);
  if(emptyMsg) emptyMsg.style.display = "none";
  
  console.log("Step 6 Done: Member created via DOM");
}
