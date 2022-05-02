import { Capacitor } from "@capacitor/core"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const disabledRoutes = ["/"]

const THRESHOLD_EDGE = 80
const MIN_MOVEMENT_FOR_SWIPE = 20

const useIosSwipeToGoBack = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (Capacitor.getPlatform() !== "ios") {
      return
    }

    let initSwipeX: number | undefined = undefined
    let shouldListen = true

    const onTouchMove = ({ touches }: TouchEvent) => {
      if (!shouldListen) {
        return
      }

      if (touches.length === 1) {
        const { clientX } = touches[0]
        if (typeof initSwipeX !== "undefined") {
          const delta = clientX - initSwipeX
          if (delta > MIN_MOVEMENT_FOR_SWIPE) {
            if (!disabledRoutes.includes(pathname)) {
              navigate(-1)

              shouldListen = false
            }
          }
        } else {
          if (clientX < THRESHOLD_EDGE) {
            initSwipeX = clientX
          }
        }
      }
    }

    const onTouchEnd = () => {
      initSwipeX = undefined
      shouldListen = true
    }

    if (!disabledRoutes.includes(pathname)) {
      window.addEventListener("touchmove", onTouchMove)
      window.addEventListener("touchend", onTouchEnd)
    }

    return () => {
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [pathname])
}

export default useIosSwipeToGoBack
