import * as FaIcons from "react-icons/fa";
import { MdDashboard } from "react-icons/md";


export const SidebarDataAdmin = [
    {
        title: "Dashboard",
        path: "/",
        icon: <MdDashboard />
    },
    {
        title: "Menu",
        path: "/MenuAdmin",
        icon: <FaIcons.FaBook />
    },
    {
        title: "Pesanan",
        path: "/PesananAdmin",
        icon: <FaIcons.FaPen />
    },
    {
        title: "Transaksi",
        path: "/TransaksiAdmin",
        icon: <FaIcons.FaDesktop />
    },
]