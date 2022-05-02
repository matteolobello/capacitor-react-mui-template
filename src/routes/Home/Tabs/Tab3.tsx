import { ActionSheet, ActionSheetButtonStyle } from "@capacitor/action-sheet"
import { Button, Typography } from "@mui/material"
import { useCallback } from "react"

export default function Tab3() {
	const handleClick = useCallback(async () => {
		const result = await ActionSheet.showActions({
			title: "Example Action Sheet",
			message: "Select an option",
			options: [
				{
					title: "Action #1"
				},
				{
					title: "Action #2"
				},
				{
					title: "Action #3",
					style: ActionSheetButtonStyle.Destructive
				}
			]
		})

		alert(`You selected option #${result.index + 1}`)
	}, [])

	return (
		<>
			<Typography variant="h3" fontWeight={700} marginTop={4}>
				Tab 3
			</Typography>
			<Button onClick={handleClick}>Click me</Button>
		</>
	)
}
