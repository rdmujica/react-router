import React, { PureComponent } from 'react'

import './generic-page.css'
class NotFound extends PureComponent {
  handleBackClick = () => {
    this.props.history.goBack()
  }

  handleForwardClick = () => {
    this.props.history.goForward()
  }

  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1)
    this.props.history.push(`/videos?id=${random}`, { id: random })
  }
  render() {
    return (
      <div className='Page NotFound'>
        <h1>404</h1>
        <h3 className='SadFace'>:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button onClick={this.handleBackClick} className='Button'>
          Ir a la siguiente Anterior
        </button>
        <button onClick={this.handleForwardClick} className='Button'>
          Ir a la siguiente Página
        </button>
        <button onClick={this.handleRandomClick} className='Button'>
          Video Random
        </button>
      </div>
    )
  }
}

export default NotFound
