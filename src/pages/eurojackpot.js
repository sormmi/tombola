import React, { useState } from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import eurojackpot from "js/eurojackpot"
import Eurojackpot from "components/Eurojackpot"
import {Button, ClearButton} from "styles/Button"
import {InfoSpan} from "styles/InfoSpan"
import {Grid} from "styles/Grid"

const EurojackpotPage = () => {

  const [counter, setCounter] = useState(0);
  const [rowNums, setRowNums] = useState([[]]);

  const handleClick = (val) => {

    if (val < 0) {
      setCounter(0);
      setRowNums([[]]);
      return;
    }

    let index = counter + val;
    if (index > 10) index = 10;

    setupEurojackpot(index);
  }

  const setupEurojackpot = (count) => {
    setCounter(count);

    if (count === 1) {
      setRowNums([eurojackpot()]);
    } else {
      setRowNums([...rowNums, eurojackpot()]);
    }
  }

  const handleDelete = (index) => {
    rowNums.splice(index,1);
    setCounter(counter - 1);
  }

  const getEurojackpotRows = () => {

    if (counter < 1) return <InfoSpan>Ei arvottuja rivejä</InfoSpan>;

    let rows = [];
    for (let i = 0; i < counter; i++)  {
      rows.push(<Eurojackpot nums={rowNums[i]} key={i} index={i} onDelete={handleDelete} />);
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
