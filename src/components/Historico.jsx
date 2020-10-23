import React, { useState, useEffect } from 'react'
import { Card, Feed } from 'semantic-ui-react'

export default function Historical({ points }) {
    const [historic, setHistoric] = useState([])

    useEffect(() => {
        getHistoric();

    }, [points])

    const getHistoric = async () => {
        const url = 'https://coding-challenge-api.aerolab.co/user/history';
        const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU4MjNhZDc0MjM1MjAwMWVkOTA5YTQiLCJpYXQiOjE1OTk2MTE4MjF9.Dim4Cie-Odcpo-TO93tdmIuxec6tttl509zgwhMDOJQ`;
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
        setHistoric(data)
    }

    return (
        <Card>
            <Card.Content>
                <Card.Header>History</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    {
                        historic.map((product) => {
                            return (
                                <Feed.Event key={product._id}>
                                    <Feed.Label image={product.img.hdUrl} />
                                    <Feed.Content>
                                        <Feed.Date content={product.category} />
                                        <Feed.Summary>
                                            {product.name}
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            )
                        })
                    }

                </Feed>
            </Card.Content>
        </Card>
    )
}
