/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'glow-sm': '0 0 10px rgba(192, 192, 192, 0.3)',
  			'glow': '0 0 20px rgba(192, 192, 192, 0.4)',
  			'glow-lg': '0 0 30px rgba(192, 192, 192, 0.5)',
  			'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
  			'glow-blue-lg': '0 0 30px rgba(59, 130, 246, 0.6)',
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in',
  			'fade-up': 'fadeUp 0.6s ease-out',
  			'slide-in': 'slideIn 0.4s ease-out',
  			'glow-pulse': 'glowPulse 2s ease-in-out infinite',
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			fadeUp: {
  				'0%': { opacity: '0', transform: 'translateY(20px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' },
  			},
  			slideIn: {
  				'0%': { transform: 'translateX(-100%)' },
  				'100%': { transform: 'translateX(0)' },
  			},
  			glowPulse: {
  				'0%, 100%': { boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)' },
  				'50%': { boxShadow: '0 0 30px rgba(192, 192, 192, 0.6)' },
  			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
