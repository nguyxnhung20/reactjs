import { useState } from 'react';
import './homePage.scss';

function HomePage({ title, content }) {
  // UseState
  const [colorTitle, setColorTitle] = useState('red');
  const [text, setText] = useState('HELLO');
  // colorTitle là giá trị khởi tạo init ban đầu và dùng để hiển thị giá trị đó
  // logic code
  const onColor = () => {
    console.log('onClick !');
    // logic change here !
    setColorTitle('green');
  };

  return (
    <>
      <header style={{ color: colorTitle }}>{title}</header>
      <article>{content}</article>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          console.log(event, 'event');
          setText(event.target.value);
        }}
      />
      <hr />
      hello: {text}
      {/* style inline css */}
      <hr />
      <button className="bgButon" onClick={() => onColor()}>
        change title
      </button>
    </>
  );
}

export default HomePage;
