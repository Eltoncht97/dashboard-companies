"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dataGraphics = [
  {
    year: "2016",
    newCustomers: 4000,
    oldCustomers: 2400,
  },
  {
    year: "2017",
    newCustomers: 4000,
    oldCustomers: 2400,
  },
  {
    year: "2018",
    newCustomers: 4000,
    oldCustomers: 2400,
  },
  {
    year: "2019",
    newCustomers: 4000,
    oldCustomers: 2400,
  },
  {
    year: "2020",
    newCustomers: 4000,
    oldCustomers: 2400,
  },
  {
    year: "2021",
    newCustomers: 2390,
    oldCustomers: 3800,
  },
  {
    year: "2022",
    newCustomers: 3490,
    oldCustomers: 4300,
  },
  {
    year: "2023",
    newCustomers: 4490,
    oldCustomers: 5300,
  },
  {
    year: "2024",
    newCustomers: 4600,
    oldCustomers: 5500,
  },
];

export const GraphicSubscribers = () => {
  return (
    <div className="mt-5">
      <p className="text-3xl mb-3">24.453</p>
      <div className="flex gap-x-5 mb-5">
        <div className="flex items-center gap-2 px-3 text-md bg-[#16C8C7] text-white rounded-xl w-fit">
          8,5%
          <TrendingUp strokeWidth={1} className="w-4 h-4" />
        </div>
        <p className="text-slate-500">+432 increased</p>
      </div>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={dataGraphics}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#887CFD" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#887CFD" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="newCustomers"
              stroke="#887CFD"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="oldCustomers"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
