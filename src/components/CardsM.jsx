import React, { useState } from "react";
import { putProduct, delProduct} from "../actions/index";


export default function CardM({action, producto, Query}) {
  

    return(
        <div className="todo">
            <h5 className={"subTitle"}>action: {action}</h5>
            <h5 className={"subTitle"}>Producto: {producto}</h5>
            <h5 className={"subTitle"}>Query: {Query}</h5>
            <p>------------------------</p>
        </div>
    )    
}