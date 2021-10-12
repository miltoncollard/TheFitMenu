import React from "react";

//internal components
import questions_data from '../../../data/questions_data';

const Questions = () => {

    return ( 
        <section className="questions section">
           <div className="questions__container">
               <div className="accordion__content">
                    {questions_data.map((item, i) =>{
                        <div className="item__data">
                            <div className="data__title">
                                <h2>{item.question}</h2>
                            </div>
                            <div className="data__content">{item.answer}</div>
                        </div>
                    })}
               </div>
           </div>
        </section>
    )
  }
  
  export default Questions;