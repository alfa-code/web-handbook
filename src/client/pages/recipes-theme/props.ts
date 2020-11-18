type OwnProps = {
	theme?: {
		title?: string,
		url?: string,
		recipes: {
			text?: string,
			url?: string,
			description?: string
		}[]
	},
	type?: string
}

export type Props = OwnProps;
