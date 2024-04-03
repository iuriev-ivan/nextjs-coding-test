'use server';

import Link from 'next/link';
import styles from './CustomLink.module.css';

export type CustomLinkProps = {
  href: string,
  text: string
};

export const CustomLink = ({ href, text }: CustomLinkProps) => {
  return (
      <Link className={styles.CustomLink} href={href}>
        {text}
      </Link>
  );
};
