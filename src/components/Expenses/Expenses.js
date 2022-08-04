
import ExpenceItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';

function Expenses(props) {
  
  return (
   
    <Card className='expenses'>
     
     <ExpenceItem 
            expenseDate={props.items[0].date} 
            expenseAmount={props.items[0].amount } 
            expenseCar={props.items[0].title } >
      </ExpenceItem>
      <ExpenceItem 
             expenseDate={props.items[1].date} 
            expenseAmount={props.items[1].amount } 
            expenseCar={props.items[1].title } >
      </ExpenceItem>
      <ExpenceItem 
             expenseDate={props.items[2].date}  
            expenseAmount={props.items[2].amount } 
            expenseCar={props.items[2].title } >
      </ExpenceItem>
      <ExpenceItem 
             expenseDate={props.items[3].date} 
            expenseAmount={props.items[3].amount } 
            expenseCar={props.items[3].title } >
      </ExpenceItem>
    </Card>
  );
}

export default Expenses;
