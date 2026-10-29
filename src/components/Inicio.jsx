import { useState } from 'react'
import './Inicio.css'
import fotoInicio from '../image/fotoInicio/FotoInicio.png'

function Inicio() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="inicio-section">
      <div className="inicio-hero">
        <div className="inicio-image-container">
          <img 
            src={fotoInicio}
            alt="Vela aromática"
            className="inicio-image"
          />
          <div className="inicio-overlay"></div>
        </div>
        <div className="inicio-content">
          <div className="inicio-welcome">
            <h2 className="inicio-title">Bienvenido</h2>
            <p className="inicio-subtitle">En Escences nos dedicamos a crear productos aromáticos, de decoración y para obsequiar. </p>
            <button 
              className="btn-conocer-mas"
              onClick={() => setShowModal(true)}
            >
              Más sobre nosotros
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="modal-title">Sobre Nosotros</h2>
            <div className="modal-description">
              
              <p>
                 Velas aromáticas y decorativas, souvenirs, aromatizadores y piezas de yeso. Los personalizamos para que puedas elegir todo a tu preferencia.</p> 
                <p>Cada producto es elaborado cuidadosamente para brindarte lo mejor. ¡Transforma tu espacio en un ambiente único con nuestros productos y empeza a regalar sensaciones!
              </p>
              <p>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Inicio
