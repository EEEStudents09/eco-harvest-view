import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Bell, 
  Wifi, 
  Shield, 
  Download, 
  Trash2,
  RefreshCw,
  User,
  Mail,
  Phone
} from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    maintenance: true,
    efficiency: false
  });
  
  const [systemSettings, setSystemSettings] = useState({
    autoMode: true,
    nightMode: false,
    dataLogging: true
  });

  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully."
    });
  };

  const handleFactoryReset = () => {
    toast({
      title: "Factory Reset Initiated",
      description: "System will restart with default settings.",
      variant: "destructive"
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure your water harvesting system preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Settings */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Account Settings</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
          </Card>

          {/* System Configuration */}
          <Card className="p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-foreground mb-4">System Configuration</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Auto Mode</h4>
                  <p className="text-sm text-muted-foreground">Automatically optimize based on weather</p>
                </div>
                <Switch 
                  checked={systemSettings.autoMode}
                  onCheckedChange={(checked) => setSystemSettings(prev => ({...prev, autoMode: checked}))}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Night Mode Operation</h4>
                  <p className="text-sm text-muted-foreground">Continue processing during nighttime</p>
                </div>
                <Switch 
                  checked={systemSettings.nightMode}
                  onCheckedChange={(checked) => setSystemSettings(prev => ({...prev, nightMode: checked}))}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Data Logging</h4>
                  <p className="text-sm text-muted-foreground">Record detailed system metrics</p>
                </div>
                <Switch 
                  checked={systemSettings.dataLogging}
                  onCheckedChange={(checked) => setSystemSettings(prev => ({...prev, dataLogging: checked}))}
                />
              </div>
            </div>
          </Card>

          {/* Notification Preferences */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch 
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, email: checked}))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground">Real-time alerts on device</p>
                </div>
                <Switch 
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, push: checked}))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Maintenance Alerts</h4>
                  <p className="text-sm text-muted-foreground">Reminders for system maintenance</p>
                </div>
                <Switch 
                  checked={notifications.maintenance}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, maintenance: checked}))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">Efficiency Reports</h4>
                  <p className="text-sm text-muted-foreground">Weekly performance summaries</p>
                </div>
                <Switch 
                  checked={notifications.efficiency}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, efficiency: checked}))}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* System Info */}
          <Card className="p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-foreground mb-4">System Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Model</span>
                <span className="text-sm font-medium">AquaHarvest Pro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Version</span>
                <Badge variant="outline">v2.1.0</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge className="bg-gradient-forest text-secondary-foreground">Online</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Last Update</span>
                <span className="text-sm font-medium">Jan 15, 2024</span>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <RefreshCw className="w-4 h-4 mr-2" />
                System Update
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start border-destructive/50 text-destructive hover:bg-destructive/10"
                onClick={handleFactoryReset}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Factory Reset
              </Button>
            </div>
          </Card>

          {/* Connectivity */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Connectivity</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">WiFi Status</span>
                <Badge className="bg-gradient-forest text-secondary-foreground">Connected</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Signal Strength</span>
                <span className="text-sm font-medium">-45 dBm</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Network</span>
                <span className="text-sm font-medium">AquaNet_5G</span>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-3">
                Configure Network
              </Button>
            </div>
          </Card>

          {/* Security */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Security</h3>
            </div>
            
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Two-Factor Auth
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Security Log
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-6">
        <Button onClick={handleSave} className="bg-gradient-ocean shadow-ocean">
          Save Settings
        </Button>
      </div>
    </div>
  );
}