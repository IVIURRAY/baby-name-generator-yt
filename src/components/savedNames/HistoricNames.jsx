import React from 'react'
import { List, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons'

function HistoricNames(props) {
  const { names } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={names}
      header={<label>Historic Names</label>}
      renderItem={name => (
        <List.Item
          actions={[
            <Button
              type="normal"
              shape="round"
              icon={<HeartOutlined />}
            />]}
        >
          <List.Item.Meta
            title={name.forname}
            description={name.surname}
          />
        </List.Item>

      )}
    />
  )
}

export default HistoricNames;