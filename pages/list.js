import React from 'react'
import StarWarsSpeciesLists from "../components/StarWarsSpeciesLists";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";

//Rendering dynamice list
class swc extends React.Component {
  static async getInitialProps() {
    const res = await fetch("https://swapi.dev/api/species/");
    const swc = await res.json();
    return {
      swc
    };
  }

  render() {
    return (
      <Layout title="Star Wars Species Lists">
        <StarWarsSpeciesLists swc={this.props.swc} />
      </Layout>
    );
  }
}

export default swc;
