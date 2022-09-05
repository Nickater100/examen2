import React, { useState } from "react";
import { useEffect } from "react";
import { putProduct, delProduct, allProduct} from "../actions/index";
import "./Cards.css"


export default function Card({name, id}) {
  
    const [modificar, setModificar] = useState({producto: name})
    
    const selectedChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setModificar({...modificar, [name]:value})
    }

    return(
        <div className="todo">
            <input className={"input"}
                                        name="producto"
                                        value={modificar.producto} 
                                        onChange={selectedChange} 
                                        placeholder="campo modificar"/>
            <button className="boton" onClick={putProduct(id, modificar)}>Modificar</button>
            <button className="boton" onClick={delProduct(id)}>Delete</button>
        </div>
    )    
}