const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

function clickToGoogle() {
  const searchWord = document.getElementById("search-input").value;
  if (searchWord !== "") {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchWord)}`,
      "_blank"
    );
  }
}

function enterKeyPress(event) {
  if (event.key === "Enter") {
    clickToGoogle();
  }
}
searchButton.addEventListener("click", clickToGoogle);
searchInput.addEventListener("keydown", enterKeyPress);
