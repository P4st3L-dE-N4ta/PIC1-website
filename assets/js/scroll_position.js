/*************************************************************************************
 * Custom Nav link scroll 
*************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Stop default instant jump

            const targetID = this.getAttribute("href");
            if(targetID == "#home"){
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            } else if(targetID =="#team") {
                const target = document.querySelector(targetID);
                if (target) {
                    const offset = navbarHeight - 50; // Adjust this value if needed
    
                    window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: "smooth"
                    });
                }
            } else {
                const target = document.querySelector(targetID);
                if (target) {
                    const offset = navbarHeight + 10; // Adjust this value if needed
    
                    window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: "smooth"
                    });
                }
            }
            
        });
    });
});
