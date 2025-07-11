import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { day: 'Mon', water: 3.2, solar: 85 },
  { day: 'Tue', water: 4.1, solar: 92 },
  { day: 'Wed', water: 2.8, solar: 78 },
  { day: 'Thu', water: 5.2, solar: 96 },
  { day: 'Fri', water: 4.8, solar: 89 },
  { day: 'Sat', water: 6.1, solar: 98 },
  { day: 'Sun', water: 4.3, solar: 87 },
];

export function WaterChart() {
  return (
    <Card className="p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Water Production (7 Days)</h3>
        <p className="text-sm text-muted-foreground">Daily water harvested in liters</p>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="day" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              label={{ value: 'Liters', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-soft)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Line 
              type="monotone" 
              dataKey="water" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">Water Harvested</span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold text-foreground">Total: 30.5L</p>
          <p className="text-muted-foreground">This week</p>
        </div>
      </div>
    </Card>
  );
}