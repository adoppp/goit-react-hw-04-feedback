import React, { useEffect, useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Message } from './Message/Message';

// export class Ap extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//    componentDidMount() {
//     document.title = 'Feedback';
//   }

//   onLeaveFeedback = state => {
//     this.setState(prevValue => ({
//       [state]: prevValue[state] + 1,
//     }));
//   };

//   totalValue() {
//     let { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage({ good  }) {
//     const total = this.totalValue();
//     let positive = total !== 0 ? Math.round((good / total) * 100) : 0;
//     return positive;
//   }

//     render() {
//       const { good, neutral, bad } = this.state;
//       const options = Object.keys(this.state);
//       const total = this.totalValue();
//       const positive = this.countPositiveFeedbackPercentage(this.state, total);
//       return (
//         <div>
//           <Section title="Please leave feedback">
//             <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={options}></FeedbackOptions>
//           </Section>
//           <Section title="Statisctics">
//             {total !== 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positive={positive}></Statistics>) : (<Message message="There is no feedback" />)}
//           </Section>
//         </div>
//       );
//     };
//   };


export const App = () => {
  //States
  const [mark, setMark] = useState({good: 0, neutral: 0, bad: 0,});

  //ComponentDidMount
  useEffect(() => { document.title = 'Feedback'; }, [])

  
  //onLeaveFeedback
  const onLeaveFeedback = state => {
    setMark({...mark, [state]: mark[state] + 1,})
  };

  //Total function refactoring
  function calcTotalValue() {
    if (mark.good !== 0 || mark.neutral !== 0 || mark.bad !== 0) {
      const total = mark.good + mark.neutral + mark.bad;
      return total;
    };

    return 0;
  }


  //Positive calc refactoring
  function countPositiveFeedbackPercentage (good) {
    let positive = totalValue !== 0 ? Math.round((good / totalValue) * 100) : 0;
    return positive;
  };


  //Options
  const options = Object.keys(mark);
  const totalValue = calcTotalValue();
  const positive = countPositiveFeedbackPercentage(mark.good);

  return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options}></FeedbackOptions>
          </Section>
          <Section title="Statisctics">
            {totalValue !== 0 ? (<Statistics good={mark.good} neutral={mark.neutral} bad={mark.bad} total={totalValue} positive={positive}></Statistics>) : (<Message message="There is no feedback" />)}
          </Section>
        </div>
      );
}