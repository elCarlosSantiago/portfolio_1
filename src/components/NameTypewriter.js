import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const NameTypewriter = () => {
  const [isTyped, setIsTyped] = useState(false);

  setTimeout(() => {
    setIsTyped(true);
  }, 5000);

  return (
    <div className="typewriter-div">
      <Typewriter
        id="name-typewriter"
        onInit={(tw) => {
          tw.start().typeString("Hello I'm Carlos Santiago");
        }}
      />
      {isTyped && (
        <Typewriter
          style={{ fontSize: '1.2rem', color: 'black' }}
          options={{
            loop: true,
          }}
          onInit={(tw) => {
            tw.typeString("I'm a Full-Stack Software Engineer")
              .pauseFor(2500)
              .deleteAll()
              .typeString('With a background in Civil Engineering')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Welcome to my website!')
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      )}
    </div>
  );
};

export default NameTypewriter;
