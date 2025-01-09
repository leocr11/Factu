import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { factusApi } from '../services/factusApi';

const CrearFactura = () => {
  const [rangosNumeracion, setRangosNumeracion] = useState([]);
  const [tributos, setTributos] = useState([]);
  const [productos, setProductos] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [rangosRes, tributosRes] = await Promise.all([
          factusApi.get('/rangos-numeracion'),
          factusApi.get('/tributos'),
        ]);
        setRangosNumeracion(rangosRes.data);
        setTributos(tributosRes.data);
      } catch (error) {
        console.error('Error cargando datos:', error);
      }
    };

    cargarDatos();
  }, []);

  const onSubmit = async (data) => {
    try {
      await factusApi.post('/facturas', data);
      alert('Factura creada exitosamente');
    } catch (error) {
      alert('Error al crear la factura');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Crear Nueva Factura</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Datos del Cliente */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Datos del Cliente</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Nombre/Razón Social</label>
              <input
                {...register("cliente.nombre", { required: true })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">NIT</label>
              <input
                {...register("cliente.nit", { required: true })}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </section>

        {/* Productos */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Productos</h2>
          {productos.map((producto, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 mb-4">
              <input
                {...register(`productos.${index}.descripcion`)}
                placeholder="Descripción"
                className="w-full p-2 border rounded"
              />
              <input
                {...register(`productos.${index}.cantidad`)}
                type="number"
                placeholder="Cantidad"
                className="w-full p-2 border rounded"
              />
              <input
                {...register(`productos.${index}.valorUnitario`)}
                type="number"
                placeholder="Valor Unitario"
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => {
                  const newProductos = [...productos];
                  newProductos.splice(index, 1);
                  setProductos(newProductos);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setProductos([...productos, {}])}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Agregar Producto
          </button>
        </section>

        <button
          type="submit"
          className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          Crear Factura
        </button>
      </form>
    </div>
  );
};

export default CrearFactura;