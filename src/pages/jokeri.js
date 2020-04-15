import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import jokeri from "../js/jokeri"
import JokeriRow from "../components/Jokeri/JokeriRow"
import {Button, ClearButton} from "../styles/Button"
import {InfoSpan} from "../styles/InfoSpan"

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(0, 1fr);
  align-items: start;
  row-gap: 10px;
  margin: 20px;
  padding: 20px;
`;

const SecondPage = () => {

  const [jokeriCounter, setJokeriCounter] = useState(0);
  const [jokeriRowNums, setJokeriRowNums] = useState([[]]);

  const handleJokeriClick = (val) => {

    if (val < 0) {
      setJokeriCounter(0);
      setJokeriRowNums([[]]);
      return;
    }

    let temp = jokeriCounter + val;
    if (temp > 10) temp = 10;

    setJokeriCounter(temp);

    jokeriRowNums[temp - 1] = jokeri();
  }

  const getJokeriRows = () => {

    if (jokeriCounter < 1) return <InfoSpan>Ei arvottuja rivejä</InfoSpan>;

    let rows = [];
    for (let i = 0; i < jokeriCounter; i++) {
      rows.push(<JokeriRow nums={jokeriRowNums[i]} key={i}/>);
    }
    return rows;
  }
  return (
    <Layout page="jokeri" title="jokeri">
      <SEO title="Jokeri"/>

      <div className="container">

        <Button onClick={() => handleJokeriClick(1)}>Arvo rivi</Button>
        <ClearButton onClick={() => handleJokeriClick(-1)}>Tyhjennä</ClearButton>

        <Grid>
          {getJokeriRows()}
        </Grid>

      </div>
    </Layout>
  )
}

export default SecondPage
