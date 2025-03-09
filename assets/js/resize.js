// Get all image-text pairs
const imageTextPairs = document.querySelectorAll(".rows");

// Function to update the height of text containers based on images
function updateTextContainerHeights () {
    imageTextPairs.forEach(resize)

    function resize(item) {
        const image = item.querySelector('img');  // Get the image in the current pair
        const textContainer = item.querySelector('.text-holder');  // Get the corresponding text container
            
            // Make sure the image has fully loaded
            if(image.getAttribute("alt") != "img3" && image.getAttribute("alt") != "img4"){
                if (image.complete) {
                    const imageHeight = image.clientHeight;  // Get the height of the image
                    textContainer.style.height = imageHeight - 20 + 'px';  // Set the height of the text container
                } else {
                    // If image is not loaded yet, listen for it to load
                    image.onload = function() {
                        const imageHeight = image.clientHeight;
                        textContainer.style.height = imageHeight - 20 + 'px';
                    };
                }
            }
    }
}




// Call the function to set heights after images are loaded
updateTextContainerHeights();

// Optional: Update heights on window resize (if necessary)
window.addEventListener('resize', updateTextContainerHeights);