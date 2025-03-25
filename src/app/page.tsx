import React from 'react';

const AppPage: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Saas Dashboard</h1>
            </header>
            <main>
                <p>This is the main content of the app page.</p>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Saas Dashboard. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AppPage;