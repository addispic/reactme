import { Outlet } from "react-router-dom";
export default function AuthLayouts() {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-neutral-50/50">
      <Outlet />
    </div>
  );
}
