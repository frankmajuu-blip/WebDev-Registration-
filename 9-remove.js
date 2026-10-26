// STEP 9: Remove a member - Frank majuu
function setupRemove() {
  const memberList = document.getElementById("memberList");
  const emptyMsg = document.getElementById("emptyMsg");

  memberList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      e.target.closest("li").remove();
      decreaseCounter();
      if (document.getElementById("memberList").children.length === 1) {
        emptyMsg.style.display = "block";
      }
      console.log("Step 9 Done: Member removed");
    }
  });
}
// Call it on load
setupRemove();
