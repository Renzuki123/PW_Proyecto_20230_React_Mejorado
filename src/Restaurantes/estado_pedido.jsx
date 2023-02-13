import React, { useState } from 'react';

const EstadoPedido = () => {
    const [pedidos, setPedidos] = useState([
        { id: 1, nombre: "Renzo", direccion: "Pueblo Libre", estado: "en preparación", codigo: "ABC123" },
        { id: 2, nombre: "Juan", direccion: "Jesus Maria", estado: "en preparación", codigo: "DEF456" },
        { id: 3, nombre: "Roberto", direccion: "Los Olivos", estado: "en preparación", codigo: "GHI789" }
    ]);

    return (
        <div>
            <center><h1>Estado del Pedido</h1></center>
            <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Estado</th>
                <th>Código</th>
            </tr>
            </thead>
            <tbody>
                {pedidos.map(pedido => (
                    <tr key={pedido.id}>
                        <td>{pedido.id}</td>
                        <td>{pedido.nombre}</td>
                        <td>{pedido.direccion}</td>
                        <td>{pedido.estado}</td>
                        <td>{pedido.codigo}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default EstadoPedido;