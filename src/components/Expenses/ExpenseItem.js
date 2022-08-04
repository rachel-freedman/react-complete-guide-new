import React , {useState} from 'react';
import './ExpenceItem.css';
import Card from '../UI/Card';
import ExpenceDate from './ExpenceDate';



function ExpenceItem(props) {
    //function const clickHendler(){}
    const [title , setTitle] =useState(props.expenseCar);
   // let title = props.expenseCar;
    const clickHendler = () =>{
        setTitle('updated');
        console.log(title);
    };
    return (
        <Card className="expense-item">
            <ExpenceDate expenseDate={props.expenseDate } ></ExpenceDate>
            <div className="expense-item__description">
                <h2 >{title}</h2>
                <div className='expense-item__price'> ${props.expenseAmount} </div>
                <button onClick={clickHendler}>click on me</button>
            </div>
        </Card>
    );
}

export default ExpenceItem;
