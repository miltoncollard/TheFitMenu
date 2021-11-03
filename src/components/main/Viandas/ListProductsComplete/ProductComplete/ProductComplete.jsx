import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';

//external components
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//internal componets
import imgClasica from '../../../../../assets/img/products/clasica.png'
import imgLight from '../../../../../assets/img/products/light.png'
import imgProteica from '../../../../../assets/img/products/proteica.png'
import imgVeggie from '../../../../../assets/img/products/veggie.png'
//CSS
import './ProductComplete.css'


const ProductComplete = (vianda) =>{

    const [opcion, setOpcion] = useState('');

    const handleChange = (event) => {
        setOpcion(event.target.value);
    };
    
    let img
    let eleccion = []
    
    if(vianda.type === 'Clásico'){
        img = imgClasica
    }else{
        if(vianda.type === 'Protéico'){
            img = imgProteica
        }else{
            if(vianda.type === 'Veggie'){
                img = imgVeggie
            }else{
                if(vianda.type === 'Light'){
                    img =imgLight
                }
            }
        }
    }

    return(
        <div className="product__card">
            <div className="product__card__img">
                <img src={img}/>
            </div>
            <div className="product__card__text">
                <Box sx={{ minWidth: 180 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{vianda.type}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={opcion}
                            label="Opcion"
                            onChange={handleChange}
                            className="MuiSelect__Select"
                        >
                            {vianda.menu.map((option) =>(
                                
                                <MenuItem className="MuiSelect__MenuItem" value={option}>
                                    <h5>{option.quantity} PLATOS</h5>
                                    <p>${option.price}</p>
                                </MenuItem>
                            ))}
                        </Select>

                        <Link to={{ pathname: `/menu/${vianda.type}`, state: { plates: opcion, id: vianda.id, type: vianda.type}}} className="link"><button>COMPRAR</button></Link>
                    </FormControl>
                </Box>
            </div>
            
        </div>
    )

}

export default ProductComplete