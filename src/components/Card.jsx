import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ButtonAnimated from './Button'
import Modal from './Modal'
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
                    
                     <Modal
                        frontMessageButtom="Just"
                        cost={cost}
                        backMessageButtom="Redeem it!"
                        titleSuccess="SUCESS!"
                        contentSuccess="Your purchase was successfully approved "
                        titleFail="TRY AGAIN!"
                        contentFail="Your purchase has problems, please contact us, to provide more information."
                        buttonText="Thanks"
                        status={true}
                        onActionClick={() => {
                       //     redeemPoints({ productId: _id });
                            console.log("redimiendo")
                        }}
                    /> 
                    :
                 <ButtonAnimated amount={cost - pointsLeft} frontMessage='Need' backMessage='Bring them!' _id />
            }
        </Card.Content>
        <Card.Content extra>

        </Card.Content>
    </Card>
)

export default CardProduct