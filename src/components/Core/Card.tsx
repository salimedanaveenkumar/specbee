import { ReactNode } from 'react';
import './Card.scss';
type CardType = {
    children : ReactNode,
    label : string
}
export default function Card ({children, label} : CardType) {
    return (
        <div className="card">
            <div className="cardLabel">
                {label}
            </div>
            <div>
                {children}
            </div>
            
        </div>
    )
}