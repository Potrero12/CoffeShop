import { createContext, useState } from 'react';
import { categorias as CategoriasDB } from "../data/categorias"

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    
    const [ categorias, setCategorias ] = useState(CategoriasDB);
    const [ categoriaActual, setcategoriaActual ] = useState(categorias[0]);
    const [ modal, setModal ] = useState(false);
    const [ producto, setProducto ] = useState({});

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(cat => cat.id === id)[0]
        setcategoriaActual(categoria);
    }

    const handleSetProducto = (producto) => {
        setProducto(producto)
    }

    // hace el efecto de toggle que cambia de false a true
    const handleClickModal = () => {
        setModal(!modal);
    }

    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handleSetProducto
        }}>
            {children}
        </QuioscoContext.Provider>
    );

}

export {
    QuioscoProvider
}
export default QuioscoContext;