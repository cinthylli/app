import React, { useState, useEffect } from 'react'
import { Card, Feed, Image } from 'semantic-ui-react'

export default function Historical({ points }) {
    const [historic, setHistoric] = useState([])

    useEffect(() => {
        getHistoric();

    }, [points])

    const getHistoric = async () => {
        const url = 'https://coding-challenge-api.aerolab.co/user/history';
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
        setHistoric(data)
    }

    return (
        <>

            <Card>
              
                <Card.Content>
                    <Feed>
                        {
                            historic.map((product) => {
                                return (
                                        <Card
                                            centered
                                            color="violet"
                                            className='shadow-drop-2-center card'>
                                            <Image src={product.img.hdUrl} wrapped ui={false} />
                                            <Card.Content>
                                                <Card.Header>{product.name}</Card.Header>
                                                <Card.Meta>{product.category}</Card.Meta>
                                            </Card.Content>
                                            <Card.Content extra>
                                            </Card.Content>
                                        </Card>                                       
                                )
                            })
                        }
                    </Feed>
                </Card.Content>
            </Card>
        </>
    )
}
