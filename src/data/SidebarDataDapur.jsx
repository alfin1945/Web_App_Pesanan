import * as FaIcons from "react-icons/fa";
import { MdDashboard } from "react-icons/md";


export const SidebarDataDapur = [
    {
        title: "Dashboard",
        path: "/",
        icon: <MdDashboard />
    },
    {
        title: "Menu",
        path: "/MenuDapur",
        icon: <FaIcons.FaBook />
    },
    {
        title: "Pesanan",
        path: "/PesananDapur",
        icon: <FaIcons.FaPen />
    },
]