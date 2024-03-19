import styles from "./modal.module.css";
import { React, useState } from 'react';


const Modal = (modalDef) => {
    const [modal, setModal] = useState(modalDef);

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <>
            {modal && (
                <div>
                    poo
                </div>
            )
            }
        </>
    )
}

export default Modal