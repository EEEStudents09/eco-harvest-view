import { Card } from "@/components/ui/card";
import { WaterChart } from "@/components/Dashboard/WaterChart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', production: 124, efficiency: 85, cost_saved: 45 },
  { month: 'Feb', production: 135, efficiency: 88, cost_saved: 52 },
  { month: 'Mar', production: 145, efficiency: 92, cost_saved: 58 },
  { month: 'Apr', production: 156, efficiency: 90, cost_saved: 63 },
  { month: 'May', production: 168, efficiency: 94, cost_saved: 67 },
  { month: 'Jun', production: 178, efficiency: 96, cost_saved: 71 }
];

const efficiencyData = [
  { name: 'Water Production', value: 85, color: 'hsl(var(--primary))' },
  { name: 'Solar Efficiency', value: 92, color: 'hsl(var(--secondary))' },
  { name: 'System Uptime', value: 98, color: 'hsl(var(--accent))' },
  { name: 'Filter Life', value: 76, color: 'hsl(var(--muted-foreground))' }
];

export default function Analytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">
          Comprehensive data analysis and performance insights
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 shadow-soft">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Production</h3>
          <p className="text-3xl font-bold text-primary">806.2L</p>
          <p className="text-sm text-green-600 mt-1">+12.5% vs last month</p>
        </Card>
        
        <Card className="p-6 shadow-soft">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Avg Efficiency</h3>
          <p className="text-3xl font-bold text-secondary">90.8%</p>
          <p className="text-sm text-green-600 mt-1">+3.2% improvement</p>
        </Card>
        
        <Card className="p-6 shadow-soft">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Cost Savings</h3>
          <p className="text-3xl font-bold text-accent">$356</p>
          <p className="text-sm text-green-600 mt-1">vs municipal water</p>
        </Card>
        
        <Card className="p-6 shadow-soft">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">CO₂ Offset</h3>
          <p className="text-3xl font-bold text-foreground">2.4kg</p>
          <p className="text-sm text-green-600 mt-1">Environmental impact</p>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Production */}
        <Card className="p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Production</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="production" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* System Efficiency */}
        <Card className="p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4">System Efficiency</h3>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={efficiencyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  dataKey="value"
                  stroke="none"
                >
                  {efficiencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {efficiencyData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-muted-foreground">{item.name}</span>
                <span className="text-sm font-medium text-foreground ml-auto">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Weekly Production Chart */}
      <WaterChart />

      {/* Performance Metrics */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Water Quality</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">pH Level</span>
                <span className="text-sm font-medium">7.2 ✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Turbidity</span>
                <span className="text-sm font-medium">0.5 NTU ✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Conductivity</span>
                <span className="text-sm font-medium">450 µS/cm ✓</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Energy Usage</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Solar Input</span>
                <span className="text-sm font-medium">4.2 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">System Consumption</span>
                <span className="text-sm font-medium">0.8 kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Efficiency</span>
                <span className="text-sm font-medium text-green-600">81%</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Maintenance</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Filter Life</span>
                <span className="text-sm font-medium">76%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Last Service</span>
                <span className="text-sm font-medium">15 days ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Next Service</span>
                <span className="text-sm font-medium text-yellow-600">14 days</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}