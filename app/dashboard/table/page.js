"use client";

import { useState } from "react";
import Table from "@/components/tables/Table";
import ManagementModal from "@/components/modals/ManagementModal";
import ManagementInput from "@/components/inputs/ManagementInput";

const TableManagement = () => {
    const [openCreate, setOpenCreate] = useState(false);

    const data = [
        { número: 1, sede: "Sede 1" },
        { número: 2, sede: "Sede 2" },
        { número: 3, sede: "Sede 3" },
        { número: 4, sede: "Sede 4" },
        { número: 5, sede: "Sede 5" },
    ];

    const actions = [
        {
            icon: "bx:edit",
            className: "text-stone-700 hover:text-stone-500 stroke-[3] ",
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
                title="Mesas"
                description="Desde esta sección puede gestionar las mesas disponibles: crear, actualizar o eliminar según sea necesario."
                columns={[
                    { label: "Número", field: "número" },
                    { label: "Sede", field: "sede" }
                ]}
                data={data}
                actions={actions}
                showAddButton={true}
                onAdd={() => setOpenCreate(true)}
            />
            <ManagementModal
                open={openCreate}
                onClose={() => setOpenCreate(false)}
                title="Crear mesa"
                description="Ingrese los datos de la nueva mesa:"
                confirmText="Guardar mesa"
                onConfirm={() => {
                    console.log("Mesa creada");
                    setOpenCreate(false);
                }}
            >
                <ManagementInput
                    type="text"
                    label="Número"
                    placeholder="Número de mesa"
                />
                <ManagementInput
                    type="text"
                    label="Sede"
                    placeholder="Seleccione una sede"
                />
            </ManagementModal>
        </section>
    );
};

export default TableManagement;