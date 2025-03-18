<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Activity Tracker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
            background-color: #8B4513; /* Brown background color */
        }
        h1 {
            text-align: center;
            color: #fff; /* Changed text color to white for better contrast */
        }
        .search-container {
            text-align: center;
            margin-bottom: 20px;
            position: relative;
        }
        #username {
            padding: 10px;
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        #search-button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        #search-button:hover {
            background-color: #0056b3;
        }
        .activity-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .activity-item {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        .activity-item:last-child {
            border-bottom: none;
        }
        .autocomplete-items {
            position: absolute;
            border: 1px solid #d4d4d4;
            border-bottom: none;
            border-top: none;
            z-index: 99;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 300px;
            background-color: white;
        }
        .autocomplete-items div {
            padding: 10px;
            cursor: pointer;
            background-color: #fff;
            border-bottom: 1px solid #d4d4d4;
        }
        .autocomplete-items div:hover {
            background-color: #e9e9e9;
        }
    </style>
</head>
<body>
    <h1>GitHub Activity Tracker</h1>

    <!-- Search Container -->
    <div class="search-container">
        <input type="text" id="username" placeholder="Enter GitHub Username">
        <button id="search-button">Search</button>
        <!-- Autocomplete dropdown -->
        <div id="autocomplete-list" class="autocomplete-items"></div>
    </div>

    <!-- Activity Container -->
    <div class="activity-container" id="activity-container">
        <p>Enter a GitHub username to view their recent activity.</p>
    </div>

    <script>
        const usernameInput = document.getElementById('username');
        const searchButton = document.getElementById('search-button');
        const activityContainer = document.getElementById('activity-container');
        const autocompleteList = document.getElementById('autocomplete-list');

        let searchHistory = [];

        // Fetch GitHub activity
        async function fetchGitHubActivity(username) {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/events/public`);
                if (!response.ok) throw new Error('User not found');
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching GitHub activity:', error);
                return null;
            }
        }

        // Render activity
        function renderActivity(activity) {
            if (!activity || activity.length === 0) {
                activityContainer.innerHTML = '<p>No recent activity found for this user.</p>';
                return;
            }

            activityContainer.innerHTML = activity
                .map(event => `
                    <div class="activity-item">
                        <strong>${event.type}</strong>: ${event.repo.name}<br>
                        <small>${new Date(event.created_at).toLocaleString()}</small>
                    </div>
                `)
                .join('');
        }

        // Handle search
        searchButton.addEventListener('click', async () => {
            const username = usernameInput.value.trim();
            if (!username) return;

            const activity = await fetchGitHubActivity(username);
            if (activity) {
                renderActivity(activity);
                addToSearchHistory(username);
            } else {
                activityContainer.innerHTML = '<p>User not found or an error occurred.</p>';
            }
        });

        // Autocomplete functionality
        usernameInput.addEventListener('input', () => {
            const input = usernameInput.value.trim();
            if (!input) {
                autocompleteList.innerHTML = '';
                return;
            }

            const filteredHistory = searchHistory.filter(item => item.toLowerCase().includes(input.toLowerCase()));
            autocompleteList.innerHTML = filteredHistory
                .map(item => `<div onclick="selectUsername('${item}')">${item}</div>`)
                .join('');
        });

        // Select username from autocomplete
        function selectUsername(username) {
            usernameInput.value = username;
            autocompleteList.innerHTML = '';
        }

        // Add username to search history
        function addToSearchHistory(username) {
            if (!searchHistory.includes(username)) {
                searchHistory.push(username);
            }
        }

        // Close autocomplete when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target !== usernameInput) {
                autocompleteList.innerHTML = '';
            }
        });
    </script>
</body>
</html>
