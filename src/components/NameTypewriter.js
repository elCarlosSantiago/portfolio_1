import Typewriter from 'typewriter-effect';

const NameTypewriter = () => {
  return (
    <Typewriter
      onInit={(tw) => {
        tw.typeString("Hello I'm Carlos Santiago!").start();
      }}
    />
  );
};

export default NameTypewriter;
