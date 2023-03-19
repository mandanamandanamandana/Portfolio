import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import classes from './card.module.css';

const card = (props: { className: any; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
    return(
        <div className={`${classes.card} ${props.className}`}>
            {props.children}    
        </div>
    )
}

export default card;