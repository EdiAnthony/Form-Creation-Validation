// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    try {
        // API URL for fetching user data
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Selecting the data container element
        const dataContainer = document.getElementById('api-data');

        // Clear existing content and show loading message
        dataContainer.innerHTML = 'Loading user data...';

        // Fetching data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Creating and appending user list
        const userList = document.createElement('ul');
        userList.classList.add('user-list');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Appending user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        console.error('Error fetching user data:', error);
        // Display error message
        const dataContainer = document.getElementById('api-data');
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Execute fetchUserData when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
