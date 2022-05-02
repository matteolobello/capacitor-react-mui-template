import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import {
  Location,
  Navigate,
  Route,
  Routes,
  useLocation
} from "react-router-dom"
import useIosSwipeToGoBack from "./hooks/useIosSwipeToGoBack"
import useSystemUi from "./hooks/useSystemUi"
import Details from "./routes/Details"
import Home from "./routes/Home"

const App = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState<Location>(location)
  const [transitionStage, setTransitionStage] = useState<"fadeIn" | "fadeOut">(
    "fadeIn"
  )

  const { updateStatusBar } = useSystemUi()

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  )

  useIosSwipeToGoBack()

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut")
    }
  }, [location])

  useEffect(() => {
    updateStatusBar(prefersDarkMode ? "dark" : "light")
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <div
        className={transitionStage}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn")
            setDisplayLocation(location)
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
