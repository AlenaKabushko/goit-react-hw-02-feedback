import React from 'react';
//import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {/* <button type="button" onClick={onLeaveFeedback} data-action={options[0]}>
        {options[0]}
      </button>
      <button type="button" onClick={onLeaveFeedback} data-action={options[1]}>
        {options[1]}
      </button>
      <button type="button" onClick={onLeaveFeedback} data-action={options[2]}>
        {options[2]}
      </button> */}
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={onLeaveFeedback}
          data-action={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
