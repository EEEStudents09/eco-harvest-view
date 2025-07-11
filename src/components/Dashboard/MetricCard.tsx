import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  icon: ReactNode;
  variant?: "default" | "ocean" | "forest" | "aqua";
  trend?: {
    value: number;
    isPositive: boolean;
  };
  isLive?: boolean;
}

export function MetricCard({ 
  title, 
  value, 
  unit, 
  icon, 
  variant = "default",
  trend,
  isLive = false
}: MetricCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "ocean":
        return "bg-gradient-ocean text-primary-foreground shadow-ocean";
      case "forest":
        return "bg-gradient-forest text-secondary-foreground shadow-forest";
      case "aqua":
        return "bg-gradient-aqua text-accent-foreground shadow-soft";
      default:
        return "bg-card text-card-foreground shadow-soft hover:shadow-ocean/50";
    }
  };

  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:scale-105",
      getVariantStyles()
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg",
            variant === "default" ? "bg-primary/10 text-primary" : "bg-white/20"
          )}>
            {icon}
          </div>
          <div>
            <p className={cn(
              "text-sm font-medium",
              variant === "default" ? "text-muted-foreground" : "text-current/80"
            )}>
              {title}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">{value}</span>
              {unit && <span className="text-sm opacity-80">{unit}</span>}
              {isLive && (
                <div className="ml-2 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-gentle"></div>
                  <span className="text-xs opacity-70">LIVE</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {trend && (
          <div className={cn(
            "text-right",
            trend.isPositive ? "text-green-400" : "text-red-400"
          )}>
            <span className="text-sm font-medium">
              {trend.isPositive ? "+" : ""}{trend.value}%
            </span>
            <p className="text-xs opacity-70">vs yesterday</p>
          </div>
        )}
      </div>
    </Card>
  );
}