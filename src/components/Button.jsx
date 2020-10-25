import React from 'react'
import { Button } from 'semantic-ui-react'
// import { redeemPoints } from '../helpers/redeemPoints'

const ButtonExampleAnimated = ({ amount, frontMessage, backMessage, id }) => (

    <div>
        <Button
            primary
            animated='fade'
            color="violet"
            inverted
            onClick={(e) => {
                //  redeemPoints({ productId: id })
                console.log("redimiendo on click");
            }}
        >
            <Button.Content
                visible
                onClick={(e) => {
                    // redeemPoints({ productId: id })
                    console.log("redimiendo content");
                }}
            >{frontMessage}{amount}</Button.Content>
            <Button.Content hidden>{backMessage}</Button.Content>
        </Button>
    </div>
)

export default ButtonExampleAnimated