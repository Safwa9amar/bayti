"use client";

import { useTheme } from "next-themes";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useEffect, useState } from "react";

export function GluestackWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <GluestackUIProvider
      mode={theme === "dark" || theme === "light" ? theme : "light"}
    >
      {children}
    </GluestackUIProvider>
  );
}
