import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const NameTypewriter = () => {
  const [isTyped, setIsTyped] = useState(false);

  setTimeout(() => {
    setIsTyped(true);
  }, 4000);

  return (
    <div className="typewriter-div">
      <Typewriter
        id="name-typewriter"
        onInit={(tw) => {
          tw.start().changeDelay(100).typeString("Hello I'm Carlos Santiago");
        }}
      />
      {isTyped && (
        <Typewriter
          style={{ fontSize: '1.2rem', color: 'black' }}
          options={{
            loop: true,
          }}
          onInit={(tw) => {
            tw.changeDelay(70)
              .typeString("I'm a Full-Stack Software Engineer")
              .pauseFor(1000)
              .changeDeleteSpeed(40)
              .deleteAll()
              .typeString('With a background in Civil Engineering')
              .pauseFor(1000)
              .changeDeleteSpeed(40)
              .deleteAll()
              .typeString('Welcome to my website!')
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      )}
    </div>
  );
};

export default NameTypewriter;
