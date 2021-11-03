import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from "reactjs-credit-card/form";
import Card from "reactjs-credit-card/card";
import React from 'react';




export default function App(){
return (
  <div>
<Card />
<form>
    <CardNumber placeholder="Card Number" />
    <CardHolder placeholder="Card Holder" />
    <ValidThruMonth />
    <ValidThruYear />
    <CardSecurityCode placeholder="CVV" className="input-text semi" />
    <button>Submit</button>
</form>
</div>
)
}