import { createAuthProvider } from 'react-token-auth';



const { useAuth, authFetch, login, logout } = createAuthProvider({
    getAccessToken: session => session.access_token,
    storage: localStorage,
    onUpdateToken: token =>
        fetch('http://localhost:5000/auth/refresh', {
            method: 'POST',
            body: token.refresh_token,
        }).then(r => r.json()),
});

export { useAuth, authFetch, login, logout };