import { useState, useContext, useEffect, SetStateAction } from 'react'
import {
    Card,
    CardContent,
    Typography,
    Rating,
    Button,
} from '@mui/material';
import ServiceQuestionForm from './ServiceQuestionForm/ServiceQuestionForm';
import { IServiceCardProps} from '../../../../../util/Interfaces';
import FacilitiesService from '../../../../../Services/apiService';
import MessageDialog from '../../../../UI/MessageDialog/MessageDialog';
import { UserContext } from '../../../../UserContext/UserContextProvider';
import axios from "axios";
const ServicesCard = (props: IServiceCardProps) => {
    const user = useContext(UserContext);
    const [isQuestionFormOpened, setIsQuestionFormOpened] = useState(false);
    const [rating, setRating] = useState(props.item.rating);
    const facilitiesService = new FacilitiesService();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState({
        title: '',
        message: '',
        spanText: '',
        actionMessageText: 'Continue to page',
    });

    const handleClose = () => {
        setDialogOpen(prev => !prev);
    }

    const onChangeQuestionFormDisplay = () => {
        setIsQuestionFormOpened(prevValue => !prevValue)
    }  

    const postQuestion = (email: string, message: string) => {
        facilitiesService.postServiceQuestion(props.item.id, email, message)
            .then(res => {
                console.log(res);
                // open dialog
                setDialogContent({
                    title: 'Thank you for your question!',
                    message: 'Our support team will contact you via email',
                    spanText: email,
                    actionMessageText: 'Continue to page',
                })
                setDialogOpen(true);
            })
            .catch(error => {
                console.log(error);
                setDialogContent({
                    title: 'Something went wrong',
                    message: 'Please check your connection or try again later',
                    spanText: '',
                    actionMessageText: 'Continue to page'
                })
                setDialogOpen(true);
            })
    }

    const rateServiceOnServer = async (event: any, newValue: any) => {
        setRating(newValue);

        facilitiesService.rateService(props.item.id, newValue, user?.user?.token || '')
            .then(res => {
                setDialogOpen(true);
                setDialogContent({
                    title: 'Thank you!',
                    message: 'You have rated this service',
                    spanText: `${newValue} stars`,
                    actionMessageText: 'Continue to page',
                })
            })
            .catch(error => {
                console.error(error);
                setDialogOpen(true);
                setDialogContent({
                    title: 'Something went wrong',
                    message: 'Please try again later',
                    spanText: '',
                    actionMessageText: 'Continue to page',
                })
            })
    }

    const questionForm = !isQuestionFormOpened ||
        <ServiceQuestionForm 
            postQuestion={postQuestion} 
            closeQuestionForm={onChangeQuestionFormDisplay}
        /> 

    return (
        <>
        <Card>
            <div style={{padding: '15px'}}>
                <Typography variant="h6" className="text-left">
                    {props.item.name}
                </Typography>
                <div className="text-left">
                    <Rating 
                        value={rating}   
                        style={{marginBottom: '10px'}}
                        onChange={rateServiceOnServer}
                        disabled={!user?.isLoggedIn}
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
            </div>
        </Card>
        <MessageDialog 
            dialogOpen={dialogOpen}
            handleClose={handleClose}
            spanText={dialogContent.spanText}
            title={dialogContent.title}
            message={dialogContent.message}
            showConfirm={false} 
            actionMessageText={dialogContent.actionMessageText}                 
        /> 
    </>
    )
}

export default ServicesCard;


