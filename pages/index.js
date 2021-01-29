import Layout from "../components/Layout";
import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";


//Home page
const ContainerExampleContainer = () => (
  <div>
    <Layout>
      <Container>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Next JS Stars Wars Api
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  A dynamic website that is created using data retrieved from an
                  API
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded size="large" src="static/sw.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </Layout>
  </div>
);

export default ContainerExampleContainer;
