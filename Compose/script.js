function addItemAndRedirect() {
    var title = document.getElementById('title').value;
    var post = document.getElementById('post').value;

    // Get existing posts from localStorage or initialize an empty array
    var existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

    // Add the new post to the array
    existingPosts.push({ title: title, post: post });

    // Save the updated array back to localStorage
    localStorage.setItem('posts', JSON.stringify(existingPosts));

    // Redirect the user to home.html
    window.location.href = '/Home/home.html';
}