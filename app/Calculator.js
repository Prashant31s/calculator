// Calculator.js

import React from 'react';
import { connect } from 'react-redux';
import { addDigit, clearInput, calculateResult,addToHistory,clearHistory } from './actions';
import Display from './Display';



const Calculator = ({ input, result, addDigit, history,clearInput, calculateResult, addToHistory,clearHistory}) => {
  const handleClick = (digit) => {
    addDigit(digit);
  };

  const handleClear = () => {
    clearInput();
  };

  const handleCalculate = () => {
    calculateResult();
  };
  const handleAddToHistory = () => {
    addToHistory(input, result);
  };

  const handleClearHistory = () => {
    clearHistory();
  };

  return (
    <div className="calculator">
      <Display  input={input} result={result} />
      <div className="buttons">
        
        <button className='rounded-lg  w-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold m-2 p-3 shadow-md' onClick={handleClear}>C</button>
        <button className='rounded-lg  w-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold m-2 p-3 shadow-md' onClick={handleClear}>C</button>
        <button className='rounded-lg  w-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold m-2 p-3 shadow-md' onClick={()=>handleClick('%')}>%</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('/')}>/</button>
        <br/>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('9')}>9</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('8')}>8</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('7')}>7</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('*')}>X</button>
        <br/>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('6')}>6</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('5')}>5</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('4')}>4</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('-')}>-</button>
        <br/>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('3')}>3</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('2')}>2</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('1')}>1</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('+')}>+</button>
        <br/>
        
        <button className='rounded-lg  w-44 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('0')}>0</button>
        
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('.')}>.</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={handleCalculate}>=</button>
        <br/>
    
        
      </div>
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item.expression}</li>
          ))}
        </ul>
        {/* <button onClick={handleAddToHistory}>Add to History</button> */}
        <button onClick={handleClearHistory}>Clear History</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result,
  history: state.history
});

const mapDispatchToProps = {
  addDigit,
  clearInput,
  calculateResult,
  addToHistory,
  clearHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
