"use client";
import { Icon } from "@iconify/react";

export default function Modal({
  open,
  onClose,
  onConfirm,
  confirmText = "Guardar",
  title,
  description,
  children,
  showFooterClose = true,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-xl p-7 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3">
          <Icon
            icon="codex:cross"
            width="30"
            height="30"
            className="text-stone-500 transition-all duration-200 hover:text-stone-700 hover:rotate-90 hover:scale-110"
          />
        </button>
        <div className="mb-4 border-b border-[#F2F2F3]">
          <h2 className="text-[22px] font-bold text-[#725348]">{title}</h2>
          {description && (
            <p className="text-base text-stone-600 mt-2 mb-4">{description}</p>
          )}
        </div>
        <div className="space-y-4">{children}</div>
        {showFooterClose && (
          <div className="mt-5 flex justify-end gap-3 border-t border-[#F2F2F3]">
            <button
              onClick={onClose}
              className="px-6 py-2 mt-5 rounded-md bg-stone-200 hover:bg-stone-300 hover:-translate-y-0.5 transition"
            >
              Cerrar
            </button>
            {onConfirm && (
              <button
                onClick={onConfirm}
                className="px-6 py-2 mt-5 rounded-md bg-[#5E443C] text-white hover:bg-[#4A362F] hover:-translate-y-0.5 transition"
              >
                {confirmText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
