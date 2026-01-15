import { useState } from "react";
import "./Lottery.css";
import {getTicket} from "./Helper.js";

export default function LotteryTicket() {
  let [ticket, setTicket] = useState(getTicket(3));
  return (
    <div>
      <h4>LOTTERY TICKET</h4>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
    </div>
  );
}
