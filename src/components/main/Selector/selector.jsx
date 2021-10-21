import React, { useState } from "react";
//external components
import { Select, MenuItem } from "@material-ui/core";

//CSS
import './selector.css'


const Selector = (vianda) =>{
    let opciones = [vianda.menu]
    return(
        <div className="select__product">
            <Select>
            {opciones.map((elemento, index) =>{
                <MenuItem value={1}>{elemento.quantity}1 PLATOS      {elemento.price}</MenuItem>
            })}
            </Select>
        </div>
    )

}

export default Selector