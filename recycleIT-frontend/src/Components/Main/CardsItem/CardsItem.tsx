import { Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import styles from '../Main.module.css'

const CardsItem = ({setItem, item}:any) => {
    return (
        <>
            {
                item.map((card: {title: string,category: string, desc: string, image: string}, id: number) => {
                    return (
                        <Card className={styles.Card_wrapper} key={id}>
                            <CardActionArea className={styles.Card_inside_wrapper}> 
                                <Typography variant="h6" className={styles.Card_typography}>
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" className={styles.Card_parg} >
                                    {card.desc}
                                </Typography>
                                <CardMedia
                                    className={styles.Card_img}
                                    component="img"
                                    src={card.image}
                                    alt="img"
                                />                                 
                        </CardActionArea>
                    </Card>
                    )
                })
            }
        </>
    )
}

export default CardsItem