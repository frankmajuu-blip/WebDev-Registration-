// step 8 - show success then clear form
function showSuccessAndReset() {
  let msgBox = document.getElementById("successMsg");
  let name = document.getElementById("fullName").value;

  msgBox.innerText = name + " registered successfully!";
  msgBox.classList.remove("hidden");
  msgBox.style.display = "block";
  msgBox.style.color = "green";

  // hide after 2 seconds
  setTimeout(function() {
    msgBox.style.display = "none";
  }, 2500);

  // clear the form so we can register next person
  document.getElementById("regForm").reset();
}
