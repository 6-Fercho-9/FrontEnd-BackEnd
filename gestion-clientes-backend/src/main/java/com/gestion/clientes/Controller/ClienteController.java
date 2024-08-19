package com.gestion.clientes.Controller;

import com.gestion.clientes.Exception.ResourceNotFoundException;
import com.gestion.clientes.Model.Cliente;
import com.gestion.clientes.Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:5173")//para que pueda acceder el fronent
@RestController
@RequestMapping("/api/v1")
public class ClienteController {
    @Autowired
    private ClienteRepository clienteRepository;

    //para obtener todos los clientes con un endpoint /clientes
    @GetMapping("/clientes")
    public List<Cliente> listarCliente(){
        return  clienteRepository.findAll();
    }
    //para guardar un cliente con post y endpoint /clientes
    //para guardar en la BD
    @PostMapping("/clientes")
    public Cliente guardarCliente(@RequestBody Cliente cliente){
        return clienteRepository.save(cliente);
    }

    //para listar un cliente por id
    //para obtener los datos del cliente por ID
    @GetMapping("/clientes/{id}")
    public ResponseEntity<Cliente> listarClientePorId(@PathVariable Long id){
        Cliente cliente=clienteRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("El cliente con ese ID no existe: "+id));
        return ResponseEntity.ok(cliente);
    }
    //para actualizar el cliente por id
    @PutMapping("/clientes/{id}")
    public ResponseEntity<Cliente> actualizarCliente(@PathVariable Long id,@RequestBody Cliente clienteRequest){
        Cliente cliente=clienteRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El cliente con ese ID no existe: "+id));
        cliente.setNombre(clienteRequest.getNombre());
        cliente.setApellido(clienteRequest.getApellido());
        cliente.setEmail(clienteRequest.getEmail());
        Cliente c=clienteRepository.save(cliente);
        return ResponseEntity.ok(c);
    }
    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarCliente(@PathVariable Long id){
        Cliente cliente=clienteRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El cliente con ese ID no existe: "+id));
        clienteRepository.delete(cliente);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",true);
        return ResponseEntity.ok(response);
    }
}
