


/**************************************************************
 * Navigation Bar dinamic .active
 *************************************************************/
// TODO: Implement this





document.addEventListener('DOMContentLoaded', function() {
    // Get all blog posts
    const blogPosts = document.querySelectorAll('.blog-card');

    // Initially show only the first 3 posts
    for (let i = 3; i < blogPosts.length; i++) {
        blogPosts[i].style.display = 'none'; // Hide all except the first 3
    }

    // Toggle button to show all posts
    const toggleButton = document.querySelector('.load-more');
    
    toggleButton.addEventListener('click', function() {
        // Check if posts are expanded
        const arePostsExpanded = blogPosts[3].style.display !== 'none';
        
        // Toggle visibility
        for (let i = 3; i < blogPosts.length; i++) {
            blogPosts[i].style.display = arePostsExpanded ? 'none' : 'grid';
        }
        
        // Change button text based on visibility
        toggleButton.textContent = arePostsExpanded ? 'See All Blog Posts' : 'Show Less';
    });
});



