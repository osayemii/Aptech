import profilePic from './assets/profile.png'

function Card(props) {
    
    return (
        <div className='card'>
            <img src={profilePic} alt="profile pic" />
            <h2>Olamilekan</h2>
            <p>I am a student of Aptech and I study ADSE.</p>
        </div>
    );
}
export default Card