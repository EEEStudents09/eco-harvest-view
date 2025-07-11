import { MetricCard } from "@/components/Dashboard/MetricCard";
import { WaterChart } from "@/components/Dashboard/WaterChart";
import { ControlPanel } from "@/components/Dashboard/ControlPanel";
import { SystemHealth } from "@/components/Dashboard/SystemHealth";
import { WeatherCard } from "@/components/Weather/WeatherCard";
import { 
  Droplets, 
  Thermometer, 
  Sun, 
  Battery,
  TrendingUp
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [todayWater, setTodayWater] = useState(4.3);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    // Simulate real-time water production
    const waterTimer = setInterval(() => {
      setTodayWater(prev => prev + Math.random() * 0.01);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(waterTimer);
    };
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Real-time monitoring of your water harvesting system
          </p>
          <p className="text-sm text-muted-foreground">
            {currentTime.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Humidity"
          value="68"
          unit="%"
          icon={<Droplets className="w-5 h-5" />}
          variant="ocean"
          trend={{ value: 5.2, isPositive: true }}
          isLive
        />
        <MetricCard
          title="Temperature"
          value="24"
          unit="°C"
          icon={<Thermometer className="w-5 h-5" />}
          variant="default"
          trend={{ value: 2.1, isPositive: false }}
          isLive
        />
        <MetricCard
          title="Solar Power"
          value="87"
          unit="%"
          icon={<Sun className="w-5 h-5" />}
          variant="aqua"
          trend={{ value: 12.8, isPositive: true }}
          isLive
        />
        <MetricCard
          title="Battery Level"
          value="92"
          unit="%"
          icon={<Battery className="w-5 h-5" />}
          variant="forest"
          trend={{ value: 3.5, isPositive: true }}
          isLive
        />
      </div>

      {/* Today's Water Production - Featured Card */}
      <div className="bg-gradient-ocean rounded-xl p-8 text-primary-foreground shadow-ocean">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium opacity-90 mb-2">Today's Water Production</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">{todayWater.toFixed(1)}</span>
              <span className="text-xl opacity-80">Liters</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm opacity-90">+0.8L from yesterday</span>
            </div>
          </div>
          <div className="text-right">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Droplets className="w-10 h-10" />
            </div>
            <p className="text-sm opacity-80 mt-2">85% efficiency</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart - spans 2 columns */}
        <div className="lg:col-span-2">
          <WaterChart />
        </div>

        {/* Weather Card */}
        <div className="lg:col-span-1">
          <WeatherCard />
        </div>
      </div>

      {/* Control and Health Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ControlPanel />
        <SystemHealth />
      </div>
    </div>
  );
}