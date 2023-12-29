import "./style.css";

const NameCard = ({ user, increaseAge }) => {
  const { name, age, gender } = user;
  const changeBackgroundColor = () => {
    if (gender === "male") {
      return "red";
    } else if (gender === "female") {
      return "blue";
    } else {
      return "white";
    }
  };
  return (
    <div className={`name-card ${changeBackgroundColor()}`}>
      <span className="name">Name : {name}</span>
      <span className="age">Age : {age}</span>
      <span className="gender">Gender : {gender}</span>
      <button
        onClick={() => {
          increaseAge(name);
        }}
      >
        Increase Age
      </button>
    </div>
  );
};

export default NameCard;
