type OwnProps = {
	navigation: { 
			categoryName?: string,
			categoryIconUrl?: string,
			categories?: {
					name?: string,
					url?: string,
					childrens?: {
							text?: string,
							url?: string
						}[]
				}[],
		}[]
}

export type Props = OwnProps;
