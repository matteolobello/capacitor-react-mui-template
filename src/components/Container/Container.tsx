import { ArrowBack } from "@mui/icons-material"
import {
	AppBar, Container as MUIContainer,
	ContainerTypeMap,
	IconButton,
	Toolbar,
	Typography
} from "@mui/material"
import { DefaultComponentProps } from "@mui/material/OverridableComponent"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"
import useSystemUi from "../../hooks/useSystemUi"

type IContainer = DefaultComponentProps<
	ContainerTypeMap<
		{
			safe?:
				| boolean
				| { top?: boolean; right?: boolean; bottom?: boolean; left?: boolean }
			boxed?: boolean
			title?: string
		},
		"div"
	>
>

export default function Container({
	safe,
	boxed,
	title,
	style,
	children,
	...rest
}: IContainer) {
	const navigate = useNavigate()
	const { safeArea } = useSystemUi()

	const content = boxed ? <Box mx={2}>{children}</Box> : children

	const appBar = title ? (
		<AppBar position="sticky" style={{ paddingTop: safeArea.top }}>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
					onClick={() => navigate(-1)}
				>
					<ArrowBack />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	) : undefined

	return (
		<>
			{appBar}
			<MUIContainer
				{...rest}
				style={{
					paddingTop:
						((typeof safe === "boolean" && safe) ||
							(typeof safe !== "boolean" && safe?.top)) &&
						!title
							? safeArea.top
							: undefined,
					paddingRight:
						(typeof safe === "boolean" && safe) ||
						(typeof safe !== "boolean" && safe?.right)
							? safeArea.right
							: undefined,
					paddingBottom:
						(typeof safe === "boolean" && safe) ||
						(typeof safe !== "boolean" && safe?.bottom)
							? safeArea.bottom
							: undefined,
					paddingLeft:
						(typeof safe === "boolean" && safe) ||
						(typeof safe !== "boolean" && safe?.left)
							? safeArea.left
							: undefined,
					...style
				}}
			>
				{content}
			</MUIContainer>
		</>
	)
}
