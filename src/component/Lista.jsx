import React from 'react'
import { connect } from 'react-redux'

const Lista = ({product}) => (
  <section>
    <h4>Lista</h4>
    <div className="lista">
      {
        product.map(p => (
          <div className="item">
          <img src={p.foto} alt={p.nombre}/>
          <h3>{p.nombre}</h3>
          <div>
            <button>Agregar</button>
            <button>Eliminar</button>
          </div>
        </div>
        ))
      }
    </div>
  </section>
)
const mapStateToProps = state => ({
  product: state.product
});
const mapDispatchToProps = dispatch =>({})

export default connect(mapStateToProps, mapDispatchToProps)(Lista);