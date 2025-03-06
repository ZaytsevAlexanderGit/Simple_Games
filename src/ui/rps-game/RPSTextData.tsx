import { motion } from 'motion/react';
import { RPSState } from '../../assets/stores/state.ts';
import { useMediaQuery } from '@mui/material';

export function RPSTextData() {
  const comment = RPSState((state) => state.RPSComment);
  const touched = RPSState((state) => state.touched);

  const matches = useMediaQuery('(min-width:575px)');

  return (
    <div
      style={{
        margin: '0',
        color: 'black',
        outline: '1px solid black',
        border: '1px solid black',
        backgroundColor: 'white',
        // backgroundColor: 'rgb(197, 232, 252)',
        borderRadius: '8px',
        height: '10vh',
        padding: '0.25rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '50vi',
        width: matches ? '50vi' : '50vi',
        fontSize: '1.5rem',
      }}
    >
      <motion.p
        key={touched}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        {comment}
      </motion.p>
    </div>
  );
}
