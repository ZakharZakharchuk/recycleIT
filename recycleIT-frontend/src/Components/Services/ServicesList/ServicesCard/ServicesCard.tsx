import { useState } from 'react'
import {
    Card,
    CardContent,
    Typography,
    Rating,
    Button,
} from '@mui/material'
import ServiceQuestionForm from './ServiceQuestionForm/ServiceQuestionForm'

const ServicesCard = (props: {
        item: {
            id: number,
            name: string,
            streetAddress: string,
            city: string,
            latitude: number,
            longitude: number,
            contactPhone: string,
            facilitySubtypes: string,
            raiting: number,
            delivery: boolean
        } 
    }) => {

        const [isQuestionFormOpened, setIsQuestionFormOpened] = useState(false);
        
        const openQuestionForm = () => {
            setIsQuestionFormOpened(prevValue => !prevValue)
        }

        const postQuestion = (message: string) => {
            if (message) {
                alert(`message sent to server: ${message}`);
                // send message to server
            }
        }

        const closeQuestionForm = () => {
            setIsQuestionFormOpened(prevValue => !prevValue)
        }

        const questionForm = isQuestionFormOpened ? 
            <ServiceQuestionForm 
                postQuestion={postQuestion} 
                closeQuestionForm={closeQuestionForm}
                /> : null;

        return (
            <Card>
                <CardContent style={{padding: '15px'}}>
                    <Typography variant="h6" className="text-left">
                        {props.item.name}
                    </Typography>
                    <div className="text-left">
                        <Rating 
                            name="read-only" 
                            value={props.item.raiting} 
                            readOnly 
                            size="small" 
                            style={{marginBottom: '10px'}}
                            />
                    </div>
                    <div className="item-details">
                        <Typography variant="body1" color="text.primary" className="text-left">
                            Description
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="text-left">
                            {props.item.facilitySubtypes}
                        </Typography>
                    </div>
                    <div className="item-details">
                        <Typography variant="body1" color="text.primary" className="text-left">
                            Address
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="text-left">
                            {props.item.streetAddress}
                        </Typography>
                    </div>
                    <div className="item-details">
                        <Typography variant="body1" color="text.primary" className="text-left">
                            Delivery
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="text-left">
                            {props.item.delivery ? 'Available' : 'Not Available'}
                        </Typography>
                    </div>

                    { questionForm }

                    <div className="button-group">
                        <Button variant="text" size="small">Call</Button>

                        {
                            !isQuestionFormOpened ? 
                                <Button 
                                    variant="text" 
                                    size="small" 
                                    onClick={openQuestionForm}
                                    >
                                    Ask
                                </Button> : null
                        }
                    </div>
                </CardContent>
            </Card>
        )
}

export default ServicesCard;


