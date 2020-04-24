import React, {useState} from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import lotto from "js/lotto"
import Lotto from "components/Lotto"
import {Button, ClearButton} from "styles/Button"
import {InfoSpan} from "styles/InfoSpan"
import {Grid} from "styles/Grid"

const LottoPage = () => {

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

    rowNums[temp-1] = lotto();
  }

  const handleDelete = (index) => {
    rowNums.splice(index,1);
    setCounter(counter - 1);
  }

  const getLottoRows = () => {

    if (counter < 1) return <InfoSpan>Ei arvottuja rivejä</InfoSpan>;

    let rows = [];
    for (let i = 0; i < counter; i++)  {
      rows.push(<Lotto index={i} nums={rowNums[i]} key={i} onDelete={handleDelete} />);
    }
    return rows;
  }

  return (
    <Layout page="lotto" title="lotto">
      <SEO title="Lotto"/>

      <div className="container">

        <Button onClick={() => handleClick(1)}>Arvo rivi</Button>
        <ClearButton onClick={() => handleClick(-1)}>Tyhjennä</ClearButton>

        <Grid>
          {getLottoRows()}
        </Grid>

      </div>
    </Layout>
  )
}

export default LottoPage
