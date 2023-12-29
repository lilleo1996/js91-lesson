const TotalAge = ({ users }) => {
  const sumAge = () => {
    return users.reduce((totalAge, user) => totalAge + user.age, 0);
  };
  return (
    <div className="total-age">
      <h3>Total age: {sumAge()}</h3>
    </div>
  );
};

export default TotalAge;
