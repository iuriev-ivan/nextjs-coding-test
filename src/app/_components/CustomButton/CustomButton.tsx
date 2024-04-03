'use client';

import styles from './CustomButton.module.css';
import cn from 'classnames';
export type CustomButtonProps = {
  text: string;
  type: 'button' | 'submit';
  isTransparent?: boolean;
};

export const CustomButton = ({ type, text, isTransparent }: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={cn(styles.CustomButton, {
        [styles['Transparent']]: isTransparent,
      })}
    >
      {text}
    </button>
  );
};
