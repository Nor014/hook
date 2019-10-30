import React from 'react';

export default function List(props) {
  const { profiles, setUserId } = props;

  return (
    <ul className='profile-list'>
      {profiles.map(el =>
        <li className='profile-list__item' key={el.id} onClick={() => setUserId(el.id)}>{el.name}</li>
      )}
    </ul>
  )
}