import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Square, RotateCcw, Power } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ControlPanel() {
  const [systemStatus, setSystemStatus] = useState<"running" | "stopped" | "starting">("running");
  const { toast } = useToast();

  const handleStart = () => {
    setSystemStatus("starting");
    setTimeout(() => {
      setSystemStatus("running");
      toast({
        title: "System Started",
        description: "Water harvesting system is now running.",
      });
    }, 2000);
  };

  const handleStop = () => {
    setSystemStatus("stopped");
    toast({
      title: "System Stopped",
      description: "Water harvesting system has been stopped.",
    });
  };

  const handleReset = () => {
    toast({
      title: "System Reset",
      description: "Daily counters have been reset.",
    });
  };

  return (
    <Card className="p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">System Control</h3>
        <p className="text-sm text-muted-foreground">Manage your water harvesting device</p>
      </div>

      {/* Status Indicator */}
      <div className="mb-6 p-4 rounded-lg bg-gradient-subtle border border-border">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${
            systemStatus === "running" ? "bg-green-500 animate-pulse-gentle" :
            systemStatus === "starting" ? "bg-yellow-500 animate-pulse" :
            "bg-red-500"
          }`}></div>
          <div>
            <p className="font-medium text-foreground">
              {systemStatus === "running" ? "System Running" :
               systemStatus === "starting" ? "Starting Up..." :
               "System Stopped"}
            </p>
            <p className="text-sm text-muted-foreground">
              {systemStatus === "running" ? "All systems operational" :
               systemStatus === "starting" ? "Initializing sensors..." :
               "Ready to start"}
            </p>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={handleStart}
          disabled={systemStatus === "running" || systemStatus === "starting"}
          className="bg-gradient-forest hover:bg-secondary/90 text-secondary-foreground shadow-forest"
        >
          <Play className="w-4 h-4 mr-2" />
          {systemStatus === "starting" ? "Starting..." : "Start"}
        </Button>
        
        <Button
          onClick={handleStop}
          disabled={systemStatus === "stopped"}
          variant="outline"
          className="border-destructive/50 text-destructive hover:bg-destructive/10"
        >
          <Square className="w-4 h-4 mr-2" />
          Stop
        </Button>
        
        <Button
          onClick={handleReset}
          variant="outline"
          className="col-span-2 border-accent/50 text-accent hover:bg-accent/10"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Daily Stats
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">8h 23m</p>
            <p className="text-xs text-muted-foreground">Runtime Today</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-secondary">98.5%</p>
            <p className="text-xs text-muted-foreground">Efficiency</p>
          </div>
        </div>
      </div>
    </Card>
  );
}