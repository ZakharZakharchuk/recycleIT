import { Typography, Card, CardContent } from "@mui/material";
import './ServicesTypes.css';
import {SERVICES_TYPES} from '../../util/data-list-mock'
import ServicesTypesCard from "./ServicesTypesCard/ServicesTypesCard";

function ServicesTypes() {
    return (
        <div className="services-types">
            {/* add className={styles.SectionTypes_typography} later */}
            <Typography variant="h4" style={{color: '#3F4732'}}>Popular facilities</Typography>
            {/* add className={styles.SectionTypes_paragraph} later */}
            <Typography paragraph={true}>
                Find out about popular types of eco services
            </Typography>
            <div className="sevices-types__cards">
                {
                    SERVICES_TYPES.map(service => {
                        return <ServicesTypesCard 
                                    key={service.id} 
                                    title={service.name}
                                    description={service.description}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default ServicesTypes;