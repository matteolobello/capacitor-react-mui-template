import { useEffect, useMemo } from "react"

import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  createTheme
} from "@mui/material"

import useSystemUi from "../../hooks/useSystemUi"

interface IThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: IThemeProviderProps) {
  const { prefersDarkMode, updateStatusBar } = useSystemUi()

  useEffect(() => {
    updateStatusBar(prefersDarkMode ? "dark" : "light")
  }, [prefersDarkMode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  )

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <style>
        {`
          body {
            box-sizing: border-box;
            user-select: none;
            touch-action: manipulation;
          }
      `}
      </style>
      {children}
    </MUIThemeProvider>
  )
}
