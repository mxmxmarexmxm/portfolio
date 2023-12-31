import { createContext, useEffect, useState } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fps: 17,
    animationTextColor: '#151515',
    charset: 'M',
    size: 12,
    animation: true,
    projectsLayout: 'carousel',
    primaryTextColor: '#ffffff',
    secondaryTextColor: '#6b7280',
    backgroundColor: '#0000000D',
    iconsColor: '#ffffff',
    formBackgroundColor: '#080808',
  });

  useEffect(() => {
    const localStorageSettings = localStorage.getItem('settings');
    localStorageSettings && setSettings(JSON.parse(localStorageSettings));
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
