import {
	Anchor,
	Box,
	Footer,
	Menu,
	Paragraph,
	Title,
} from 'custom-grommet-package'

export default () => (
	<div>
		<Title>
			invoice app
		</Title>
		<Box direction="row" align="center" pad={{ between: 'medium' }}>
			<Paragraph margin="none">
				demo
			</Paragraph>
			<Menu direction="row" size="small" dropAlign={{ right: 'right' }}>
				<Anchor href="#">
					Support
				</Anchor>
			</Menu>
		</Box>
	</div>
)
