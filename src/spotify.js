export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://localhost:3000/";

const clientId = "c633818f45834fed8fed5794caa0f519";

// Permissões do usuário padrão
constr scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("")}`