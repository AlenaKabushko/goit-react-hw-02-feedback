import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = e => {
    const changedName = e.target?.dataset?.action;
    this.setState(prevState => {
      return { [changedName]: prevState[changedName] + 1 };
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    percentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return percentage;
  };

  render() {
    const onLeaveFeedback = this.increment;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={onLeaveFeedback}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
