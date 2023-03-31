import Link from 'next/link';
import React from 'react';


export default function Characters({props}) {
    return (
        <div className={styles['post-card-styling']}>
            <div>
                <p className={styles['card-title']}>{props.title}</p>
                <p>{props.text}</p>
                <div>
                    <Link href={`posts/${props.id}`}><a className={styles['card-link']}>More Details</a></Link>
                </div>
            </div>
        </div>
    );
}
