import { useState } from 'react'
import {
    Card,
    CardContent,
    Typography,
    Rating,
    Button,
} from '@mui/material'
import ServiceQuestionForm from './ServiceQuestionForm/ServiceQuestionForm'
import {IServiceCardProps} from '../../../interfaces/Interfaces'
import FacilitiesService from '../../../../Services/apiService'

const ServicesCard = (props: IServiceCardProps) => {
    const [isQuestionFormOpened, setIsQuestionFormOpened] = useState(false);
    const [rating, setRating] = useState(props.item.raiting);

    const facilitiesService = new FacilitiesService();

    const onChangeQuestionFormDisplay = () => {
        setIsQuestionFormOpened(prevValue => !prevValue)
    }

    const postQuestion = (message: string) => {
        if (message) {
            alert(`message sent to server: ${message}`);
            // send message to server
        }
    }

    const setServiceRating = (event: any, newValue: any) => {
        setRating(newValue);
        // rate service on server
        console.log('service ' + props.item.id + ' rated ' + rating);
        facilitiesService.rateService(props.item.id, rating)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                
            })
    }

    const questionForm = !isQuestionFormOpened ||
        <ServiceQuestionForm 
            postQuestion={postQuestion} 
            closeQuestionForm={onChangeQuestionFormDisplay}
        /> 

    return (
        <Card>
            <CardContent style={{padding: '15px'}}>
                <Typography variant="h6" className="text-left">
                    {props.item.name}
                </Typography>
                <div className="text-left">
                    <Rating 
                        value={rating}   
                        style={{marginBottom: '10px'}}
                        onChange={setServiceRating}
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
                    <Button 
                        variant="text" 
                        size="small" 
                        onClick={() => props.getItemLocation(props.item.id, props.item.latitude, props.item.longitude)}
                    >
                        View
                    </Button>
                    <Button variant="text" size="small">Call</Button>

                    {
                        !isQuestionFormOpened && 
                            <Button 
                                variant="text" 
                                size="small" 
                                onClick={onChangeQuestionFormDisplay}
                            >
                                Ask
                            </Button>
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default ServicesCard;


