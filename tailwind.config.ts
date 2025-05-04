import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6E9F0',
          100: '#CCD3E1',
          200: '#99A7C3',
          300: '#667BA5',
          400: '#334F87',
          500: '#0A1F44', // Navy Blue
          600: '#081A3A',
          700: '#061530',
          800: '#041025',
          900: '#020B1A',
        },
        secondary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B1FF',
          400: '#3397FF',
          500: '#1B9CFC', // Electric Blue
          600: '#1780D4',
          700: '#1260A1',
          800: '#0C406E',
          900: '#06203B',
        },
        accent: {
          50: '#F0FFF5',
          100: '#E1FFEB',
          200: '#C3FFD7',
          300: '#A5FFC3',
          400: '#87FFAF',
          500: '#7DFFB2', // Fresh Green
          600: '#64CC8E',
          700: '#4B996A',
          800: '#326647',
          900: '#193323',
        },
        dark: {
          50: '#F5F5F5',
          100: '#EBEBEB',
          200: '#D7D7D7',
          300: '#C3C3C3',
          400: '#AFADAD',
          500: '#2E2E2E', // Dark Charcoal
          600: '#252525',
          700: '#1C1C1C',
          800: '#131313',
          900: '#0A0A0A',
        },
        gray: {
          50: '#F9F9F9',
          100: '#F4F4F4', // Light Gray
          200: '#E9E9E9',
          300: '#DEDEDE',
          400: '#D3D3D3',
          500: '#7F8C8D', // Mid Gray
          600: '#666F70',
          700: '#4C5253',
          800: '#333536',
          900: '#191A1A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0A1F44 0%, #1B9CFC 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1B9CFC 0%, #7DFFB2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #7DFFB2 0%, #0A1F44 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2E2E2E 0%, #0A1F44 100%)',
        'gradient-light': 'linear-gradient(135deg, #FFFFFF 0%, #F4F4F4 100%)',
        'tech-pattern': "url('/images/tech-pattern.svg')",
        'network-mesh': "url('/images/network-mesh.svg')",
        'circuit-board': "url('/images/circuit-board.svg')",
        'glow-primary': 'radial-gradient(circle at center, rgba(26, 156, 252, 0.15) 0%, rgba(10, 31, 68, 0) 70%)',
        'glow-secondary': 'radial-gradient(circle at center, rgba(125, 255, 178, 0.15) 0%, rgba(27, 156, 252, 0) 70%)',
        'glow-accent': 'radial-gradient(circle at center, rgba(125, 255, 178, 0.15) 0%, rgba(10, 31, 68, 0) 70%)',
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        slide: 'slide 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: '500',
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            h1: {
              color: 'inherit',
              fontFamily: 'Poppins, Montserrat, system-ui, sans-serif',
              fontWeight: '700',
            },
            h2: {
              color: 'inherit',
              fontFamily: 'Poppins, Montserrat, system-ui, sans-serif',
              fontWeight: '600',
            },
            h3: {
              color: 'inherit',
              fontFamily: 'Poppins, Montserrat, system-ui, sans-serif',
              fontWeight: '600',
            },
            h4: {
              color: 'inherit',
              fontFamily: 'Poppins, Montserrat, system-ui, sans-serif',
              fontWeight: '600',
            },
          },
        },
      },
      boxShadow: {
        'soft-xl': '0 20px 27px 0 rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.03)',
        'soft-sm': '0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glow-primary': '0 0 15px rgba(26, 156, 252, 0.5)',
        'glow-secondary': '0 0 15px rgba(125, 255, 178, 0.5)',
        'glow-accent': '0 0 15px rgba(125, 255, 178, 0.5)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config; 