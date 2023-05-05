import React from "react";
import Sidebar from "./Sidebar";
import File from "./File";
import Rightbar from "../dashboard/Rightbar";

export default function Dashboard() {
  return (
    <div className="bg-[#141618] flex min-h-screen w-full">
      <div
        className="flex w-full bg-[#141618] sm:w-64 m-0 p-0"
        style={{ flex: 0.6 }}
      >
        <Sidebar />
      </div>
      <div
        className="flex w-full bg-white sm:w-64 m-4 rounded-3xl p-0"
        style={{ flex: 3 }}
      >
        <div className="flex w-full sm:w-64 m-0 p-0" style={{ flex: 3 }}>
          <File />
        </div>
        <div
          className="flex w-full rounded-r-3xl bg-slate-200 sm:w-64 m-0 p-0"
          style={{ flex: 1.2 }}
        >
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
