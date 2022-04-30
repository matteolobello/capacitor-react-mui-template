import { defineCustomElements } from "@ionic/pwa-elements/loader"
import { SafeAreaProvider } from "@reactivers/use-safe-area"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SafeAreaProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SafeAreaProvider>
	</React.StrictMode>
)

defineCustomElements(window)
