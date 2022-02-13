import React, {useState} from 'react';
import './index.scss';

const MAX_NUMBER = 999999999999;

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [prevInput, setPrevInput] = useState('');
  const onReset = () => {
    setInput('0');
    setPrevInput('');
    setOperator(null);
  };
  const onClick = (data: string) => () => {
    if (operator) {
      const newInput = prevInput ? Number(prevInput + data) : Number(data);
      if (newInput <= MAX_NUMBER) {
        setPrevInput(newInput.toString());
      }
    } else {
      const newInput = Number(input + data);
      if (newInput <= MAX_NUMBER) {
        setInput(newInput.toString());
      }
    }
  };
  const onClickDot = (data: string) => () => {
    if (operator) {
      setPrevInput(prevInput + data);
    } else {
      setInput(input + data);
    }
  };
  const onOperatorClick = (newOperator: string) => () => {
    if (input) {
      if (operator) {
        let result = input;
        switch (operator) {
          case '+':
            result = (Number(input) + Number(prevInput)).toString();
            break;
          case '-':
            result = (Number(input) - Number(prevInput)).toString();
            break;
          case 'x':
            result = (Number(input) * Number(prevInput)).toString();
            break;
          case '/':
            result = (Number(input) / Number(prevInput)).toString();
            break;
        }
        setOperator(newOperator);
        setInput(result);
        setPrevInput('');
      } else {
        setOperator(newOperator);
      }
    }
  };
  const fontSizePx = input.length < 4 ? '80px' : (input.length < 6 ? '70px' : (input.length < 9) ? '60px' : '50px');
  return (
    <div className={'calculatorContainer'}>
      <div className={'calculator'}>
        <div className={'result'} style={{fontSize: fontSizePx}}>{operator && prevInput ? prevInput : input}</div>
        <div className={'keyboard'}>
          <div className={'first-column'}>
            <div className={'utils'}>
              <div className={'column'}>
                <div className={'item clear'} onClick={onReset}>AC</div>
                <div className={'item number'} onClick={onClick('7')}>7</div>
                <div className={'item number'} onClick={onClick('4')}>4</div>
                <div className={'item number'} onClick={onClick('1')}>1</div>
              </div>
              <div className={'column'}>
                <div className={'item clear'}>+/-</div>
                <div className={'item number'} onClick={onClick('8')}>8</div>
                <div className={'item number'} onClick={onClick('5')}>5</div>
                <div className={'item number'} onClick={onClick('2')}>2</div>
              </div>
            </div>
            <div className={'zero'} onClick={onClick('0')}>0</div>
          </div>
          <div className={'utils'}>
            <div className={'column'}>
              <div className={'item clear'}>%</div>
              <div className={'item number'} onClick={onClick('9')}>9</div>
              <div className={'item number'} onClick={onClick('6')}>6</div>
              <div className={'item number'} onClick={onClick('3')}>3</div>
              <div className={'item dot'} onClick={onClickDot('.')}>.</div>
            </div>
            <div className={'column'}>
              <div className={'item operator'} onClick={onOperatorClick('/')}>/</div>
              <div className={'item operator'} onClick={onOperatorClick('x')}>x</div>
              <div className={'item operator'} onClick={onOperatorClick('-')}>-</div>
              <div className={'item operator'} onClick={onOperatorClick('+')}>+</div>
              <div className={'item operator'} onClick={onOperatorClick('=')}>=</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Calculator;
