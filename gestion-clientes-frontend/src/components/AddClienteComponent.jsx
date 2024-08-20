import React, { useEffect, useState } from 'react'
import { ComponenteReutilizable } from './ComponenteReutilizable';
import ClienteService from '../services/ClienteService';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddClienteComponent = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const{id}=useParams();//sirve para usar esa constante como parametro

  const saveOrUpdateCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, apellido, email };
    if(id){
      ClienteService.updateCliente(id,cliente)
        .then((response) => {
          console.log(response.data);
          navigate("/clientes");
        })
        .catch((error) => {
          console.error(error);
        });
    }else{
      ClienteService.createCliente(cliente)
        .then((response) => {
          console.log(response.data);
          navigate("/clientes");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(()=>{
    ClienteService.getClienteById(id).then(response=>{
      
      setNombre(response.data.nombre)
      setApellido(response.data.apellido)
      setEmail(response.data.email)
      
    }).catch(error=>{
      console.log("disparo nombre apellido y email");
      console.error(error)
    })
  },[])

  const title=()=>{
    if(id) return <span>Actualizar Contacto</span>
    return <span>Registrar Contacto</span>
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'></div>
          <h2 className='text-center'>{title()}</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <ComponenteReutilizable
                  parametroLabel="Nombre"
                  parametroPlaceHolder="Escriba su nombre"
                  parametroName="nombre"
                  parametroType="text"
                  valor={nombre}
                  setValor={setNombre}
                ></ComponenteReutilizable>
                <ComponenteReutilizable
                  parametroLabel="Apellido"
                  parametroPlaceHolder="Escriba su apellido"
                  parametroName="apellido"
                  parametroType="text"
                  valor={apellido}
                  setValor={setApellido}
                ></ComponenteReutilizable>
                <ComponenteReutilizable
                  parametroLabel="Email"
                  parametroPlaceHolder="Escriba su Email"
                  parametroName="email"
                  parametroType="email"
                  valor={email}
                  setValor={setEmail}
                ></ComponenteReutilizable>
                <button className="btn btn-success" onClick={(e) => saveOrUpdateCliente(e)}>Guardar</button>
                &nbsp;&nbsp;
                <Link to='/clientes' className='btn btn-danger'>Cancelar</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
