"use client";

import { useState } from "react";
import Table from "@/components/tables/Table";
import ManagementModal from "@/components/modals/ManagementModal";
import ManagementInput from "@/components/inputs/ManagementInput";

const PeopleManagement = () => {
    const [openCreate, setOpenCreate] = useState(false);

    const data = [
        { documento: 1234, nombres: "Liam", apellidos: "James", correo: "liam@example.com", telefono: "456", rol: "Panadero" },
        { documento: 1234, nombres: "Olivia", apellidos: "Emma", correo: "oliviaemma@example.com", telefono: "456", rol: "Camarero" },
        { documento: 1234, nombres: "William", apellidos: "Benjamin", correo: "william.benjamin@example.com", telefono: "456", rol: "Barista" },
        { documento: 1234, nombres: "Henry", apellidos: "Theodore", correo: "henrytheodore@example.com", telefono: "456", rol: "Panadero" },
        { documento: 1234, nombres: "Amelia", apellidos: "Elijah", correo: "amelia.elijah@example.com", telefono: "456", rol: "Barista" },
    ];

    const actions = [
        {
            icon: "arcticons:updater",
            className: "text-stone-700 hover:text-stone-500 stroke-[3]",
            onClick: (row) => console.log("Actualizar rol", row),
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
                title="Personal"
                description="Desde esta sección puede crear cuentas para su equipo y actualizar los roles del personal ya registrado."
                columns={[
                    { label: "Documento", field: "documento" },
                    { label: "Nombres", field: "nombres" },
                    { label: "Apellidos", field: "apellidos" },
                    { label: "Correo electrónico", field: "correo" },
                    { label: "Teléfono", field: "telefono" },
                    { label: "Rol", field: "rol" },
                ]}
                data={data}
                actions={actions}
                showAddButton={true}
                onAdd={() => setOpenCreate(true)}
            />
            <ManagementModal
                open={openCreate}
                onClose={() => setOpenCreate(false)}
                title="Crear perfil de empleado"
                description="Ingrese los datos del nuevo empleado:"
                confirmText="Guardar empleado"
                onConfirm={() => {
                    console.log("Empleado creado");
                    setOpenCreate(false);
                }}
            >
                <ManagementInput
                    type="text"
                    label="Documento"
                    placeholder="Documento de identidad"
                />
                <ManagementInput
                    type="text"
                    label="Nombres"
                    placeholder="Nombres completos"
                />
                <ManagementInput
                    type="text"
                    label="Apellidos"
                    placeholder="Apellidos completos"
                />
                <ManagementInput
                    type="email"
                    label="E-mail"
                    placeholder="Correo electrónico"
                />
                <ManagementInput
                    type="tel"
                    label="Teléfono"
                    placeholder="Teléfono celular"
                />
                <ManagementInput
                    type="text"
                    label="Rol"
                    placeholder="Seleccione un rol"
                />
            </ManagementModal>
        </section>
    );
};

export default PeopleManagement;