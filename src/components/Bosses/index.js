import Link from 'next/link';
import React from 'react';
import styles from './Bosses.module.css';

export default function Bosses({ props }) {
    return (
        <div className={styles['post-card-styling']}>
            <div>
                <p className={styles['card-title']}>{props.name}</p>
                <p>Health: {props.health}</p>
                <p>Weakness: {props.weakness || 'Unknown'}</p>
                <div>
                    <Link href={`bosses/${props.id_bosses}`}>
                    </Link>
                </div>
            </div>
        </div>
    );
}
