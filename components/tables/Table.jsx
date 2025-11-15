export default function Table() {
  const tableItems = [
    {
      document: 1234,
      names: "Liam",
      surnames: "James",
      email: "liamjames@example.com",
      telephone: "456",
      address: "Address 1",
      role: "Client",
    },
    {
      document: 1234,
      names: "Olivia",
      surnames: "Emma",
      email: "oliviaemma@example.com",
      telephone: "456",
      address: "Address 2",
      role: "Client",
    },
    {
      document: 1234,
      names: "William",
      surnames: "Benjamin",
      email: "william.benjamin@example.com",
      telephone: "456",
      address: "Address 3",
      role: "Client",
    },
    {
      document: 1234,
      names: "Henry",
      surnames: "Theodore",
      email: "henrytheodore@example.com",
      telephone: "456",
      address: "Address 4",
      role: "Client",
    },
    {
      document: 1234,
      names: "Amelia",
      surnames: "Elijah",
      email: "amelia.elijah@example.com",
      telephone: "456",
      address: "Address 5",
      role: "Client",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-4xl">
          <h3 className="text-[#4A362F] mt-0 mb-4 text-6xl font-fjalla font-bold sm:text-2xl">
            Personas
          </h3>
          <p className="text-[#4A362F] text-lg font-montserrat mt-1.5">
            Aquí puede ver y gestionar la información de las personas que estan
            registradas en Coffee Tech.
          </p>
        </div>
      </div>
      <div className="font-montserrat mt-10 shadow-md border border-[#C4BFB9] rounded-lg w-fit transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-101">
        <table className="w-full table-auto text-sm">
          <thead className="bg-[#E1DFDC] text-[#7A7267] text-center font-medium border-b border-[#C4BFB9] rounded-t-lg">
            <tr>
              <th className="px-7 py-5">Documento</th>
              <th className="px-7 py-5">Nombres</th>
              <th className="px-7 py-5">Apellidos</th>
              <th className="px-7 py-5">Correo Electrónico</th>
              <th className="px-7 py-5">Telefono</th>
              <th className="px-7 py-5">Dirección</th>
              <th className="px-7 py-5">Rol</th>
              <th className="px-7 py-5">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-[#3C3833] text-left divide-y divide-[#C4BFB9]">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-8 py-6 whitespace-nowrap">{item.document}</td>
                <td className="px-8 py-6 whitespace-nowrap">{item.names}</td>
                <td className="px-8 py-6 whitespace-nowrap">{item.surnames}</td>
                <td className="px-8 py-6 whitespace-nowrap">{item.email}</td>
                <td className="px-8 py-6 whitespace-nowrap">
                  {item.telephone}
                </td>
                <td className="px-8 py-6 whitespace-nowrap">{item.address}</td>
                <td className="px-8 py-6 whitespace-nowrap">{item.role}</td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 pr-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Update role
                  </a>
                  <button
                    href="javascript:void()"
                    className="py-2 leading-none pr-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
