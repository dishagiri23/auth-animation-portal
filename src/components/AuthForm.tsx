import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: isLogin ? "Welcome back!" : "Account created successfully!",
      description: "You have been successfully authenticated.",
    });
    
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-8 glass-card rounded-2xl"
    >
      <motion.div
        key={isLogin ? "login" : "register"}
        initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-6">
          {isLogin ? "Welcome back" : "Create account"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-white/70">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-white/70">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="form-input"
              required
            />
          </div>
          
          {!isLogin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2"
            >
              <label className="text-sm text-white/70">Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm your password"
                className="form-input"
                required
              />
            </motion.div>
          )}
          
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-white/90 transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
              />
            ) : (
              isLogin ? "Sign In" : "Create Account"
            )}
          </Button>
          
          <p className="text-center text-sm text-white/70">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-white hover:underline transition-all duration-200"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};