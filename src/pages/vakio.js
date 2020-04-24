import React, {useState} from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import vakio from "js/vakio"
import Vakio from "components/Vakio"
import {Button, ClearButton} from "styles/Button"
import {InfoSpan} from "styles/InfoSpan"
import { Column } from "styles/Grid"

const VakioPage = () => {

  const [counter, setCounter] = useState(0);
  const [rowNums, setRowNums] = useState([[]]);

  const handleClick = (val) => {

    if (val < 0) {
      setCounter(0);
      setRowNums([[]]);
      return;
    }

    let temp = counter + val;
    if (temp > 7) temp = 7;

    setCounter(temp);

    rowNums[temp - 1] = vakio();
  }

  const handleDelete = (index) => {
    rowNums.splice(index,1);
    setCounter(counter - 1);
  }

  const getVakioRows = () => {

    if (counter < 1) return <InfoSpan>Ei arvottuja rivejä</InfoSpan>;

    let rows = [];
    for (let i = 0; i < counter; i++) {
      rows.push(<Vakio nums={rowNums[i]} key={i} index={i} onDelete={handleDelete}/>);
    }
    return rows;
  }
  return (
    <Layout page="vakio" title="vakio">
      <SEO title="Vakio"/>

      <div className="container">

        <Button onClick={() => handleClick(1)}>Arvo rivi</Button>
        <ClearButton onClick={() => handleClick(-1)}>Tyhjennä</ClearButton>

        <Column>
          {getVakioRows()}
        </Column>

      </div>
    </Layout>
  )
}

export default VakioPage
