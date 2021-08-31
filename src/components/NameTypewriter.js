import Typewriter from 'typewriter-effect';

const NameTypewriter = () => {
  return (
    <div className="typewriter-div">
      <Typewriter
        id="name-typewriter"
        onInit={(tw) => {
          tw.start().changeDelay(100).typeString("Hello I'm Carlos Santiago");
        }}
      />
    </div>
  );
};

export default NameTypewriter;
