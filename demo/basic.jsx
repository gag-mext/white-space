import React from 'react';
import ReactDOM from 'react-dom';
import  WhiteSpace from '../src';

const PlaceHolder = props => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: '0.6rem',
    lineHeight: '0.6rem',
    width: '100%',
  }} {...props}
  >Block</div>
);

const WhiteSpaceExample = () => (
  <div>
    <WhiteSpace size="xs" />
    <PlaceHolder />

    <WhiteSpace size="sm" />
    <PlaceHolder />

    <WhiteSpace />
    <PlaceHolder />

    <WhiteSpace size="lg" />
    <PlaceHolder />

    <WhiteSpace size="xl" />
    <PlaceHolder />
  </div>
);

ReactDOM.render(<WhiteSpaceExample />, document.getElementById('sk-root'));
