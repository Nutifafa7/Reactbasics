import profilePic from './assets/image.png';
function Card() {
  return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="Placeholder Image" />
        <h2 className="card-title">Srinithi S</h2>
        <p classNme="card-description">Third year Information Technology Student</p>
    </div>
  );
}
export default Card;