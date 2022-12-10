import { Typography, Card, CardContent, Divider } from "@mui/material";
interface IServicesTypesCard {
    title: string,
    description: string
}

function ServicesTypesCard({title, description}: IServicesTypesCard) {
    return (
        <Card className="sevices-types__card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Divider />
                <Typography paragraph={true} className="services-types__card-description">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ServicesTypesCard;