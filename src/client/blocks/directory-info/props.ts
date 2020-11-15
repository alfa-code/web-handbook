type OwnProps = {
	directory : {
			title?: string,
			items: {
				text?: string,
				url?: string,
				tag?: {
					className?: string,
					text?: string
				}
		}[]
	}
}

export type Props = OwnProps;
