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
        <div className= "fondo-game-add">
            <div className= "container-black">
                    <form className= "agregarGame" onSubmit={handleSubmit}>
                        <div className= "container-esc-img">
                            <div className= "container-img">
                                {/* <input className="img-subir" type="file" name="file"/> */}
                            </div>
                            <div className="descripcion-juego">
                                <p className="producto"> Producto:
                                    <input className={errores.producto? "error" : "exito"}
                                        name= "producto"
                                        value={productoNuevo.name} 
                                        onChange={selectedChange} 
                                        placeholder="producto"/>
                                        {errores.producto ? <p className ={"error"}>{errores.producto}</p> : null}
                                </p>
                                <div>
                                                       
                                </div>
                                <div>
                                    <button className= "boton-agregar" onClick={addProduct(productoNuevo)}>Agregar producto</button>
                                </div>
                            </div>                                           
                        </div>
                    </form>
            </div>
        </div>
    )
    }