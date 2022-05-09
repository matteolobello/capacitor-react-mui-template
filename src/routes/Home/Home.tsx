import { useMemo } from "react"

import { Circle, EmojiEmotions, Square } from "@mui/icons-material"
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useTheme
} from "@mui/material"
import { useAtom } from "jotai"

import Container from "../../components/Container/Container"
import useSystemUi from "../../hooks/useSystemUi"
import { tabItemAtom } from "./Home.atoms"
import Tab1 from "./Tabs/Tab1"
import Tab2 from "./Tabs/Tab2"
import Tab3 from "./Tabs/Tab3"

export type TabId = "tab1" | "tab2" | "tab3"

export default function Home() {
  const [tabItem, setTabItem] = useAtom(tabItemAtom)

  const theme = useTheme()
  const { safeArea } = useSystemUi()

  const tab = useMemo(() => {
    const tabs: Record<TabId, JSX.Element> = {
      tab1: <Tab1 />,
      tab2: <Tab2 />,
      tab3: <Tab3 />
    }
    return tabs[tabItem]
  }, [tabItem])

  return (
    <>
      <Container
        safe
        boxed
        style={{
          // Bottom Navigation height
          paddingBottom: 56
        }}
      >
        {tab}
      </Container>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: theme.palette.background.paper
        }}
        elevation={3}
      >
        <BottomNavigation
          value={tabItem}
          onChange={(_, newValue) => setTabItem(newValue)}
          showLabels={true}
          style={{ marginBottom: safeArea.bottom }}
        >
          <BottomNavigationAction
            icon={<EmojiEmotions />}
            label="Tab 1"
            value="tab1"
          />
          <BottomNavigationAction
            icon={<Square />}
            label="Tab 2"
            value="tab2"
          />
          <BottomNavigationAction
            icon={<Circle />}
            label="Tab 3"
            value="tab3"
          />
        </BottomNavigation>
      </Paper>
    </>
  )
}
