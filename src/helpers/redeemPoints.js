
export const redeemPoints = async ({ productId }) => {
   
        const url = 'https://coding-challenge-api.aerolab.co/redeem';
        const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk1ZThhNzUyNDk2NzAwMTlhMTBlYjIiLCJpYXQiOjE2MDM2NTk5NDN9.DapzljGWaSJ7t3EdgRncEn_zEGQCXx0mJDswyHbKZfQ`;
        const resp = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ "productId": productId })
            }
        )
        const data = await resp.json();
        console.log("data del api,", data);
    return data;

}