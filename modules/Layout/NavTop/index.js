import { Box, Header, Search, Section, Title } from 'grommet'

export default () => (
  <Header responsive={true} flex={true} justify="center">
    <Title responsive={true}>
      invoice app
    </Title>
    <Box flex={true} responsive={true} direction="row" margin="medium">
      <Search
        inline={true}
        fill={true}
        size="medium"
        placeHolder="Search"
        dropAlign={{ right: 'right' }}
      />
    </Box>
  </Header>
)
