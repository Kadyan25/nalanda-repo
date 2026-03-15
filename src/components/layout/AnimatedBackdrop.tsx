import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const stickers = [
  { top: 10, left: 5, size: 24, duration: 5.4, delay: 0.2 },
  { top: 20, left: 90, size: 22, duration: 6.1, delay: 0.5 },
  { top: 34, left: 8, size: 20, duration: 5.8, delay: 0.9 },
  { top: 44, left: 93, size: 26, duration: 6.6, delay: 0.1 },
  { top: 56, left: 6, size: 24, duration: 5.9, delay: 0.6 },
  { top: 68, left: 91, size: 20, duration: 6.3, delay: 0.3 },
  { top: 80, left: 7, size: 24, duration: 5.6, delay: 0.8 },
  { top: 88, left: 92, size: 18, duration: 6.2, delay: 0.4 },
];

const orbs = [
  { top: 14, left: 16, size: 180, drift: 24, duration: 12 },
  { top: 30, left: 78, size: 210, drift: -26, duration: 13 },
  { top: 62, left: 20, size: 190, drift: 22, duration: 11 },
  { top: 78, left: 72, size: 170, drift: -20, duration: 14 },
];

const routeTheme = (pathname: string) => {
  if (pathname.startsWith('/about')) {
    return {
      symbols: ['+', '*', 'o', 'x'],
      tint: 'text-red-800/30',
      orb: 'from-red-300/28 to-amber-200/20',
    };
  }

  if (pathname.startsWith('/academics')) {
    return {
      symbols: ['*', '+', 'x', '='],
      tint: 'text-amber-800/30',
      orb: 'from-amber-300/30 to-yellow-200/18',
    };
  }

  if (pathname.startsWith('/gallery')) {
    return {
      symbols: ['o', '<>', '+', 'x'],
      tint: 'text-orange-800/30',
      orb: 'from-orange-300/26 to-red-200/18',
    };
  }

  if (pathname.startsWith('/enquire')) {
    return {
      symbols: ['+', '*', '//', 'o'],
      tint: 'text-yellow-800/30',
      orb: 'from-yellow-300/30 to-amber-200/18',
    };
  }

  return {
    symbols: ['*', '+', 'o', 'x'],
    tint: 'text-school-blue-dark/25',
    orb: 'from-red-300/22 to-yellow-200/16',
  };
};

const AnimatedBackdrop = () => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return null;
  }

  const theme = routeTheme(pathname);

  return (
    <div className="pointer-events-none fixed inset-0 z-[30] overflow-hidden" aria-hidden="true">
      {orbs.map((orb, index) => (
        <motion.div
          key={`orb-${pathname}-${index}`}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${theme.orb}`}
          style={{
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
          }}
          animate={{
            x: [0, orb.drift, 0],
            y: [0, -14, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {stickers.map((sticker, index) => (
        <motion.span
          key={`sticker-${pathname}-${index}`}
          className={`absolute font-black select-none ${theme.tint}`}
          style={{
            top: `${sticker.top}%`,
            left: `${sticker.left}%`,
            fontSize: `${sticker.size}px`,
            textShadow: '0 0 12px rgba(127,29,29,0.12)',
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 10, -8, 0],
            opacity: [0.14, 0.42, 0.14],
          }}
          transition={{
            duration: sticker.duration,
            delay: sticker.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {theme.symbols[index % theme.symbols.length]}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedBackdrop;
