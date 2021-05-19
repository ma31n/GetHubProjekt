import profilna from "../pfp.png";

function Korisnici({user1,user2,user3,user4,user5,user6,user7,user8,user9,user10}) {
    
  return (
    <div>
        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user1.ime} {user1.prezime}</h2>
        <h4>Username: {user1.username}<br/>
        Joined: {user1.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user2.ime} {user2.prezime}</h2>
        <h4>Username: {user2.username}<br/>
        Joined: {user2.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user3.ime} {user3.prezime}</h2>
        <h4>Username: {user3.username}<br/>
        Joined: {user3.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user4.ime} {user4.prezime}</h2>
        <h4>Username: {user4.username}<br/>
        Joined: {user4.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user5.ime} {user5.prezime}</h2>
        <h4>Username: {user5.username}<br/>
        Joined: {user5.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user6.ime} {user6.prezime}</h2>
        <h4>Username: {user6.username}<br/>
        Joined: {user6.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user7.ime} {user7.prezime}</h2>
        <h4>Username: {user7.username}<br/>
        Joined: {user7.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user8.ime} {user8.prezime}</h2>
        <h4>Username: {user8.username}<br/>
        Joined: {user8.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user9.ime} {user9.prezime}</h2>
        <h4>Username: {user9.username}<br/>
        Joined: {user9.datum}</h4>
        </div>

        <div className="user">
        <img src={profilna} className="profilna"></img>
        <h2>{user10.ime} {user10.prezime}</h2>
        <h4>Username: {user10.username}<br/>
        Joined: {user10.datum}</h4>
        </div>
    </div>
  );
}

export default Korisnici;