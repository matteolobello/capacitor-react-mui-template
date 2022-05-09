import { useEffect, useState } from "react"
import { Location, Routes, useLocation } from "react-router-dom"

import useIosSwipeToGoBack from "../../hooks/useIosSwipeToGoBack"
import s from "./AnimatedRouter.module.css"

interface IAnimatedRouterProps {
  children: React.ReactNode
}

export default function AnimatedRouter({
  children: routes
}: IAnimatedRouterProps) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState<Location>(location)
  const [transitionStage, setTransitionStage] = useState<
    typeof s.fadeIn | typeof s.fadeOut
  >(s.fadeIn)

  useIosSwipeToGoBack()

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage(s.fadeOut)
    }
  }, [location])

  return (
    <div
      className={transitionStage}
      onAnimationEnd={() => {
        if (transitionStage === s.fadeOut) {
          setTransitionStage(s.fadeIn)
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>{routes}</Routes>
    </div>
  )
}
