 document.addEventListener('DOMContentLoaded', function () {
            console.log("DOM Loaded")
            // Check if there are existing posts in localStorage
            var existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

            // Iterate through existing posts and add them to the main content
            existingPosts.forEach(function (post, index) {
                addItem(post.title, post.post, index); // Pass index to identify each post
            });
        });

        function addItem(title, post, index) {
            var newPostContainer = document.createElement('div');
            newPostContainer.className = 'container';

            var newTitle = document.createElement('h1');
            newTitle.textContent = title;

            var newPost = document.createElement('p');
            newPost.textContent = post;

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'btn btn btn-default btn-outline btn-xs';
            deleteButton.onclick = function () {
                deletePost(index);
            };

            newPostContainer.appendChild(newTitle);
            newPostContainer.appendChild(newPost);
            newPostContainer.appendChild(deleteButton);

            document.getElementById('main-content').appendChild(newPostContainer);
        }

        function deletePost(index) {
            var existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
            
            // Remove the post at the specified index
            existingPosts.splice(index, 1);

            // Save the updated array back to localStorage
            localStorage.setItem('posts', JSON.stringify(existingPosts));

            // Reload the page to reflect the changes
            location.reload();
        }