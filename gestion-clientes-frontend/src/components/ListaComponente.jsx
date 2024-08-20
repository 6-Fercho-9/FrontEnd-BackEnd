import React, { useEffect, useState } from "react";
import ClienteService from "../services/ClienteService";
import { Link } from "react-router-dom";
/**
 * esto lo que hace es tener un useEfect para que se dispare la llamada a la api
 * cosa que lo muestre en el table
 */
export const ListaComponente = () => {
  const [contacto,SetContacto]=useState([])
  useEffect(()=>{
    console.log("me dispare");
    listarClientes()
  },[])

  const listarClientes=()=>{
    ClienteService.getAllClientes()
      .then((response) => {
        SetContacto(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("me dispare en error al listar")
        console.error(error);
      });
  }
    const deleteCliente=(idCliente)=>{
      ClienteService.deleteCliente(idCliente).then(response=>{
        listarClientes();

      }).catch(error=>{
        console.error(error)
      })
    }
  return (
    <>
      <h2 className="text-center" >Lista Empleados</h2>
      
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th >ID</th>
            <th >Nombre</th>
            <th >Apellido</th>
            <th >Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                contacto.map(
                    elementoContacto=>(
                        <tr key={elementoContacto.id}>
                          <td>{elementoContacto.id}</td>
                          <td>{elementoContacto.nombre}</td>
                          <td>{elementoContacto.apellido}</td>
                          <td>{elementoContacto.email}</td>
                          <td>
                            <Link className="btn btn-info" to={`/edit-cliente/${elementoContacto.id}`}>Actualizar</Link>
                            &nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={()=>{deleteCliente(elementoContacto.id)}} >Eliminar</button>
                          </td>
                          
                        </tr>
                    )
                )
            }        
        </tbody>
      </table>
      <Link to='/add-cliente' className='btn btn-primary mb-2'>Agregar Cliente</Link>
    </>
  );
};
