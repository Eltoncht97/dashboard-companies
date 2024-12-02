import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, UserCircle } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";

export const Navbar = () => {
  return (
    <div className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <div className="bloack md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative w-[300px]">
        <Input placeholder="Search..." className="rounded-lg" />
        <Search strokeWidth={1} className="absolute top-2 right-2" />
      </div>
      <div className="flex gap-x-2 items-center">
        <p>Toogle Theme</p>
        <UserCircle strokeWidth={1} className="w-4 h-4" />
      </div>
    </div>
  );
};