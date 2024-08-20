import React from 'react'
import { ListaComponente } from './ListaComponente'
import { AddClienteComponent } from './AddClienteComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<ListaComponente></ListaComponente>}></Route>
            <Route path='/clientes' element={<ListaComponente></ListaComponente>}></Route>
            <Route path='/add-cliente' element={<AddClienteComponent></AddClienteComponent>}></Route>
            <Route path='/edit-cliente/:id' element={<AddClienteComponent></AddClienteComponent>}></Route>
        </Routes>
    </>
  )
}
