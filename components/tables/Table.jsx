"use client";

import { Icon } from "@iconify/react";

export default function AdminTable({
  title,
  description,
  columns,
  data,
  actions,
  showAddButton = false,
  onAdd,
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="items-end justify-between md:flex">
        <div className="max-w-4xl">
          <h3 className="text-[#4A362F] mb-4 text-4xl font-fjalla font-bold sm:text-3xl">
            {title}
          </h3>
          <p className="text-[#4A362F] text-lg font-montserrat mt-1.5">
            {description}
          </p>
        </div>
        {showAddButton && (
          <button
            onClick={onAdd}
            className="mt-4 md:mt-0 px-6 py-3 bg-[#4A362F] text-white rounded-lg font-semibold hover:bg-[#3B2B26] transition-all hover:-translate-y-1"
          >
            Agregar
          </button>
        )}
      </div>
      <div className="font-montserrat mt-10 shadow-md border border-[#C4BFB9] rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-x-auto">
        <table className="min-w-max w-full table-auto text-sm">
          <thead className="bg-[#E1DFDC] text-[#7A7267] text-center font-medium border-b border-[#C4BFB9] rounded-t-lg">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-7 py-5 whitespace-nowrap">
                  {col.label}
                </th>
              ))}
              {actions && <th className="px-7 py-5">Acciones</th>}
            </tr>
          </thead>
          <tbody className="text-[#3C3833] text-left divide-y divide-[#C4BFB9]">
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="transition-all duration-200 hover:bg-[#F0EFEDCC]"
              >
                {columns.map((col, i) => (
                  <td key={i} className="px-8 py-6 max-w-2xl">
                    {row[col.field] ?? "---"}
                  </td>
                ))}
                {actions && (
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex justify-center items-center gap-2">
                      {actions.map((action, i) => (
                        <Icon
                          key={i}
                          icon={action.icon}
                          width="24"
                          height="24"
                          onClick={() => action.onClick(row)}
                          className={`${action.className} cursor-pointer duration-150`}
                        />
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
