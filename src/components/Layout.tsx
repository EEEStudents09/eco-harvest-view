import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Droplets, Leaf } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-subtle">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-card/95 backdrop-blur-sm border-b border-border z-50 flex items-center px-4">
          <SidebarTrigger className="mr-4" />
          <div className="flex items-center gap-2">
            <div className="relative">
              <Droplets className="h-8 w-8 text-primary" />
              <Leaf className="h-4 w-4 text-secondary absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
                AquaHarvest
              </h1>
              <p className="text-xs text-muted-foreground">Solar Water System</p>
            </div>
          </div>
        </header>

        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 pt-16">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}