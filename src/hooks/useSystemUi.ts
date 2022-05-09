import { useSafeArea } from "@reactivers/use-safe-area"
import { useCallback } from "react"

import { Capacitor } from "@capacitor/core"
import { StatusBar, Style } from "@capacitor/status-bar"

import { useMediaQuery } from "@mui/material"

const useSystemUi = () => {
  const safeArea = useSafeArea()

  const updateStatusBar = useCallback((style: "light" | "dark") => {
    if (Capacitor.getPlatform() !== "ios") {
      return
    }

    StatusBar.setStyle({ style: style === "light" ? Style.Light : Style.Dark })
  }, [])

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  return {
    updateStatusBar,
    safeArea,
    prefersDarkMode
  }
}

export default useSystemUi
