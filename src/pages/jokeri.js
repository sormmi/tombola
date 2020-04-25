import React, { useState } from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import jokeri from "js/jokeri"
import Jokeri from "components/Jokeri"
import {Button, ClearButton} from "styles/Button"
import {InfoSpan} from "styles/InfoSpan"
import {Grid} from "styles/Grid"

const JokeriPage = () => {

  const [counter, setCounter] = useState(0);
  const [rowNums, setRowNums] = useState([[]]);

  const handleJokeriClick = (val) => {

    if (val < 0) {
      setCounter(0);
      setRowNums([[]]);
      return;
    }

    let index = counter + val;
    if (index > 10) index = 10;

    setupJokeri(index);
  }

  const setupJokeri = (count) => {
    setCounter(count);

    if (count === 1) {
      setRowNums([jokeri()]);
    } else {
      setRowNums([...rowNums, jokeri()]);
    }
  }

  const handleDelete = (index) => {
    rowNums.splice(index,1);
    setCounter(counter - 1);
  }

  const getJokeriRows = () => {

    if (counter < 1) return <InfoSpan>Ei arvottuja rivejä</InfoSpan>;

    let rows = [];
    for (let i = 0; i < counter; i++) {
      rows.push(<Jokeri nums={rowNums[i]} key={i} index={i} onDelete={handleDelete}/>);
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
