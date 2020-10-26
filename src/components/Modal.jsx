import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import useRedeemProducts from '../hooks/useRedeemProducts'

function exampleReducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { open: true, dimmer: action.dimmer }
        case 'CLOSE_MODAL':
            return { open: false }
        default:
            throw new Error()
    }
}

function ModalExampleDimmer({
    frontMessageButtom,
    cost,
    backMessageButtom,
    titleSuccess,
    contentSuccess,
    titleFail,
    contentFail,
    buttonText,
    status,
    productId, points

}) {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })
    const { open, dimmer } = state
    // let message = "hola"
    const [shouldFetch, setShouldFetch] = useState(false);
    let  message  =  useRedeemProducts({ productId: productId, points: points, cost: cost, shouldFetch: shouldFetch });
     console.log(message);

    return (
        <div>
            <Button
                animated='fade'
                onClick={() => {
                    dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })
                    // console.log("en modal");
                    setShouldFetch(true)
                }}
            >
                <Button.Content visible>{frontMessageButtom} {cost}</Button.Content>
                <Button.Content hidden>{backMessageButtom}</Button.Content>
            </Button>

            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
            >
                {
                    status === true ?
                        <>
                            <Modal.Header>{titleSuccess}</Modal.Header>
                            <Modal.Content>
                                {contentSuccess}
                            </Modal.Content>
                        </>
                        :
                        <>
                            <Modal.Header>{titleFail}</Modal.Header>
                            <Modal.Content>
                                {contentFail}
                            </Modal.Content>
                        </>
                }
                <Modal.Actions>
                    {
                        status === true
                            ?
                            <Button id={productId} positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                                {buttonText}
                            </Button>
                            :
                            <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                                {buttonText}
                            </Button>
                    }
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default ModalExampleDimmer