import React from 'react'
import { List } from 'antd';

function FavouriteNames(props) {
  const { names } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={names}
      header={<label>Favourite Names</label>}
      renderItem={name => (
        <List.Item>
          <List.Item.Meta
            title={name.forname}
            description={name.surname}
          />
        </List.Item>
      )}
    />
  )
}

export default FavouriteNames;