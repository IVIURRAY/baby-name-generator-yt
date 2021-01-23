import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';

function EditSurnameButton (props) {
  const {setCurrentSurname} = props;

  const [isVisible, setIsVisible] = useState(false);
  const [inputSurname, setInputSurname] = useState('');

  const handleOk = () => {
    setIsVisible(false)
    console.log(inputSurname)
    setCurrentSurname(inputSurname);
  }

  return (
    <section>
      <Button type="link" size="large" onClick={() => setIsVisible(true)}>
        Edit Surname
      </Button>
      <Modal
        title="Enter Surname"
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={handleOk}
      >
       <Input
        placeholder="Please enter surname"
        onChange={e => setInputSurname(e.target.value)}
      />
      </Modal>
    </section>
  )
}

export default EditSurnameButton;