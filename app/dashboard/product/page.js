"use client";

import { useState } from "react";
import Table from "@/components/tables/Table";
import ManagementModal from "@/components/modals/ManagementModal";
import ManagementInput from "@/components/inputs/ManagementInput";

const ProductManagement = () => {
    const [openCreate, setOpenCreate] = useState(false);

    const data = [
        { nombre: "Americano", precio: 5000, descripción: "Un espresso diluido con agua caliente para crear una taza de café negro, suave y aromático. Perfecto para aquellos que disfrutan de un café menos concentrado." },
        { nombre: "Cappuccino Americano", precio: 6500, descripción: "Un clásico cappuccino preparado con una dosis de espresso, leche vaporizada y una generosa capa de espuma de leche. Este café es un equilibrio ideal entre lo fuerte y lo cremoso." },
        { nombre: "Cappuccino", precio: 6000, descripción: "Una combinación de un espresso fuerte con partes iguales de leche vaporizada y espuma de leche. Coronado con una espolvoreada de cacao o canela, favorito de los amantes del café." },
        { nombre: "Caramel Macchiato", precio: 7000, descripción: "Un delicioso espresso combinado con leche vaporizada y un toque de vainilla, con un generoso chorrito de caramelo. Ideal para quienes disfrutan de un café dulce y cremoso." },
        { nombre: "Espresso Doble", precio: 5500, descripción: "Una porción doble de espresso, rica y fuerte, perfecta para un impulso de energía adicional o para los verdaderos amantes del café intenso." },
    ];

    const actions = [
        {
            icon: "bx:edit",
            className: "text-stone-700 hover:text-stone-500",
            onClick: (row) => console.log("Editar", row),
        },
        {
            icon: "fluent:delete-16-regular",
            className: "text-red-700 hover:text-red-500",
            onClick: (row) => console.log("Eliminar", row),
        },
    ];

    return (
        <section className="mt-20">
            <Table
                title="Productos"
                description="Desde esta sección puede gestionar los productos disponibles: crear, actualizar o eliminar según sea necesario."
                columns={[
                    { label: "Nombre", field: "nombre" },
                    { label: "Descripción", field: "descripción" },
                    { label: "Precio", field: "precio" }
                ]}
                data={data}
                actions={actions}
                showAddButton={true}
                onAdd={() => setOpenCreate(true)}
            />
            <ManagementModal
                open={openCreate}
                onClose={() => setOpenCreate(false)}
                title="Crear producto"
                description="Ingrese los datos del nuevo producto:"
                confirmText="Guardar producto"
                onConfirm={() => {
                    console.log("Producto creado");
                    setOpenCreate(false);
                }}
            >
                <ManagementInput
                    type="text"
                    label="Nombre"
                    placeholder="Nombre del producto"
                />
                <ManagementInput
                    type="text"
                    label="Descripción"
                    placeholder="Descripción del producto"
                />
                <ManagementInput
                    type="number"
                    label="Precio"
                    placeholder="Precio del producto"
                />
            </ManagementModal>
        </section>
    );
};

export default ProductManagement;