import { useState } from 'react';

export const values = ['addItem', 'addCollection'];
export function useStep() {
  const [selectedValue, setSelectedValue] = useState(values[0]);
  const setToItem = () => setSelectedValue(values[0]);
  const setToCollection = () => setSelectedValue(values[1]);
  return { step: selectedValue, setToItem, setToCollection };
}
