import React from 'react';
import {FilmItem} from "../film-item";
import styles from './FilmList.module.css'
export const FilmList = ({items}) => {
    console.log(items, 'from FilmList');
    return (
        <div>
            {items.map(item =>(
                <div
                    className={styles.itemWrapper} key={item.id}>
                    <FilmItem  {...item}/>
                </div>
            ))}
        </div>
    )
}