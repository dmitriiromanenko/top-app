import React from 'react'
import { AdvantagesProps } from './Advantages.props'
import styles from './Advantages.module.css'
import cn from 'classnames'
import {Card} from '../Card/Card'
import { AiFillStar } from "react-icons/ai";
import { priceRu } from '../../helpers/helpers'
import { AiFillCheckCircle } from "react-icons/ai";


export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
        return( 
            <>
            {advantages.map(a =>(
                <div key={a._id} className={styles.advantage}>
                    <AiFillCheckCircle className={styles.check} size={50}/>
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}/>
                    <div>{a.description}</div>

                </div>
            ))}
            </>
    )
    
}