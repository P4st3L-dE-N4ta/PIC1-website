


/**************************************************************
 * Navigation Bar dinamic .active
 *************************************************************/
// TODO: Implement this



/**************************************************************
 * Our Project for smaller screens
 *************************************************************/
function updateHeroSection() {
    if(window.innerWidth < 1380) {
        fetch("smaller_screens.html")
        .then(response => response.text()) // Convert response to text
        .then(data => {
            document.getElementById("ourproject").innerHTML = data; // Insert content
        })
        .catch(error => console.error("Error loading content:", error));
    }
}

window.addEventListener("load", updateHeroSection);
window.addEventListener("resize", updateHeroSection);