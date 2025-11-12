"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function PickupModal({ trigger }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedStore, setSelectedStore] = useState(null);

  const stores = [
    {
      name: "Centro Comercial Portal 80",
      address: "Av Cl 80 #100 - 52",
      lat: 4.71084,
      lng: -74.11192,
    },
    {
      name: "Alkosto Av 68",
      address: "Av. 68 #Calle 72 - 43",
      lat: 4.67993,
      lng: -74.08528,
    },
    {
      name: "Diver Plaza",
      address: "Transversal 99 70A - 89",
      lat: 4.70095,
      lng: -74.11524,
    },
    {
      name: "Centro Comercial Nuestro Bogotá",
      address: "Av Ciudad de Cali #55A - 75",
      lat: 4.68433,
      lng: -74.11543,
    },
    {
      name: "Titán Plaza",
      address: "Av. Cra. 72 #80 - 94",
      lat: 4.6948,
      lng: -74.08639,
    },
    {
      name: "Modelia",
      address: "Cl. 23f #74A - 81",
      lat: 4.66518,
      lng: -74.12065,
    },
    {
      name: "Skandia",
      address: "AV. 19 #109A - 30",
      lat: 4.69596,
      lng: -74.05027,
    },
  ];

  const mapUrl = selectedStore
    ? `https://www.google.com/maps?q=${selectedStore.lat},${selectedStore.lng}&z=15&output=embed`
    : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15905.632809443112!2d-74.1094988!3d4.6989312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1762570166812!5m2!1ses-419!2sco";

  return (
    <>
      <div onClick={onOpen} className="cursor-pointer">
        {trigger}
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={() => {
          setSelectedStore(null);
          onClose();
        }}
        hideCloseButton
        className="bg-[#D2CFCA] p-10 rounded-xl max-w-[1400px] w-fit"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-xl font-semibold text-[#4A362F] font-fjalla mb-3">
                Realizar pedido para recoger
              </ModalHeader>
              <ModalBody className="font-montserrat">
                <div className="flex gap-5 w-full h-full">
                  <div className="rounded-xl overflow-hidden shadow-md w-[700px] h-[400px]">
                    <iframe
                      src={mapUrl}
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full border-0"
                    />
                  </div>
                  <div className="flex flex-col w-[450px]">
                    <input
                      type="text"
                      placeholder="Buscar local por nombre o dirección"
                      className="w-full px-3 py-2 rounded-lg text-[#7A6F69] bg-[#D9D9DB] border border-gray-300 text-sm outline-none"
                    />
                    <div className="overflow-y-auto max-h-[350px] pr-1 mt-3">
                      {stores.map((store, idx) => {
                        const active = selectedStore?.name === store.name;
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedStore(store)}
                            className={`
                              rounded-md p-3 mb-3 cursor-pointer transition-all border mr-3
                              ${
                                active
                                  ? "bg-blue-100 border-blue-300"
                                  : "bg-[#F0EFED] border-[#E1DFDC] hover:bg-[#E1DFDC]"
                              }
                            `}
                          >
                            <p className="font-semibold">{store.name}</p>
                            <p className="text-sm text-gray-600">
                              {store.address}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="font-montserrat text-sm">
                <Button
                  onPress={onClose}
                  className="mt-5 border border-[#4A362F] rounded-xl"
                >
                  Cerrar
                </Button>
                <Button
                  isDisabled={!selectedStore}
                  onPress={onClose}
                  className="mt-5 bg-[#4A362F] text-white rounded-xl"
                >
                  Continuar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
