import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import eurojackpot from "../js/eurojackpot"
import EurojackpotRow from "../components/Eurojackpot/EurojackpotRow"
import {Button, ClearButton} from "../styles/Button"
import {InfoSpan} from "../styles/InfoSpan"
import {Grid} from "../styles/Grid"

const EurojackpotPage = () => {

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
    rowNums[temp-1] = eurojackpot();
  }

  const getEurojackpotRows = () => {

    if (counter < 1) return <InfoSpan>Ei arvottuja rivejä</InfoSpan>;

    let rows = [];
    for (let i = 0; i < counter; i++)  {
      rows.push(<EurojackpotRow nums={rowNums[i]} key={i} />);
    }
    return rows;
  }

  return (
    <Layout page="eurojackpot" title="eurojackpot">
      <SEO title="Eurojackpot"/>

      <div className="container">

        <Button onClick={() => handleClick(1)}>Arvo rivi</Button>
        <ClearButton onClick={() => handleClick(-1)}>Tyhjennä</ClearButton>

        <Grid>
          {getEurojackpotRows()}
        </Grid>

      </div>
    </Layout>
  )
}

export default EurojackpotPage
