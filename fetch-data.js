document.addEventListener("DOMContentLoaded", function () {
    // Asynchronous function to fetch and display user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
        const dataContainer = document.getElementById('api-data'); // Select data container

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            const users = await response.json(); // Parse response as JSON

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold user data
            const userList = document.createElement('ul');

            // Loop through the users array and add each user's name to the list
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set user's name as list item content
                userList.appendChild(listItem); // Append list item to the user list
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors during fetch
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error); // Log the error for debugging
        }
    }

    // Invoke the fetchUserData function when the DOM is fully loaded
    fetchUserData();
});
