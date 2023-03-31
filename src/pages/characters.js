import styles from '../styles/character.module.css'
import Bosses from "@/components/Bosses";
import React, {useEffect, useState} from "react";

const [characters, setCharacters] = useState([]);
useEffect(() => {
    const fetchCharacters = async () => {
        const response = await fetch('http://localhost:8080/bosses');
        const data = await response.json();
        setCharacters(data);
    };

    fetchCharacters();
}, []);

export default function CharactersPage() {
    return (
        <div>
            <h1 className={styles.title}>CHARACTERS</h1>
            <div className={styles.layout}>
                <div>
                    <div className={styles.text}>
                        <h1>BADDEK</h1>
                        {bosses.map((boss) => (
                            <Bosses key={boss.id_bosses} props={boss} />
                        ))}
                    </div>
                    <div className={styles.cucco}>
                        <img src='baddek.png' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>BAMBOO</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='bamboo.png' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>BAUMAR</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='baumar.png' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>BAYGE</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='bayge.png' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>BEEDLE</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='beedle.png' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>DARUK</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='Daruk.png' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>EPONA</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='Epona.png' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>RIVALI</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='rivali.jpg' className={styles.image}/>

                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>KAIRO</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='Kairo.jpg' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>TALI</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='tali.png' className={styles.image}/>
                    </div>
                </div>

                <div>
                    <div className={styles.text}>
                        <h1>PRINZESSZELDA</h1>
                    </div>
                    <div className={styles.cucco}>
                        <img src='prinzesszelda.png' className={styles.image}/>
                    </div>
                </div>
            </div>
        </div>
    )
}