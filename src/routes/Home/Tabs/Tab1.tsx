import { Button, Stack, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import { counterAtom } from "../Home.atoms"

export default function Tab1() {
	const [count, setCount] = useAtom(counterAtom)

	const navigate = useNavigate()

	return (
		<>
			<Typography variant="h3">Tab 1</Typography>
			<Stack direction="row" spacing={2}>
				<Button variant="contained" onClick={() => setCount(count + 1)}>
					Counter: {count}
				</Button>
				<Button variant="contained" onClick={() => navigate("/details")}>
					Go to Details screen
				</Button>
			</Stack>
		</>
	)
}
