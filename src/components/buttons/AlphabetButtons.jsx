import {  List, Button  } from 'antd';
import React, { useState } from 'react';

import './AlphabetButtons.css';
const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function AlphabetButtons(props) {
  const {setFirstNameFilter} = props;

  const [selected, setSelected] = useState(null);

  const handleClick = char => {
    if (char === selected) {
      char = null;
    }
    setSelected(char);
    setFirstNameFilter(char);
  }

  return (
    <section className="alphabetContainer">
      <List
        grid={{column: 6}}
        dataSource={ALPHABET}
        renderItem={letter => (
          <List.Item
            key={letter}
          >
            <Button
              type={selected === letter ? 'primary' : 'normal'}
              size="large"
              onClick={() => handleClick(letter)}
              >
                {letter}
            </Button>
          </List.Item>
        )}
      />
    </section>
    )

}

export default AlphabetButtons;