export const getUser = async () => {
    const url = 'https://coding-challenge-api.aerolab.co/user/me';
    const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZThhNzUyNDk2NzAwMTlhMTBlYjIiLCJpYXQiOjE2MDM2NTk5NDN9.DapzljGWaSJ7t3EdgRncEn_zEGQCXx0mJDswyHbKZfQ`;
    const resp = await fetch(url,
        {
            method: 'GET',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                CORS: 'Access-Control-Allow-Origin'
            }
        }
    )
    const data = await resp.json();
    return data;

}