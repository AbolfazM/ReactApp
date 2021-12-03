import React from 'react';
import ReactFlow from 'react-flow-renderer';
import './Flow.css';

const elements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'مفاهیم کامپیوتر' },
    position: { x: 600, y: 10 },
  },
  {
    id: '2',
    data: { label: <div>الگوریتم و فلوچارت</div> },
    position: { x: 700, y: 150 },
  },
  {
    id: '3',
    data: { label: 'Html یادگیری' },
    position: { x: 520, y: 270 },
  },
  {
    id: '4',
    data: { label: 'Css یادگیری' },
    position: { x: 700, y: 420 },
  },
  {
    id: '5',
    data: { label: 'Tailwind یادگیری' },
    position: { x: 520, y: 570 },
  },
  {
    id: '6',
    data: { label: 'Js یادگیری' },
    position: { x: 710, y: 720 },
  },
  {
    id: '7',
    data: { label: 'Git & Github یادگیری' },
    position: { x: 520, y: 850 },
  },
  {
    id: '8',
    data: { label: 'React یادگیری' },
    position: { x: 700, y: 1000 },
  },
  {
    id: '9',
    type: 'output',
    data: { label: 'موفقیت' },
    position: { x: 600, y: 1400 },
  },

  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated:true },
  { id: 'e3-4', source: '3', target: '4', animated:true },
  { id: 'e4-5', source: '4', target: '5', animated:true },
  { id: 'e5-6', source: '5', target: '6', animated:true },
  { id: 'e6-7', source: '6', target: '7', animated:true },
  { id: 'e7-8', source: '7', target: '8', animated:true },
  { id: 'e8-9', source: '8', target: '9', animated:true },
];

export default () => (
  <div className='FlowC'>
    <ReactFlow elements={elements} />
  </div>
);