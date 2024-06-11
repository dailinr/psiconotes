import React, { useState } from 'react';
import '../../css/modalInforme.css'

export const ModalInforme = ({ onClose, show, onSave, sesion }) => {
  const [resumen, setResumen] = useState('');
  const [objetivos, setObjetivos] = useState('');
  const [trabajoRealizado, setTrabajoRealizado] = useState('');
  const [observacion, setObservacion] = useState('');
  const [respuestaEstudiante, setRespuestaEstudiante] = useState('');
  const [conclusiones, setConclusiones] = useState('');
  const [planAccion, setPlanAccion] = useState('');
  const [notasAdiccionales, setNotasAdiccionales] = useState('');
  

  const handleResumenChange = (event) => {
    setResumen(event.target.value);
  };
  const handleObjetivosChange = (event) => {
    setObjetivos(event.target.value);
  };
  const handleTrabajoRealizadoChange = (event) => {
    setTrabajoRealizado(event.target.value);
  };
  const handleObservacionChange = (event) => {
    setObservacion(event.target.value);
  };
  const handleRespuestaEstudianteChange = (event) => {
    setRespuestaEstudiante(event.target.value);
  };
  const handleConclusionesChange = (event) => {
    setConclusiones(event.target.value);
  };
  const handlePlanAccionChange = (event) => {
    setPlanAccion(event.target.value);
  };
  const handleNotasAdiccionalesChange = (event) => {
    setNotasAdiccionales(event.target.value);
  };

  const handleSave = () => {
    const informe = {
      resumen,
      objetivos,
      trabajoRealizado,
      observacion,
      respuestaEstudiante,
      conclusiones,
      planAccion,
      notasAdiccionales
    };

    fetch(`http://localhost:8080/api/v1/psicologos/1/informes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(informe)
    })
    .then(response => response.json())
    .then(data => {
      fetch(`http://localhost:8080/psicoNote/v1/sesion/actualizarInforme/${sesion.id}/${data.id}`, {
        method: 'PUT'
      })
      .then(() => onSave(data))
      .catch(error => console.error('Error al actualizar la sesión:', error));
    })
    .catch(error => console.error('Error al guardar el informe:', error));
    
    onClose();
  };


  return (
    <div>

      <div className='modal-contendor'>
        <div className='modal-contenido'>

          <div className='mod-head'>
            <h5 className="modal-titulo">Agregar Informe</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}>
              <i class="bi bi-x"></i>
            </button>
          </div>

          <div className='mod-body'>
            
            <div className='celda'>
              <p>Resumen</p>

              <textarea
                className="form-control"
                id="resumen"
                rows="2"
                value={resumen}
                onChange={handleResumenChange}
              />
            </div>
            

            <div className='celda'>
            <p >Objetivos</p>

            <textarea
              className="form-control"
              id="objetivos"
              rows="2"
              value={objetivos}
              onChange={handleObjetivosChange}
            />
            </div>

            <div className='celda'>
            <p >Trabajo Realizado</p>

            <textarea
              className="form-control"
              id="trabajoRealizado"
              rows="2"
              value={trabajoRealizado}
              onChange={handleTrabajoRealizadoChange}
            />
            </div>

            <div className='celda'>
            <p >Observaciones</p>

            <textarea
              className="form-control"
              id="observaciones"
              rows="2"
              value={observacion}
              onChange={handleObservacionChange}
            />
            </div>

            <div className='celda'>
            <p >Respuestas del estudiante</p>
            <textarea
              className="form-control"
              id="respuestaEstudiante"
              rows="2"
              value={respuestaEstudiante}
              onChange={handleRespuestaEstudianteChange}
            />
            </div>

            <div className='celda'>
            <p >Conclusiones</p>
            <textarea
              className="form-control"
              id="conclusiones"
              rows="2"
              value={conclusiones}
              onChange={handleConclusionesChange}
            />
            </div>

            <div className='celda'>
            <p >Plan de acción</p>
            <textarea
              className="form-control"
              id="planAccion"
              rows="2"
              value={planAccion}
              onChange={handlePlanAccionChange}
            />
            </div>

            <div className='celda'>
            <p >Notas Adiccionales (opcional) </p>
            <textarea
              className="form-control"
              id="notasAdiccionales"
              rows="2"
              value={notasAdiccionales}
              onChange={handleNotasAdiccionalesChange}
            />
            </div>
          </div>

          <div className='mod-foot '>
            
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={handleSave} >Añadir</button>
            
          </div>
        </div>

      </div>
        
    </div>
  );
};
