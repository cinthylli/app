import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
//import ButtonAnimated from './Button'
//import Modal from './Modal'
//import { redeemPoints } from '../helpers/redeemPoints'
const CardProduct = ({ product, category, pointsLeft, cost, img, _id }) => (

    <Card
        centered
        color="violet"
        className='shadow-drop-2-center card'>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{product}</Card.Header>
            <Card.Meta>{category}</Card.Meta>
            {
                (pointsLeft > cost) ?
                    <Button>Click Here</Button>
                    // <Modal
                    //     frontMessageButtom="Just"
                    //     cost={cost}
                    //     backMessageButtom="Redeem it!"
                    //     title="SUCESS!"
                    //     content="Your purchase was successfully approved "
                    //     buttonText="Thanks"
                    //     onActionClick={() => {
                    //    //     redeemPoints({ productId: _id });
                    //         console.log("redimiendo")
                    //     }}
                    // /> 
                    :
                    <Button>Click Here</Button>
                // <ButtonAnimated amount={cost - pointsLeft} frontMessage='Need' backMessage='Bring them!' _id />
            }
        </Card.Content>
        <Card.Content extra>

        </Card.Content>
    </Card>
)

export default CardProduct