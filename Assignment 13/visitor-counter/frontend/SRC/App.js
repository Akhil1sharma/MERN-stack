// frontend/src/App.js
import React, { useState, useEffect } from 'react';

function App() {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const response = await fetch('/api/visitors'); // 1 Use relative path, Docker Compose handles routing
                const data = await response.json();//5
                setVisitorCount(data.count);
            } catch (error) {
                console.error("Error fetching visitor count:", error);
            }
        };

        fetchVisitorCount();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Visitor Count</h1>
                <p>This page has been visited {visitorCount} times.</p> 
            </header>
        </div>
    );
}

export default App;
