// step 7 - simple counter
let count = 0;

function updateCounter() {
  count = count + 1;
  document.getElementById("memberCount").innerText = count;
}

function decreaseCounter() {
  if (count > 0) {
    count = count - 1;
    document.getElementById("memberCount").innerText = count;
  }
}
