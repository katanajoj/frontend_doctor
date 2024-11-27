import React, { useState } from 'react';
import Login from './components/Login';
import DoctorsList from './components/DoctorsList';
import './styles.css';

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="App">
            {!user ? (
                <Login onLogin={setUser} />
            ) : (
                <DoctorsList user={user} />
            )}
        </div>
    );
}

export default App;
