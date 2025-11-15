// import React, { createContext, useContext, useState } from 'react';

// // Define your context's value type (for TypeScript)
// interface BooleanContextType {
//   value: boolean;
//   toggleValue: () => void;
// }

// // Create the context with a default value of `undefined`
// const BooleanContext = createContext<BooleanContextType | undefined>(undefined);

// // Create the provider component
// export const BooleanProvider: React.FC = ({ children }:any) => {
//   const [value, setValue] = useState<boolean>(false);

//   // Toggle function to switch between true/false
//   const toggleValue = () => {
//     setValue((prevValue) => !prevValue);
//   };

//   return (
//     <BooleanContext.Provider value={{ value, toggleValue }}>
//       {children}
//     </BooleanContext.Provider>
//   );
// };

// // Custom hook to use the context in other components
// export const useBooleanContext = (): BooleanContextType => {
//   const context = useContext(BooleanContext);
//   if (!context) {
//     throw new Error('useBooleanContext must be used within a BooleanProvider');
//   }
//   return context;
// };






import React, { createContext, useContext, useState } from 'react';

// Define context type for a boolean state
interface BooleanContextType {
  value: boolean;
  setValue: (newValue: boolean) => void;
}

// Create context with a default value
const BooleanContext = createContext<BooleanContextType | undefined>(undefined);

// Create the provider component
export const BooleanProvider: React.FC = ({ children }:any) => {
  const [value, setValue] = useState<boolean>(false); // Directly managing the value

  return (
    <BooleanContext.Provider value={{ value, setValue }}>
      {children}
    </BooleanContext.Provider>
  );
};

// Custom hook to use the context
export const useBooleanContext = (): BooleanContextType => {
  const context = useContext(BooleanContext);
  if (!context) {
    throw new Error('useBooleanContext must be used within a BooleanProvider');
  }
  return context;
};
