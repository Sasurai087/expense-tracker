import React from "react";
import { Card } from "./Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
