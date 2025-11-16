"use client";

import { useState } from "react";
import Table from "@/components/tables/Table";
import ManagementModal from "@/components/modals/ManagementModal";
import ManagementInput from "@/components/inputs/ManagementInput";

const ProductTypeManagement = () => {
    const [openCreate, setOpenCreate] = useState(false);

    const data = [
        { nombre: "Bebidas Calientes" },
        { nombre: "Bebidas Frías" },
        { nombre: "Panadería y Pastelería" },
        { nombre: "Desayunos y Brunch" },
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
        <section className="mt-32">
            <Table
                title="Tipos de producto"
                description="Desde esta sección puede gestionar los tipos de producto disponibles: crear, actualizar o eliminar según sea necesario."
                columns={[
                    { label: "Nombre", field: "nombre" }
                ]}
                data={data}
                actions={actions}
                showAddButton={true}
                onAdd={() => setOpenCreate(true)}
            />
            <ManagementModal
                open={openCreate}
                onClose={() => setOpenCreate(false)}
                title="Crear tipo de producto"
                description="Ingrese los datos del nuevo tipo de producto:"
                confirmText="Guardar tipo de producto"
                onConfirm={() => {
                    console.log("Tipo de producto creado");
                    setOpenCreate(false);
                }}
            >
                <ManagementInput
                    type="text"
                    label="Nombre"
                    placeholder="Nombre del tipo de prodcuto"
                />
            </ManagementModal>
        </section>
    );
};

export default ProductTypeManagement;