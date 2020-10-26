export const getProducts = async () => {
    const url = 'https://coding-challenge-api.aerolab.co/products';
    const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZThhNzUyNDk2NzAwMTlhMTBlYjIiLCJpYXQiOjE2MDM2NTk5NDN9.DapzljGWaSJ7t3EdgRncEn_zEGQCXx0mJDswyHbKZfQ`;
    const resp = await fetch(url,
        {
            method: 'GET',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    const data = await resp.json();
    return data;
}