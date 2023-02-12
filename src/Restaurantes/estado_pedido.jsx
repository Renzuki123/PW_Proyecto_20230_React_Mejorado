import React, { useState } from 'react';

const EstadoPedido = () => {
    const [pedidos, setPedidos] = useState([
        { id: 1, estado: "en preparación", codigo: "ABC123" },
        { id: 2, estado: "en preparación", codigo: "DEF456" },
        { id: 3, estado: "en preparación", codigo: "GHI789" }
    ]);

    return (
        <div>
            <h1>Estado del Pedido</h1>
            <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Estado</th>
                <th>Código</th>
            </tr>
            </thead>
            <tbody>
                {pedidos.map(pedido => (
                    <tr key={pedido.id}>
                        <td>{pedido.id}</td>
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