import { Animation } from "@mui/icons-material"
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material"

export default function Tab2() {
  return (
    <>
      <Typography variant="h3" fontWeight={700} marginTop={4}>
        Tab 2
      </Typography>
      <List>
        {new Array(60).fill(0).map((_, i) => (
          <ListItem key={`tab-2-item-${i}`}>
            <ListItemButton>
              <ListItemIcon>
                <Animation />
              </ListItemIcon>
              <ListItemText primary={`Item ${i + 1}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}
