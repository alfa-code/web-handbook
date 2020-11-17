type OwnProps = {
	theme?: {
		title?: string,
		recipes: {
			text?: string,
			url?: string,
			description?: string
		}[]
	}
}

export type Props = OwnProps;
