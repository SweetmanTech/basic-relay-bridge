import { motion } from 'framer-motion';
import Image from 'next/image';

const Spinner = ({ size = 20 }) => (
  <motion.div
    animate={{ rotate: 360 }}
    className="w-[20px] aspect-square"
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    }}
  >
    <Image src="/images/zorb.png" width={size} height={size} alt="spinner" />
  </motion.div>
);

export default Spinner;
