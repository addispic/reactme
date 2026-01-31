import { Outlet, Navigate } from "react-router-dom";
export default function PostLayout() {
  if (true) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-96 shrink-0">left</div>
      <div className="flex-1">
        <header>Header</header>
        <div className="flex">
          <div className="flex-1">
            <Outlet />
          </div>
          <div className="w-72">right</div>
        </div>
      </div>
    </div>
  );
}
