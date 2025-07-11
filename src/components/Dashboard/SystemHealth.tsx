import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Wrench, Wifi, Battery } from "lucide-react";

interface HealthItem {
  name: string;
  status: "good" | "warning" | "error";
  message: string;
  icon: React.ReactNode;
}

const healthItems: HealthItem[] = [
  {
    name: "Solar Panel",
    status: "good",
    message: "Optimal performance",
    icon: <Battery className="w-4 h-4" />
  },
  {
    name: "Water Sensors",
    status: "good", 
    message: "All sensors online",
    icon: <CheckCircle className="w-4 h-4" />
  },
  {
    name: "Connectivity",
    status: "good",
    message: "Strong signal",
    icon: <Wifi className="w-4 h-4" />
  },
  {
    name: "Filter System",
    status: "warning",
    message: "Replace in 2 weeks",
    icon: <AlertTriangle className="w-4 h-4" />
  }
];

export function SystemHealth() {
  const overallStatus = healthItems.some(item => item.status === "error") ? "error" :
                       healthItems.some(item => item.status === "warning") ? "warning" : "good";

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-green-600 bg-green-50 border-green-200";
      case "warning": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "error": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getOverallBadge = () => {
    switch (overallStatus) {
      case "good": 
        return <Badge className="bg-gradient-forest text-secondary-foreground">System OK</Badge>;
      case "warning": 
        return <Badge variant="outline" className="border-yellow-500 text-yellow-700">Needs Attention</Badge>;
      case "error": 
        return <Badge variant="destructive">Maintenance Required</Badge>;
      default: 
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card className="p-6 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">System Health</h3>
          <p className="text-sm text-muted-foreground">Device diagnostics & status</p>
        </div>
        {getOverallBadge()}
      </div>

      <div className="space-y-4">
        {healthItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 rounded-lg border bg-card/50"
          >
            <div className="flex items-center gap-3">
              <div className={`p-1.5 rounded-full ${getStatusColor(item.status)}`}>
                {item.icon}
              </div>
              <div>
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.message}</p>
              </div>
            </div>
            
            <div className={`w-3 h-3 rounded-full ${
              item.status === "good" ? "bg-green-500" :
              item.status === "warning" ? "bg-yellow-500" : "bg-red-500"
            }`}></div>
          </div>
        ))}
      </div>

      {/* Maintenance Schedule */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center gap-2 mb-3">
          <Wrench className="w-4 h-4 text-muted-foreground" />
          <h4 className="font-medium text-foreground">Next Maintenance</h4>
        </div>
        <div className="text-sm">
          <p className="text-muted-foreground">Filter replacement due in</p>
          <p className="text-lg font-semibold text-accent">14 days</p>
        </div>
      </div>
    </Card>
  );
}