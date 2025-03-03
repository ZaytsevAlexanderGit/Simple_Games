import { motion } from 'motion/react';
import { gameState } from '../assets/stores/state.ts';

export function TextData() {
  const comment = gameState((state) => state.comment);
  const touched = gameState((state) => state.touched);

  return (
    <motion.p
      style={{
        outline: '1px dashed black',
        color: 'black',
        backgroundColor: 'rgb(197, 232, 252)',
        borderRadius: '8px',
        height: '10vh',
        padding: '0.25rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50vi',
        fontSize: '1.5rem',
      }}
      key={touched}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      {comment}
    </motion.p>
  );
}
