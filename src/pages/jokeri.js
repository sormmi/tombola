import React, {useState} from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import jokeri from "js/jokeri"
import Jokeri from "components/Jokeri"
import {Button, ClearButton} from "styles/Button"
import {InfoSpan} from "styles/InfoSpan"
import {Grid} from "styles/Grid"

const JokeriPage = () => {

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
      rows.push(<Jokeri nums={jokeriRowNums[i]} key={i}/>);
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

export default JokeriPage
