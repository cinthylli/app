
export const addPoints = async ({ pts }) => {
    const url = 'https://coding-challenge-api.aerolab.co/user/points';
    const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZThhNzUyNDk2NzAwMTlhMTBlYjIiLCJpYXQiOjE2MDM2NTk5NDN9.DapzljGWaSJ7t3EdgRncEn_zEGQCXx0mJDswyHbKZfQ`;
    const resp = await fetch(url,
        {
            // mode: 'no-cors',
            method: 'POST',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ "amount": pts })
        }
    )
    const data = await resp.json();
    return data["New Points"];
}