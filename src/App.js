import React from 'react';
import TareasProvider from './context/tareaContext';

import Titulo from './componentes/Titulo';
import Formulario from './componentes/Formulario';
import ListaDuenos from './componentes/ListaDuenos';

function App() {
  return (
    <TareasProvider>
      <Titulo />
      <Formulario />
      <ListaDuenos />
    </TareasProvider>
  );
}

export default App;
