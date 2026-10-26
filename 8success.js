// STEP 8: Show success message and reset - Frank majuu
function showSuccessAndReset() {
  const fullName = document.getElementById("fullName").value;
  const successMsg = document.getElementById("successMsg");
  const form = document.getElementById("regForm");

  successMsg.textContent = `Success! ${fullName} has been registered.`;
  successMsg.classList.remove("hidden");
  
  setTimeout(() => {
    successMsg.classList.add("hidden");
  }, 3000);

  form.reset();
  console.log("Step 8 Done: Success shown and form reset");
}
