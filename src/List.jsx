import React from 'react';

export default function List(props) {
  const { profiles } = props;

  return (
    <ul className='profile-list'>
      {profiles.map(el =>
        <li className='profile-list__item' key={el.id} onClick={() => props.getId(el.id)}>{el.name}</li>
      )}
    </ul>
  )
}