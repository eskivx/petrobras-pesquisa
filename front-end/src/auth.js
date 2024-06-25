import { createAuthProvider } from 'react-token-auth';



const { useAuth, authFetch, login: originalLogin, logout } = createAuthProvider({
    getAccessToken: session => session.access_token,
    storage: localStorage,
    onUpdateToken: token =>
        fetch('http://localhost:5000/auth/refresh', {
            method: 'POST',
            body: token.refresh_token,
        }).then(r => r.json()),
});

const login = (accessToken, refreshToken, email) => {
    const session = {
        access_token: accessToken,
        refresh_token: refreshToken,
        email: email, // armazenando o email junto aos tokens no localstorage
    };
    localStorage.setItem('auth', JSON.stringify(session));
    originalLogin(session);
};


const getUserEmail = () => {
    const session = JSON.parse(localStorage.getItem('auth'));
    return session ? session.email : null;
};

export { useAuth, authFetch, login, logout, getUserEmail };