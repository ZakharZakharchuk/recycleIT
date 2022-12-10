import { TabPanel } from "@mui/lab"
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import styles from '../Main.module.css'

interface ICardItemProps {
    id: string, 
    title: string, 
    category: string, 
    desc: string, 
    image: string, 
    value:string 
}

const CardsItem = ({item}: {item: ICardItemProps[]}) => {
    return (
        <div className={styles.Cards_container} >
            {
                item.map((card: ICardItemProps) => {
                    return (
                            <Card key={card.id}>
                                <div className={styles.Card_inside_wrapper}> 
                                    <Typography gutterBottom variant="h6" className={styles.Card_typography}>
                                        {card.title}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" className={styles.Card_parg} >
                                        {card.desc}
                                    </Typography>
                                    <CardMedia
                                        className={styles.Card_img}
                                        component="img"
                                        image={card.image}
                                        alt="img"
                                        height="200"
                                    />                                 
                                </div>
                            </Card>
                    )
                })
            }
        </div>
    )
}

export default CardsItem