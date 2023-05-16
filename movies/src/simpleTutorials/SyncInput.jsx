import { useState } from 'react';

export default function SyncInput() {
  return (
    <div style={{flexDirection: 'column'}}>
      <Input label="First input" />
      <Input label="Second input" />
    </div>
  );
}

const Input = ({ label }) => {
  const [text, setText] = useState('');

  return (
    <div style={{margin: '5px'}}>
        <label style={{flexGrow: 1}}>{label}</label>
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    </div>
  );
}