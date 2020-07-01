import React, { useContext } from 'react';
import { tareaContext } from '../context/tareaContext';
import styles from '../index.module.css';

const ListaDuenos = () => {
    const ctx = useContext(tareaContext);

    const listar = dueno => {
        return (
            <li key={dueno.id}>
                {dueno.nombre} &nbsp;
                <i
                    onClick={ ()=> ctx.fnCambiarStatus(dueno) }
                    className={ `${styles.status} ${dueno.status ? styles.primary : styles.secondary}` } >
                    {!dueno.status ? 'inactivo' : 'activo'}
                </i> &nbsp;
                <button onClick={()=> ctx.fnEliminarDueno(dueno.id)}>eliminar</button>
            </li>
        )
    };

    return (
        <div className={styles.card}>
            <ol>
                { ctx.duenos.map(d => listar(d)) }
            </ol>
        </div>
    );
};
 
export default ListaDuenos;