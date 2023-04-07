// Get the modal
const rulesModal = document.getElementById("rules-modal");

// Get the button that opens the modal
const rulesBtn = document.getElementsByClassName("rules-btn")[0];

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
rulesBtn.onclick = function() {
  rulesModal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  rulesModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == rulesModal) {
    rulesModal.style.display = "none";
  }
}