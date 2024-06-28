import React, {createContext, useState, useContext, ReactNode} from 'react';
import COLORS, {Theme} from '../style/style';

interface ThemeContextType {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [themeColor, setThemeColor] = useState(COLORS.orange);

  return (
    <ThemeContext.Provider value={{themeColor, setThemeColor}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThema = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('ERROR');
  }
  return context;
};
