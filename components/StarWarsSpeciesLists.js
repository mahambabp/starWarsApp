import { List, Container, Header, Modal, Card } from "semantic-ui-react";


//Species characteristics
const StarWarsSpeciesLists = props => (
  <Container textAlign="center" style={{ marginTop: "7em" }}>
    <Header
      as="h1"
      content="Star Wars Species "
      subheader="Click on button for detailed information"
    />
    {props.swc.results.map(swc => (
      <List horizontal relaxed key={swc.name}>
        <List.Item>
          <List.Content>
            <Modal
              trigger={
                <Card style={{ margin: "5px" }}>
                  <Card.Header name={swc.name} />
                  <Card.Content>
                    <Card.Header>{swc.name}</Card.Header>
                  </Card.Content>
                </Card>
              }
            >
              <Modal.Header>@{swc.name}</Modal.Header>
              <Modal.Content image>
                <Card.Header name={swc.name}  />
                <Modal.Description>
                  <Header>{swc.name}</Header>
                  <List>
                    <List.Item> Average Height: {swc.average_height }</List.Item>
                    <List.Item>Classification: {swc.classification }</List.Item>
                    <List.Item>Hair Color: {swc.hair_colors}</List.Item>
                    <List.Item>Skin Color: {swc.skin_colors}</List.Item>
                    <List.Item>Eye Color: {swc.eye_colors}</List.Item>
                    <List.Item>Homeworld: {swc.homeworld }</List.Item>
                    <List.Item>Films: {swc.films }</List.Item>
                  </List>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </List.Content>
        </List.Item>
      </List>
    ))}
  </Container>
);

export default StarWarsSpeciesLists;
