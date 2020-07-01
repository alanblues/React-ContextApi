import React, { useRef, useContext, Fragment, useEffect } from 'react';
import { v4 } from 'uuid';
import styles from '../index.module.css';
import { tareaContext } from '../context/tareaContext';

const Formulario = () => {
    const refNombre = useRef();
    const ctx = useContext(tareaContext);

    const onAgregar = e => {
        e.preventDefault();
        const dueno = {
            id: v4(),
            nombre: refNombre.current.value.trim(),
            status: false
        };
        ctx.fnAgregarDueno(dueno);
        refNombre.current.value = '';
        refNombre.current.focus();
    }

    useEffect(()=> {
        refNombre.current.focus();
    }, []);

    return (
        <Fragment>
            <form onSubmit={onAgregar}>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" ref={refNombre} autoComplete="off" />
                <button type="submit" className={styles.btn}>Agregar</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;