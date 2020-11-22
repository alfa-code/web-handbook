type OwnProps = {
	themes: {
		title?: string,
		url?: string,
		recipes: {
			text?: string,
			url?: string,
		}[]
	}[],
	type?: string
}

export type Props = OwnProps;
