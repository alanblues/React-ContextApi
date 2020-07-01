import React, { useContext } from 'react';
import { tareaContext } from '../context/tareaContext';
import styles from '../index.module.css';

const Titulo = () => {
    const ctx = useContext(tareaContext);
    return <h2 className={styles.titulo}>{ctx.titulo}</h2>;
};

export default Titulo;