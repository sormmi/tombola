import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import viking from "../js/viking"
import VikingRow from "../components/Viking/VikingRow"
import {Button, ClearButton} from "../styles/Button"
import {InfoSpan} from "../styles/InfoSpan"
import {Grid} from "../styles/Grid"

const VikingPage = () => {

  const [counter, setCounter] = useState(0);
  const [rowNums, setRowNums] = useState([[]]);

  const handleClick = (val) => {

    if (val < 0) {
      setCounter(0);
      setRowNums([[]]);
      return;
    }

    let temp = counter + val;
    if (temp > 10) temp = 10;

    setCounter(temp);

    rowNums[temp-1] = viking();
  }

  const getVikingRows = () => {

    if (counter < 1) return <InfoSpan>Ei arvottuja rivejä</InfoSpan>;

    let rows = [];
    for (let i = 0; i < counter; i++)  {
      rows.push(<VikingRow nums={rowNums[i]} key={i} />);
    }
    return rows;
  }

  return (
    <Layout page="viking" title="vikinglotto">
      <SEO title="Viking"/>

      <div className="container">

        <Button onClick={() => handleClick(1)}>Arvo rivi</Button>
        <ClearButton onClick={() => handleClick(-1)}>Tyhjennä</ClearButton>

        <Grid>
          {getVikingRows()}
        </Grid>

      </div>
    </Layout>
  )
}

export default VikingPage
