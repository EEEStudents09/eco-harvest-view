import { WeatherCard } from "@/components/Weather/WeatherCard";
import { Card } from "@/components/ui/card";
import { Sun, CloudRain, Wind, Droplets, Eye, Thermometer } from "lucide-react";

export default function Weather() {
  const historicalData = [
    { date: "Jan 1", rain: 12, temp: 22, production: 3.2 },
    { date: "Jan 2", rain: 0, temp: 28, production: 5.1 },
    { date: "Jan 3", rain: 45, temp: 19, production: 6.8 },
    { date: "Jan 4", rain: 8, temp: 25, production: 4.2 },
    { date: "Jan 5", rain: 0, temp: 30, production: 5.9 },
    { date: "Jan 6", rain: 25, temp: 21, production: 5.5 },
    { date: "Jan 7", rain: 5, temp: 26, production: 4.8 }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Weather</h1>
        <p className="text-muted-foreground">
          Weather conditions and forecast for optimal water harvesting
        </p>
      </div>

      {/* Current Weather & Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeatherCard />
        
        {/* Atmospheric Conditions */}
        <Card className="p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4">Atmospheric Conditions</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-subtle border">
              <div className="flex items-center gap-2 mb-2">
                <Thermometer className="w-5 h-5 text-red-500" />
                <span className="font-medium text-foreground">Temperature</span>
              </div>
              <p className="text-2xl font-bold text-foreground">24°C</p>
              <p className="text-sm text-muted-foreground">Feels like 26°C</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-subtle border">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-foreground">Humidity</span>
              </div>
              <p className="text-2xl font-bold text-foreground">68%</p>
              <p className="text-sm text-muted-foreground">Dew point: 18°C</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-subtle border">
              <div className="flex items-center gap-2 mb-2">
                <Wind className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-foreground">Wind Speed</span>
              </div>
              <p className="text-2xl font-bold text-foreground">12 km/h</p>
              <p className="text-sm text-muted-foreground">NE direction</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-subtle border">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-foreground">Visibility</span>
              </div>
              <p className="text-2xl font-bold text-foreground">10 km</p>
              <p className="text-sm text-muted-foreground">Clear conditions</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Weather Impact Analysis */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground mb-4">Weather Impact on Production</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-gradient-forest/10 border border-secondary/20">
            <div className="flex items-center gap-2 mb-3">
              <Sun className="w-5 h-5 text-yellow-500" />
              <h4 className="font-medium text-foreground">Solar Conditions</h4>
            </div>
            <p className="text-2xl font-bold text-secondary mb-2">Excellent</p>
            <p className="text-sm text-muted-foreground">
              High solar irradiance with minimal cloud cover. Expected 95% panel efficiency.
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-ocean/10 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <CloudRain className="w-5 h-5 text-blue-500" />
              <h4 className="font-medium text-foreground">Rain Forecast</h4>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">Light</p>
            <p className="text-sm text-muted-foreground">
              20% chance of light rain tomorrow. Expect additional 0.5L from direct collection.
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-aqua/10 border border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-5 h-5 text-cyan-500" />
              <h4 className="font-medium text-foreground">Humidity Levels</h4>
            </div>
            <p className="text-2xl font-bold text-accent mb-2">Optimal</p>
            <p className="text-sm text-muted-foreground">
              Perfect humidity for condensation. Peak collection expected during morning hours.
            </p>
          </div>
        </div>
      </Card>

      {/* Historical Weather vs Production */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground mb-4">7-Day Weather History</h3>
        <div className="space-y-3">
          {historicalData.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
              <div className="flex items-center gap-4">
                <span className="font-medium text-foreground w-12">{day.date}</span>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-red-500" />
                  <span className="text-sm">{day.temp}°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <CloudRain className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{day.rain}mm</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Production:</span>
                <span className="font-semibold text-primary">{day.production}L</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Weather Alerts */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground mb-4">Weather Alerts</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium text-green-800">Optimal Conditions</span>
            </div>
            <p className="text-sm text-green-700">
              Perfect weather conditions for water harvesting. System operating at peak efficiency.
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="font-medium text-yellow-800">Maintenance Window</span>
            </div>
            <p className="text-sm text-yellow-700">
              Light winds forecasted. Ideal time for filter cleaning and panel maintenance.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}