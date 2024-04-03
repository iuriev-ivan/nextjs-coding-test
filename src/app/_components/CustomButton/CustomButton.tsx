'use client';

import styles from './CustomButton.module.css';
import cn from 'classnames';

export type CustomButtonProps = {
  text: string;
  type: 'button' | 'submit';
  isTransparent?: boolean;
  formAction?: (formData: FormData) => Promise<{ error: string } | undefined>;
};

export const CustomButton = ({ type, text, isTransparent, formAction }: CustomButtonProps) => {
  return (
    <button
      formAction={formAction}
      type={type}
      className={cn(styles.CustomButton, {
        [styles['Transparent']]: isTransparent,
      })}
    >
      {text}
    </button>
  );
};
