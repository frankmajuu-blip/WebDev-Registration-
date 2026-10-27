// step 6 - add member to the list
function registerMember() {
  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender").value;
  let country = document.getElementById("country").value;

  let list = document.getElementById("memberList");
  let empty = document.getElementById("emptyMsg");
  
  // hide the no members text if its there
  if (empty) {
    empty.style.display = "none";
  }

  let newLi = document.createElement("li");
  newLi.style.display = "flex";
  newLi.style.justifyContent = "space-between";
  newLi.style.marginBottom = "10px";
  newLi.style.padding = "8px";
  newLi.style.background = "#f2f2f2";
  newLi.style.borderRadius = "5px";

  newLi.innerHTML = `
    <span><strong>${name}</strong> - ${email} (${gender}, ${country})</span>
    <button class="remove-btn" style="background:red;color:white;border:none;padding:4px 8px;border-radius:3px;cursor:pointer;">Remove</button>
  `;

  list.appendChild(newLi);
}
