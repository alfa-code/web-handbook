type OwnProps = {
	directory: {
		title?: string,
		description?: string,
		img?: string,
		lists : {
			title?: string,
			subtitle?: string,
			items?: {
				title?: string,
				items: {
					text?: string,
					url?: string,
					tag?: {
						className?: string,
						text?: string
					}
				} []
			}[]
		} []
	}
}

export type Props = OwnProps;
