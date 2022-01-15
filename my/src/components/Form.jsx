import React, { useState } from 'react';
function Form() {
    const[countMessage, setCountMessage] = useState(0);
    const[historiMessages, setHistoriMessages] = useState([]);

    const upCountMessage = (countMessage) => {
        setCountMessage(countMessage + 1);
    }

    const pushhistoriMessages = (historiMessages) => {
        const message = {
            name: "",
            text: "",
            dataTime: new Date
        }

        historiMessages.push(message);
        setCountMessage(historiMessages.length);
        setHistoriMessages([...historiMessages]);
    }


    return(
         <div className="Form_box">
            <div className="Box_title">
               Сообщение {countMessage}
            </div>
            <div className="Box_message">
                тут будут Сообщение
            </div>
            <div className="Box_send">
                <label >
                    Имя
                <input type="text"/>
                </label>

                <label>
                    Сообщение
                <textarea />
                </label>


             <button onClick={() => pushhistoriMessages(historiMessages)}>Добавить</button>
             </div>
        </div>
    );
}

export default Form;