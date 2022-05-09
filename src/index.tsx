import { SafeAreaProvider } from "@reactivers/use-safe-area"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Navigate, Route } from "react-router-dom"

import { defineCustomElements } from "@ionic/pwa-elements/loader"

import AnimatedRouter from "./components/AnimatedRouter/AnimatedRouter"
import ThemeProvider from "./components/ThemeProvider/ThemeProvider"
import Details from "./routes/Details/Details"
import Home from "./routes/Home/Home"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SafeAreaProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AnimatedRouter>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="details" element={<Details />} />
          </AnimatedRouter>
        </BrowserRouter>
      </ThemeProvider>
    </SafeAreaProvider>
  </React.StrictMode>
)

defineCustomElements(window)
