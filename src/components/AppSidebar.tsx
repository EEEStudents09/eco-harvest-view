import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Gauge,
  Cloud,
  Settings,
  Activity,
  Droplets,
  Leaf
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/", icon: Gauge },
  { title: "Device Status", url: "/device-status", icon: Activity },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Weather", url: "/weather", icon: Cloud },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-ocean text-primary-foreground shadow-ocean" 
      : "hover:bg-muted/60 text-foreground hover:text-primary transition-all duration-300";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="pt-4">
        {/* Brand Section */}
        {!collapsed && (
          <div className="px-6 pb-6">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-forest/10">
              <div className="relative">
                <Droplets className="h-6 w-6 text-primary" />
                <Leaf className="h-3 w-3 text-secondary absolute -top-1 -right-1" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">AquaHarvest</h2>
                <p className="text-xs text-muted-foreground">v2.1.0</p>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs font-medium px-6">
            {!collapsed ? "NAVIGATION" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mx-3 rounded-lg">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}