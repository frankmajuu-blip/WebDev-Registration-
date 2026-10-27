// step 9 - remove one member when button clicked
let memberList = document.getElementById("memberList");

memberList.addEventListener("click", function(e) {
  if (e.target.classList.contains("remove-btn")) {
    let liToRemove = e.target.parentElement;
    liToRemove.remove();
    
    // reduce the counter
    decreaseCounter();

    // if list is empty show message again
    if (memberList.children.length === 1) { // because emptyMsg is still there but hidden
      let check = memberList.querySelectorAll("li");
      let realMembers = 0;
      check.forEach(function(item){
        if(item.id !== "emptyMsg") realMembers++;
      });
      if(realMembers === 0){
        document.getElementById("emptyMsg").style.display = "block";
      }
    }
    if(memberList.children.length === 0){
      memberList.innerHTML = '<li id="emptyMsg">No members yet.</li>';
    }
  }
});
