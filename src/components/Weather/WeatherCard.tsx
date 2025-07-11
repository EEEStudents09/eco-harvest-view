import { Card } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Droplets, Wind, Eye } from "lucide-react";

interface WeatherData {
  current: {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    visibility: number;
    icon: string;
  };
  forecast: Array<{
    day: string;
    high: number;
    low: number;
    condition: string;
    rain: number;
    icon: string;
  }>;
}

const mockWeatherData: WeatherData = {
  current: {
    temp: 24,
    condition: "Partly Cloudy",
    humidity: 68,
    windSpeed: 12,
    visibility: 10,
    icon: "partly-cloudy"
  },
  forecast: [
    { day: "Today", high: 26, low: 18, condition: "Partly Cloudy", rain: 10, icon: "partly-cloudy" },
    { day: "Tomorrow", high: 28, low: 20, condition: "Sunny", rain: 0, icon: "sunny" },
    { day: "Wed", high: 22, low: 16, condition: "Rainy", rain: 85, icon: "rainy" },
    { day: "Thu", high: 25, low: 19, condition: "Cloudy", rain: 20, icon: "cloudy" },
  ]
};

const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case "sunny": return <Sun className="w-6 h-6 text-yellow-500" />;
    case "rainy": return <CloudRain className="w-6 h-6 text-blue-500" />;
    case "cloudy": return <Cloud className="w-6 h-6 text-gray-500" />;
    default: return <Sun className="w-6 h-6 text-yellow-400" />;
  }
};

export function WeatherCard() {
  const { current, forecast } = mockWeatherData;

  return (
    <Card className="p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Weather Forecast</h3>
        <p className="text-sm text-muted-foreground">Optimize harvest based on conditions</p>
      </div>

      {/* Current Weather */}
      <div className="mb-6 p-4 rounded-lg bg-gradient-aqua/10 border border-accent/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-foreground">Current Weather</h4>
            <p className="text-sm text-muted-foreground">{current.condition}</p>
          </div>
          {getWeatherIcon(current.icon)}
        </div>
        
        <div className="flex items-center gap-6">
          <div>
            <span className="text-3xl font-bold text-foreground">{current.temp}°</span>
            <span className="text-muted-foreground ml-1">C</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span>{current.humidity}%</span>
            </div>
            <div className="flex items-center gap-1">
              <Wind className="w-4 h-4 text-gray-500" />
              <span>{current.windSpeed}km/h</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-gray-500" />
              <span>{current.visibility}km</span>
            </div>
          </div>
        </div>
      </div>

      {/* Forecast */}
      <div className="space-y-3">
        <h4 className="font-medium text-foreground mb-3">4-Day Forecast</h4>
        {forecast.map((day, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-card/50 border"
          >
            <div className="flex items-center gap-3">
              {getWeatherIcon(day.icon)}
              <div>
                <p className="font-medium text-foreground">{day.day}</p>
                <p className="text-sm text-muted-foreground">{day.condition}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{day.high}°</span>
                <span className="text-muted-foreground">{day.low}°</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-blue-500">
                <Droplets className="w-3 h-3" />
                <span>{day.rain}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Harvest Prediction */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="p-3 rounded-lg bg-gradient-forest/10 border border-secondary/20">
          <h4 className="font-medium text-foreground mb-2">Harvest Prediction</h4>
          <p className="text-sm text-muted-foreground mb-2">
            Expected water production for next 24h:
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-secondary">5.2L</span>
            <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+20% optimal</span>
          </div>
        </div>
      </div>
    </Card>
  );
}