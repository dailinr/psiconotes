import React from 'react';
import Modal from 'react-bootstrap/Modal';

import {  PDFViewer } from '@react-pdf/renderer';
import { PDF } from './PDF.jsx';

export const MostrarInforme = ({ show, handleClose,  session, informe }) => {

    const pdfViewerStyle = {
        width: '100%',
        height: '100vh',
    };

    return (
        <Modal show={show} onHide={handleClose}  >

            <PDFViewer  style={pdfViewerStyle}>
                <PDF session={session} informe={informe} />
            </PDFViewer> 
            
        </Modal>
    );
}
