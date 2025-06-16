/*************************************************************************************
 * Custom Nav link scroll 
*************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Stop default instant jump

            const targetID = this.getAttribute("href");
            if(targetID === "#home"){
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            } else if(targetID === "#team") {
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

document.addEventListener("click", (event) => {
    console.log("Clicked element:", event.target);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".team-member").forEach(member => {
        let link_linkedin = member.querySelector('.linkedin'); // Select the <a> tag inside the back of the card
        let link_github = member.querySelector('.github');

        member.addEventListener("mousemove", function (event) {
            let rect = member.querySelector('.team-member_image').getBoundingClientRect();
            let mouseY = event.clientY - rect.top; // Get mouse Y relative to the element
            let halfHeight = rect.height / 2; // Calculate 50% height
            let thirdHeight = rect.height / 3;

            if (mouseY < halfHeight) {
                link_linkedin.classList.add("highlight"); // Add highlight effect
            } else {
                if(link_linkedin.classList.contains("highlight")){
                    link_linkedin.classList.remove("highlight"); // Remove highlight effect
                }  
            }
            if (mouseY > halfHeight && mouseY < halfHeight + thirdHeight) {
                link_github.classList.add("highlight"); // Add highlight effect
            } else {
                if(link_github.classList.contains("highlight")){
                    link_github.classList.remove("highlight"); // Remove highlight effect
                }  
            }
        });

        member.addEventListener("click", function (event) {
            let rect = member.querySelector('.team-member_image').getBoundingClientRect();
            let clickY = event.clientY - rect.top; // Get click Y relative to the element
            let halfHeight = rect.height / 2;
            let thirdHeight = rect.height / 3;

            if (clickY < halfHeight && link_linkedin.classList.contains("highlight")) { // If clicked in top half
                if (link_linkedin) {
                    link_linkedin.click(); // Trigger a click on the <a> tag
                }
            } else if (clickY > halfHeight && clickY < halfHeight + thirdHeight && link_github.classList.contains("highlight")) {
                if (link_github) {
                    link_github.click(); // Trigger a click on the <a> tag
                }
            }
        });

        member.addEventListener("mouseleave", function () {
            if(link_linkedin.classList.contains("highlight")){
                link_linkedin.classList.remove("highlight"); // Remove highlight effect
            }  
            if(link_github.classList.contains("highlight")){
                link_github.classList.remove("highlight"); // Remove highlight effect
            }  
        });
    });
});




