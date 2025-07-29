import { useState } from "react";
import { AuthForm } from "./AuthForm";
import { AuthBackground } from "./AuthBackground";

export function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <AuthBackground />
      
      <div className="w-full max-w-md animate-fade-in-up">
        <AuthForm 
          isSignUp={isSignUp} 
          onToggle={() => setIsSignUp(!isSignUp)} 
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-8 h-8 border-2 border-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-primary/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-8 w-6 h-6 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-8 right-1/4 w-4 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
    </div>
  );
}