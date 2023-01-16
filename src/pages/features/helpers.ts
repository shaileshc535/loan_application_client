/* eslint-disable prettier/prettier */
import { MouseEvent } from 'react';

export const selectCheckboxViaParent = (e: MouseEvent<HTMLElement>, preventDefault = true) => {
  if (preventDefault) {
    e.preventDefault();
  }
  const checkbox = e.currentTarget.querySelector('input[type=checkbox]')! as HTMLInputElement;
  checkbox.click();
};
