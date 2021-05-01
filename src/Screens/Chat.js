import React, { useState, useEffect } from 'react';

const Chat = (props) => {
    const [currentUsername, setCurrentUsername] = useState('');
    const [currentScreen, setCurrentScreen] = useState('WhatIsYourUsernameScreen');

    useEffect(() => {
        onUsernameSubmitted()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[]);

    function onUsernameSubmitted(username) {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
            .then(response => {
                setCurrentScreen('ChatScreen');
                setCurrentUsername(username);
            })
            .catch(error => console.error('error', error))
    }

    // if (currentScreen === 'WhatIsYourUsernameScreen') {
    //     return <UsernameForm onSubmit={onUsernameSubmitted} />
    // }
    // if (currentScreen === 'ChatScreen') {
    //     return <ChatScreen currentUsername={currentUsername} />
    // }
};

export { Chat } ;
