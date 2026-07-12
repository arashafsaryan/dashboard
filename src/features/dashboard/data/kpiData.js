import { MdAttachMoney } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";

export const kpiData = [
  {
    title: "Revenue",
    value: "$48,500",
    change: "+12.4%",
    Icon: MdAttachMoney,
    trend: [
      { value: 10 },
      { value: 18 },
      { value: 14 },
      { value: 24 },
      { value: 20 },
      { value: 32 },
    ],
  },
  {
    title: "Users",
    value: "12,350",
    change: "+8.1%",
    Icon: HiOutlineUsers,
    trend: [
      { value: 12 },
      { value: 15 },
      { value: 18 },
      { value: 20 },
      { value: 24 },
      { value: 27 },
    ],
  },

  {
    title: "Projects",
    value: "428",
    change: "-3.8%",
    Icon: AiOutlineFundProjectionScreen,
    trend: [
      { value: 6 },
      { value: 9 },
      { value: 8 },
      { value: 12 },
      { value: 14 },
      { value: 16 },
    ],
  },

  {
    title: "Growth",
    value: "24%",
    change: "+5.2%",
    Icon: FiTrendingUp,
    trend: [
      { value: 5 },
      { value: 8 },
      { value: 7 },
      { value: 10 },
      { value: 13 },
      { value: 16 },
    ],
  },
];
