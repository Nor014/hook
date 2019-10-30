import React, { useState, useEffect } from 'react';

export default function Details(props) {
  const { id } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [imgIsLoaging, setImgIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
        setImgIsLoading(true);
      });
  }, [id])

  const onImgLoad = () => {
    setImgIsLoading(false);
  }

  if (isLoading) {
    return <p>Идет загрузка</p>
  }

  return (
    <React.Fragment>
      {data &&
        <div>
          <p className={imgIsLoaging ? 'preload ' : 'preload invisible'}>Идет загрузка изображения</p>

          <div className={imgIsLoaging ? 'profile invisible' : 'profile'}>
            <img className="profile__item profile_item_avatar" src={data.avatar} onLoad={onImgLoad} />
            <p className="profile__item profile_item_name">{data.name}</p>
            <p className="profile__item">City: {data.details.city}</p>
            <p className="profile__item">Company: {data.details.company}</p>
            <p className="profile__item">Position: {data.details.position}</p>
          </div>
        </div>
      }
    </React.Fragment>
  )
}