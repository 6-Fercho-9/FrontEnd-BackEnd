import React from 'react'

/*
esto es solo un header
donde lo que hace es volver al inicio
*/
export const HeaderComponent = () => {
  return (
    <>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href="/" className='navbar-brand'>Gestion Clientes</a>
                </div>
            </nav>
        </header>
    </>
  )
}
