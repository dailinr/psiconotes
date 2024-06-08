import React from 'react';
import Modal from 'react-bootstrap/Modal';

import {  PDFViewer } from '@react-pdf/renderer';
import { PDF } from './PDF.jsx';

export const MostrarInforme = ({ show, handleClose,  nombre, fecha, hora, observacion  }) => {
    const modalStyle = {
        // maxWidth: '70%', 
        //maxHeight: '100vh',
    };

    const pdfViewerStyle = {
        width: '100%',
        height: '100vh',
    };

    return (
        <Modal show={show} onHide={handleClose} style={modalStyle} >

            <PDFViewer  style={pdfViewerStyle}>
                <PDF nombre={nombre} fecha={fecha} hora={hora} observacion={observacion}/>
            </PDFViewer> 
            
        </Modal>
    );
}
