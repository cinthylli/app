
export const addPoints = async ({ pts }) => {
    const url = 'https://coding-challenge-api.aerolab.co/user/points';
    const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU4MjNhZDc0MjM1MjAwMWVkOTA5YTQiLCJpYXQiOjE1OTk2MTE4MjF9.Dim4Cie-Odcpo-TO93tdmIuxec6tttl509zgwhMDOJQ`;
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

    console.log("data,", data["New Points"]);
    return data["New Points"];
}