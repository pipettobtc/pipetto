import * as React from "react"
import { Link, graphql } from 'gatsby'
import { Box, Grid, Image, InfiniteScroll, Button, Heading } from "grommet";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = ({data}) => {
  const { allFile } = data
  const fileNames = allFile.edges.map(({ node }) => node.relativePath)?.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  console.log(fileNames)
  return (
    <main style={pageStyles}>
      <Box
        fill
        align="center"
        justify="center"
        className="pb-8"
      >
        <Button primary label="Mint" href="https://pipe.inscrib3.land/create-unique-art"/>
      </Box>
      <Grid columns="small" gap="large">
        <InfiniteScroll items={fileNames}
          step={20}
        >
          {(el,i) => (
          <Box border={{ color: "brand", size: "small" }} key={el}>
            <Link to={`https://pipettobtc.github.io/pipetto/${el}`}>
              <Box background="brand" align="center">
                <Heading level={4}>ID: {i}</Heading>
              </Box>
              <Image src={`/pipetto/${el}`} fit="contain" style={{ imageRendering: "pixelated" }} />
            </Link>
          </Box>
          )}
        </InfiniteScroll>
      </Grid>
    </main>
  )
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "static" } }
    sort: { fields: id, order: ASC }
    ) {
      edges {
        node {
          id
          relativePath
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
