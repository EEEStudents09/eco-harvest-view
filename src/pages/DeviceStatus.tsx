import { SystemHealth } from "@/components/Dashboard/SystemHealth";
import { MetricCard } from "@/components/Dashboard/MetricCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  HardDrive, 
  Wifi, 
  Thermometer,
  Battery,
  Activity,
  Clock
} from "lucide-react";

export default function DeviceStatus() {
  const systemSpecs = [
    { label: "Device Model", value: "AquaHarvest Pro v2.1" },
    { label: "Serial Number", value: "AH-2024-001234" },
    { label: "Firmware Version", value: "2.1.0" },
    { label: "Last Update", value: "2024-01-15" },
    { label: "Uptime", value: "15 days, 8 hours" },
    { label: "Installation Date", value: "2023-12-01" }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Device Status</h1>
        <p className="text-muted-foreground">
          Detailed system information and hardware diagnostics
        </p>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="CPU Usage"
          value="23"
          unit="%"
          icon={<Cpu className="w-5 h-5" />}
          variant="default"
        />
        <MetricCard
          title="Memory"
          value="45"
          unit="%"
          icon={<HardDrive className="w-5 h-5" />}
          variant="ocean"
        />
        <MetricCard
          title="Signal Strength"
          value="-45"
          unit="dBm"
          icon={<Wifi className="w-5 h-5" />}
          variant="forest"
        />
        <MetricCard
          title="Core Temp"
          value="42"
          unit="°C"
          icon={<Thermometer className="w-5 h-5" />}
          variant="aqua"
        />
      </div>

      {/* Device Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4">Device Information</h3>
          <div className="space-y-3">
            {systemSpecs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                <span className="text-muted-foreground">{spec.label}</span>
                <span className="font-medium text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Overall Status</span>
              <Badge className="bg-gradient-forest text-secondary-foreground">
                Operational
              </Badge>
            </div>
          </div>
        </Card>

        {/* System Health */}
        <SystemHealth />
      </div>

      {/* Sensor Readings */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground mb-4">Sensor Readings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Water Level", value: "85%", status: "normal", icon: <Activity className="w-4 h-4" /> },
            { name: "Flow Rate", value: "2.3 L/h", status: "normal", icon: <Activity className="w-4 h-4" /> },
            { name: "Pressure", value: "1.2 bar", status: "normal", icon: <Activity className="w-4 h-4" /> },
            { name: "pH Level", value: "7.2", status: "normal", icon: <Activity className="w-4 h-4" /> },
            { name: "Turbidity", value: "0.5 NTU", status: "good", icon: <Activity className="w-4 h-4" /> },
            { name: "Conductivity", value: "450 µS/cm", status: "normal", icon: <Activity className="w-4 h-4" /> }
          ].map((sensor, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {sensor.icon}
                  <span className="font-medium text-foreground">{sensor.name}</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  sensor.status === "good" ? "bg-green-500" : "bg-blue-500"
                }`}></div>
              </div>
              <p className="text-xl font-bold text-primary">{sensor.value}</p>
              <p className="text-xs text-muted-foreground capitalize">{sensor.status}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Activity Log */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { time: "2 minutes ago", event: "System status check completed", type: "info" },
            { time: "15 minutes ago", event: "Water production target reached", type: "success" },
            { time: "1 hour ago", event: "Solar panel efficiency optimized", type: "info" },
            { time: "3 hours ago", event: "Filter maintenance reminder scheduled", type: "warning" },
            { time: "6 hours ago", event: "System startup completed", type: "success" }
          ].map((log, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border">
              <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{log.event}</p>
                <p className="text-xs text-muted-foreground">{log.time}</p>
              </div>
              <div className={`w-2 h-2 rounded-full ${
                log.type === "success" ? "bg-green-500" :
                log.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
              }`}></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}