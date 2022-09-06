import React, { useState } from "react";
import { putProduct, delProduct} from "../actions/index";
import "./CardsM.css"


export default function CardM({action, producto, Query}) {
  

    return(
        <div className="todo">
            <h5 className="input2">{action} {producto} {Query} </h5>
        </div>
    )    
}