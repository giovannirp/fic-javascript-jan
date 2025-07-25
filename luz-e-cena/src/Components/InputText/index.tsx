import React from 'react'
import styles from './inputText.module.css';

const InputText = ({...props}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input 
      type="text" 
      className={styles.input} {...props} 
    />
  );
}

export default InputText