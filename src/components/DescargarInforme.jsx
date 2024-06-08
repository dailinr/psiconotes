import React from 'react';
import { PDF } from './PDF.jsx'
import { PDFDownloadLink } from '@react-pdf/renderer'

export const DescargarInforme = ({ className }) => {
  return (
    <div className={className}>
        <PDFDownloadLink document={<PDF/>} fileName='informeStudent.pdf'>
        {
          ({loading, url, error, blob}) => 
            loading ? (
              <p style={{position: 'absolute', bottom: 0, fontSize: '16px'}}>
                Cargando informe... 
              </p>
              
            ): (
              <i class="bi bi-file-earmark-arrow-down"></i>
            )
        }
        </PDFDownloadLink>
    </div>
  );
};
