import styles from '../styles/bosses.module.css';
import React, { useState, useEffect } from 'react';
import Bosses from '../components/Bosses';

const BossesPage = () => {
    const [bosses, setBosses] = useState([]);

    useEffect(() => {
        const fetchBosses = async () => {
            const response = await fetch('http://localhost:8080/bosses');
            const data = await response.json();
            setBosses(data);
        };

        fetchBosses();
    }, []);

    return (
        <div>
            <h1 className={styles.title}>BOSSES</h1>
            <div>
                <div>
                    <h1 className={styles.text}>WATERBLIGHT GANON</h1>
                    {bosses.map((boss) => (
                        <Bosses key={boss.id_bosses} props={boss} />
                    ))}
                </div>
                <div className={styles.cucco}>
                    <img src='ganon.png' className={styles.image} alt={"image"} />
                </div>
            </div>

            <div>
                <div>
                    <h1 className={styles.text}>HINOX (
                        OLDEST KIN)</h1>
                </div>
                <div className={styles.cucco}>
                    <img src='hinox.png' className={styles.image}/>
                </div>
            </div>

            <div>
                <div>
                    <h1 className={styles.text}>STONE TALUS</h1>
                </div>
                <div className={styles.cucco}>
                    <img src='stonetalus.png' className={styles.image}/>
                </div>
            </div>
        </div>

    )
}