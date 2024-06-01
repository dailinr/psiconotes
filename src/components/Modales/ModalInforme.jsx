import React from 'react'

export const ModalInforme = ({ onClose }) => {

   
  return (
    <div>
       < div className="modal-container">
      <div className="modal-backdrop" />
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Informe</h5>
            <button type="button" className="btn-close"  aria-label="Close"></button>
          </div>
          <div className="modal-body ">
            
            <p style={{ color: 'black', fontWeight: '500', fontSize: '19px'}}>Observaciones</p>
            <textarea className='form-control' id='observaciones' rows='5'> </textarea>            
        
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose} >Cerrar</button>
            <button type="button" className="btn btn-primary" >Añadir</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}