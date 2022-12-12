import React from "react"
import styles from './Error.module.css'

const Error404 = ():JSX.Element => {
    return (
        <div className={styles.Error_wrapper}>
            <h1 className={styles.Error_header}>404</h1>
            <p  className={styles.Error_parg}><b>ERROR: PAGE NOT FOUND!</b></p>
        </div>
    )
}
export default Error404