import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Droplets, Leaf, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }

    // Simulate authentication
    toast({
      title: isLogin ? "Welcome back!" : "Account created!",
      description: isLogin ? "Successfully logged in to AquaHarvest." : "Your account has been created successfully."
    });
    
    navigate("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Hero Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src={heroImage} 
          alt="Solar water harvesting system in natural environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-ocean/20"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Sustainable Water Solutions</h2>
            <p className="text-xl opacity-90">Harness nature's power for clean, sustainable water</p>
          </div>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="w-full lg:w-1/2 bg-gradient-subtle flex items-center justify-center p-4">
        <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Droplets className="h-12 w-12 text-primary" />
              <Leaf className="h-6 w-6 text-secondary absolute -top-1 -right-1" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            AquaHarvest
          </h1>
          <p className="text-muted-foreground mt-2">
            Solar-Powered Water Harvesting System
          </p>
        </div>

        <Card className="p-8 shadow-ocean">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Sign in to monitor your water harvesting system" 
                : "Join the sustainable water revolution"
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="transition-all duration-300 focus:shadow-ocean/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="pr-10 transition-all duration-300 focus:shadow-ocean/20"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-300 focus:shadow-ocean/20"
                />
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-gradient-ocean hover:bg-primary/90 shadow-ocean"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button
                variant="link"
                onClick={() => setIsLogin(!isLogin)}
                className="p-0 ml-1 text-primary hover:text-primary-glow"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </Button>
            </p>
          </div>

          {/* Demo credentials */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium text-foreground mb-2">Demo Credentials:</p>
            <p className="text-xs text-muted-foreground">
              Email: demo@aquaharvest.com<br />
              Password: demo123
            </p>
          </div>
        </Card>

        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}