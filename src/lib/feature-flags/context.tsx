import { createContext, useContext, useState, ReactNode } from "react";

export interface FeatureFlags {
  showMap: boolean;
}

const FeatureFlagContext = createContext<FeatureFlags | undefined>(undefined);

interface FeatureFlagProviderProps {
  children: ReactNode;
}

export function FeatureFlagProvider({ children }: FeatureFlagProviderProps) {
  const [features] = useState<FeatureFlags>({
    showMap: true,
  });

  return (
    <FeatureFlagContext.Provider value={features}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export const useFeatureFlags = (): FeatureFlags => {
  const context = useContext(FeatureFlagContext);
  if (context === undefined) {
    throw new Error(
      "useFeatureFlags must be used within a FeatureFlagProvider"
    );
  }
  return context;
};
