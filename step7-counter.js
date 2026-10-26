// STEP 7: Update the member counter - Frank majuu
let count = 0;
function updateCounter() {
  count++;
  const memberCount = document.getElementById("memberCount");
  memberCount.textContent = count;
  console.log("Step 7 Done: Counter is now " + count);
}

function decreaseCounter() {
  count--;
  document.getElementById("memberCount").textContent = count;
}
