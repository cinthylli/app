import React from 'react'
import { Button } from 'semantic-ui-react'


const ButtonExampleAnimated = ({ amount, frontMessage, backMessage, productId }) => (

    <div>
        <Button
            primary
            animated='fade'
            color="violet"
            inverted
            onClick={(e) => {
                console.log("redimiendo on click" + productId);
            }}
        >
            <Button.Content
                visible
                onClick={(e) => {
                    console.log("redimiendo content");
                }}
            >{frontMessage}{amount}</Button.Content>
            <Button.Content hidden>{backMessage}</Button.Content>
        </Button>
    </div>
)

export default ButtonExampleAnimated