import { useState } from 'react';
import style from './style.module.css'

const CssSlider = () => {

  const [images] = useState([
    'https://www.pixelstalk.net/wp-content/uploads/images6/Blue-Cool-Wallpaper-Black-Color.jpg',
    'https://wallpaper.dog/large/10910418.jpg',
    'https://www.itl.cat/pngfile/big/193-1933107_royal-bengal-tiger.jpg',
    'https://wallpapers.com/images/hd/cool-white-man-art-l9kfu90ij5saegi6.jpg',
    'https://wallpaperaccess.com/full/1132060.jpg',
  ])

  return (
    <>
      <section className={style.container}>
        <h1>Css Slider</h1>
        <div className={style.wrapper}>
          <div id="d1">
            <img alt="" src={images[0]} />
          </div>
          <div id="d2">
            <img alt="" src={images[1]} />
          </div>
          <div id="d3">
            <img alt="" src={images[2]} />
          </div>
          <div id="d4">
            <img alt="" src={images[3]} />
          </div>
          <div id="d5">
            <img alt="" src={images[4]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default CssSlider;