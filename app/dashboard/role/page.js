"use client";

import { useState } from "react";
import Table from "@/components/tables/Table";

const RoleManagement = () => {
    const [openCreate, setOpenCreate] = useState(false);

    const data = [
        { nombre: "Cliente" },
        { nombre: "Gerente" },
        { nombre: "Panadero" },
        { nombre: "Barista" },
        { nombre: "Camarero" },
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
        <section className="mt-28">
            <Table
                title="Roles"
                description="Desde esta sección puede actualizar o eliminar los roles disponibles según sea necesario."
                columns={[
                    { label: "Nombre", field: "nombre" }
                ]}
                data={data}
                actions={actions}
                showAddButton={false}
                onAdd={() => setOpenCreate(false)}
            />
        </section>
    );
};

export default RoleManagement;