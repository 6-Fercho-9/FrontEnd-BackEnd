import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { ListaComponente } from './components/ListaComponente'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
//import { AppRoutes } from './components/AppRoutes'
//import { AddClienteComponent } from './components/AddClienteComponent'
import { AppRoutes } from './components/AppRoutes'
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <HeaderComponent></HeaderComponent>
        <AppRoutes></AppRoutes>
      <FooterComponent></FooterComponent>
    </StrictMode>
  </BrowserRouter>
);
