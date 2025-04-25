"use client";

import * as React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {useTheme as useNextTheme} from "next-themes";

export function ThemeProvider({children, ...props}: React.PropsWithChildren<React.ComponentProps<typeof NextThemesProvider>>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function useTheme() {
  return useNextTheme();
}

