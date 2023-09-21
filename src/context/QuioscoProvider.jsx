import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { categorias as CategoriasDB } from "../data/categorias"

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    
    const [ categorias, setCategorias ] = useState(CategoriasDB);
    const [ categoriaActual, setcategoriaActual ] = useState(categorias[0]);
    const [ modal, setModal ] = useState(false);
    const [ producto, setProducto ] = useState({});
    const [ pedido, setPedido ] = useState([]);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        const nuevtoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0);
        setTotal(nuevtoTotal);
    }, [pedido])
    

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(cat => cat.id === id)[0]
        setcategoriaActual(categoria);
    }

    const handleSetProducto = (producto) => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        if(pedido.some( pedidoState => pedidoState.id === producto.id )){
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(pedidoActualizado);
            toast.success('Guardado Correctamente');
          } else {
            setPedido([...pedido, producto]);
            toast.success('Agregado al pedido');
          }
    }

    // hace el efecto de toggle que cambia de false a true
    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleEditarCantidad = (id) => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0];
        setProducto(productoActualizar);
        setModal(!modal);
    }

    const handleEliminarProductoPedido = (id) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado);
        toast.success('Eliminado del pedido')
    }

    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handleSetProducto,
            pedido,
            handleAgregarPedido,
            handleEditarCantidad,
            handleEliminarProductoPedido,
            total
        }}>
            {children}
        </QuioscoContext.Provider>
    );

}

export {
    QuioscoProvider
}
export default QuioscoContext;