// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import useRouteLoader from './useRouteLoader';

// export default function FancyProgressBar({ bg = "bg-orange-600" }) {
//   const loading = useRouteLoader();

//   return (
//     <>
//     {loading && (
//       <AnimatePresence>
//         <motion.div
//           className={`fixed top-0 left-0 h-[5px] z-[99999999] animate-pulse ${bg}`}
//           initial={{ width: '0%' }}
//           animate={{ width: ['0%', '74%', '82%', '90%', '94%', '97%', '98%', '100%'] }}
//           exit={{ opacity: 0 }}
//           transition={{
//             duration: 15,
//             times: [0, 0.14, 0.285, 0.43, 0.57, 0.71, 0.86, 1],
//             ease: 'linear'
//           }}
//         />
//         </AnimatePresence>
//       )}
//           </>
//   );
// }


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import useRouteLoader from './useRouteLoader';

export default function FancyProgressBar() {
  const loading = useRouteLoader();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (loading) {
      setVisible(true);
      setProgress(0);

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 50) return prev + 10;
          if (prev < 85) return prev + Math.random() * 2;
          return prev;
        });
      }, 300);
    } else {
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 500);
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="fancy-loader"
          className={`fixed top-0 left-0 h-[.325rem] z-[99999] animate-pulse bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400 rounded-e-sm`}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut'
          }}
        />
      )}
    </AnimatePresence>
  );
}
