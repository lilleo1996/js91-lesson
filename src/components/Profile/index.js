import "./style.css";

const Profile = (props) => {
  const { imageUrl, name } = props; // {imageUrl: "...", name: ""}
  return (
    <div className="profile">
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default Profile;
