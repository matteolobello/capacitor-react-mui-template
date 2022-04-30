import { Capacitor } from "@capacitor/core"
import { StatusBar, Style } from "@capacitor/status-bar"
import { useSafeArea } from "@reactivers/use-safe-area"
import { useCallback } from "react"

const useSystemUi = () => {
	const safeArea = useSafeArea()

	const updateStatusBar = useCallback((style: "light" | "dark") => {
		if (Capacitor.getPlatform() !== "ios") {
			return
		}

		StatusBar.setStyle({ style: style === "light" ? Style.Light : Style.Dark })
	}, [])

	return {
		updateStatusBar,
		safeArea
	}
}

export default useSystemUi
