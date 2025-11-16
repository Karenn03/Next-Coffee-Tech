"use client";

import { useState } from "react";
import Table from "@/components/tables/Table";
import ManagementModal from "@/components/modals/ManagementModal";
import ManagementInput from "@/components/inputs/ManagementInput";

const PromotionManagement = () => {
    const [openCreate, setOpenCreate] = useState(false);

    const data = [
        { nombre: "Promoción 1", descripción: "Promoción", fechaDeInicio: "15/11/2025", fechaFinal: "15/12/2025", tipoDeDescuento: "Descuento por Cantidad", estado: "Activa" },
        { nombre: "Promoción 2", descripción: "Promoción", fechaDeInicio: "15/11/2025", fechaFinal: "15/12/2025", tipoDeDescuento: "Descuento por Temporada", estado: "Inactiva" },
        { nombre: "Promoción 3", descripción: "Promoción", fechaDeInicio: "15/11/2025", fechaFinal: "15/12/2025", tipoDeDescuento: "Descuento por Fidelidad", estado: "Programada" },
        { nombre: "Promoción 4", descripción: "Promoción", fechaDeInicio: "15/11/2025", fechaFinal: "15/12/2025", tipoDeDescuento: "Descuento de Lanzamiento", estado: "Suspendida" },
        { nombre: "Promoción 4", descripción: "Promoción", fechaDeInicio: "15/11/2025", fechaFinal: "15/12/2025", tipoDeDescuento: "Descuento por Compra Mínima", estado: "Activa" },
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
                title="Promociones"
                description="Desde esta sección puede gestionar las promociones disponibles: crear, actualizar o eliminar según sea necesario."
                columns={[
                    { label: "Nombre", field: "nombre" },
                    { label: "Descripción", field: "descripción" },
                    { label: "Fecha de inicio", field: "fechaDeInicio" },
                    { label: "Fecha final", field: "fechaFinal" },
                    { label: "Tipo de descuento", field: "tipoDeDescuento" },
                    { label: "Estado", field: "estado" }
                ]}
                data={data}
                actions={actions}
                showAddButton={true}
                onAdd={() => setOpenCreate(true)}
            />
            <ManagementModal
                open={openCreate}
                onClose={() => setOpenCreate(false)}
                title="Crear promoción"
                description="Ingrese los datos de la nueva promoción:"
                confirmText="Guardar promoción"
                onConfirm={() => {
                    console.log("Promoción creada");
                    setOpenCreate(false);
                }}
            >
                <ManagementInput
                    type="text"
                    label="Nombre"
                    placeholder="Nombre de la promoción"
                />
                <ManagementInput
                    type="text"
                    label="Descripción"
                    placeholder="Descripción de la promoción"
                />
                <ManagementInput
                    type="datetime-local"
                    label="Fecha de inicio"
                    placeholder="Fecha de inicio"
                />
                <ManagementInput
                    type="datetime-local"
                    label="Fecha final"
                    placeholder="Fecha final"
                />
                <ManagementInput
                    type="text"
                    label="Tipo de descuento"
                    placeholder="Seleccione el tipo de descuento"
                />
                <ManagementInput
                    type="number"
                    label="Valor"
                    placeholder="Valor del descuento"
                />
                <ManagementInput
                    type="text"
                    label="Estado"
                    placeholder="Seleccione el estado de la promoción"
                />
            </ManagementModal>
        </section>
    );
};

export default PromotionManagement;