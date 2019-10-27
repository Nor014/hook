import React, { useState, useEffect } from 'react';

export default function Details(props) {
  const { id } = props;
  const [data, setData] = useState();
  const [isLoading, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoad(false);
      });
  }, [id])

  console.log(data)

  if (isLoading) {
    return <p>Идет загрузка</p>
  } else return (
    <>
      {data &&
        <div>
          <p className='preload'>Идет загрузка изображения</p>
          <div className='profile isLoading'>

            {/* Показываем карточку после загрузки изображения */}
            <img className="profile__avatar profile__item" src={data.avatar} onLoad={() => {
              document.querySelector('.profile').classList.remove('isLoading');
              document.querySelector('.preload').classList.add('isLoading');
            }} />

            <p className="profile__name profile__item">{data.name}</p>
            <p className="profile__city profile__item">City: {data.details.city}</p>
            <p className="profile__company profile__item">Company: {data.details.company}</p>
            <p className="profile__position profile__item">Position: {data.details.position}</p>
          </div>
        </div>
      }
    </>
  )
}