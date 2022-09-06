import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProduct, addProduct } from "../actions/index";
import "./Form.css"



 function validate(producto){
    let errores = {};
    if (!producto.producto) {
        errores.producto = 'Nombre es requerido';
    } else if (producto.producto.length < 4) {
        errores.producto = 'Al menos 4 caracteres';
    } return errores
}

export default function AddGame() {
    const [productoNuevo, setProductoNuevo] = useState({producto:""})
    const [errores, setErrores] = useState({})
    
     const selectedChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setErrores(validate({
            ...productoNuevo,
            [name]:value
        }))
        setProductoNuevo({...productoNuevo, [name]:value}) 
    }



      const handleSubmit = (e) => {
        e.preventDefault();
    }

   

    return (
        
                    <form className= "form" onSubmit={handleSubmit}>
                                <label className="label"> Producto:
                                    <input className={errores.producto? "error" : "exito"}
                                        name= "producto"
                                        value={productoNuevo.name} 
                                        onChange={selectedChange} 
                                        placeholder="producto"/>
                                        {errores.producto ? <p className ={"error"}>{errores.producto}</p> : null}
                                </label>
                                    <button className= "boton-agregar" onClick={addProduct(productoNuevo)}>Agregar producto</button>                                         
                    </form>
     )
    }