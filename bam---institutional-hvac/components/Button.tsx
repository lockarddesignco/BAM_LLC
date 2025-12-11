import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  animated?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  animated = true,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm group";
  
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  // Mask Animation CSS
  // Using the specific sprite and steps(70) as requested
  const maskKeyframes = `
    @keyframes mask-ani-enter {
      from { -webkit-mask-position: 0 0; mask-position: 0 0; }
      to { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
    }
    @keyframes mask-ani-exit {
      from { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
      to { -webkit-mask-position: 0 0; mask-position: 0 0; }
    }
    .mask-btn-layer {
      -webkit-mask: url('https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png');
      mask: url('https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png');
      -webkit-mask-size: 7100% 100%;
      mask-size: 7100% 100%;
      animation: mask-ani-exit 0.7s steps(70) forwards;
    }
    .group:hover .mask-btn-layer {
      animation: mask-ani-enter 0.7s steps(70) forwards;
    }
  `;

  // Animated Primary Variant (Green -> White Mask Reveal)
  if (variant === 'primary' && animated) {
    return (
      <>
        <style>{maskKeyframes}</style>
        <button 
          className={`${baseStyles} ${sizes[size]} ${widthStyle} bg-white text-[#265A4A] border border-[#265A4A] shadow-md hover:shadow-lg overflow-hidden ${className}`}
          {...props}
        >
          {/* Bottom Layer (Target State): White BG, Green Text */}
          {/* This layer is visible when the mask clears (becomes transparent) */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
          </span>

          {/* Top Layer (Initial State): Green BG, White Text */}
          {/* This layer has the mask applied. Initially opaque, it covers the bottom layer. */}
          {/* On hover, the mask animates to transparent, revealing the bottom layer. */}
          <span 
              className="mask-btn-layer absolute inset-0 z-20 flex items-center justify-center gap-2 bg-[#265A4A] text-white w-[101%]" 
          >
              {/* Duplicate content for the top layer */}
              {children}
          </span>
        </button>
      </>
    );
  }

  // Standard Variants (No Animation)
  const variants = {
    // Medical-Forest background, White text
    primary: "bg-[#265A4A] text-white hover:bg-[#1e483b] focus:ring-[#265A4A]",
    // Steel Blue-Grey background
    secondary: "bg-[#5E7A86] text-white hover:bg-[#4a616b] focus:ring-[#5E7A86]",
    // Transparent, Bordered with Medical-Forest
    outline: "bg-transparent border-2 border-[#265A4A] text-[#265A4A] hover:bg-[#265A4A] hover:text-white focus:ring-[#265A4A]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};