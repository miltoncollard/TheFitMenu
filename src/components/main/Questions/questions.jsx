import React, {useState} from "react";
//css
import './questions.css';
//internal components
import questions_data from '../../../data/questions_data';

const Questions = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) =>{
        if (selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }

    return ( 
        <section className="questions section">
           <div className="questions__container">
               <div className="accordion__content">
                    {questions_data.map((item, i) =>(

                        <div className="item__data"  key={item.id}>
                            <div className="data__title" onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'data__content show' : 'data__content'}>{item.answer}</div>
                        </div>

                    ))}
               </div>
           </div>
        </section>
    )
  }
  
  export default Questions;