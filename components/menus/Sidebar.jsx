import { Icon } from "@iconify/react";

const Sidebar = () => {
  const navigation = [
    {
      href: "/dashboard/table",
      name: "Mesas",
      icon: (
        <Icon
          icon="material-symbols-light:table-restaurant-outline-rounded"
          width="28"
          height="28"
          strokeWidth={0.7}
          stroke="currentColor"
        />
      ),
    },
    {
      href: "/dashboard/staff",
      name: "Personal",
      icon: (
        <Icon
          icon="healthicons:city-worker-outline"
          width="28"
          height="28"
          strokeWidth={1}
          stroke="currentColor"
        />
      ),
    },
    {
      href: "/dashboard/product",
      name: "Productos",
      icon: <Icon icon="fluent-mdl2:product" width="28" height="28" />,
    },
    {
      href: "/dashboard/productType",
      name: "Tipos de producto",
      icon: <Icon icon="fluent-mdl2:product-variant" width="28" height="28" />,
    },
    {
      href: "/dashboard/promotion",
      name: "Promociones",
      icon: (
        <Icon icon="lsicon:badge-promotion-outline" width="28" height="28" />
      ),
    },
    {
      href: "/dashboard/role",
      name: "Roles",
      icon: (
        <Icon icon="carbon:kubernetes-worker-node" width="28" height="28" />
      ),
    },
  ];

  return (
    <>
      <nav className="fixed top-10 left-0 pt-14 h-full bg-stone-200 flex flex-col overflow-hidden transition-all duration-300 w-20 sm:w-80">
        <div className="flex-1 overflow-y-auto">
          <ul className="px-2 sm:px-7 text-sm font-medium flex-1">
            {navigation.map((item, idx) => (
              <li key={idx} className="my-2">
                <a
                  href={item.href}
                  className="flex items-center gap-x-3 text-[#4A362F] text-base font-semibold py-3 px-3 rounded-lg hover:bg-[#F2F2F3] hover:-translate-y-1 hover:scale-105 active:bg-stone-300 duration-150 justify-center sm:justify-start"
                >
                  <div className="text-[#4A362F]">{item.icon}</div>
                  <span className="hidden sm:inline">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
