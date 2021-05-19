import '../App.css';
import Korisnici from "./Korisnici.js";
function Users() {
  const korisnik1 = {
    ime: "Nikola",
    prezime: "Tomić",
    username: "nidzzo",
    datum: "11.1.2014."
};
const korisnik2 = {
    ime: "Josh",
    prezime: "Homme",
    username: "desertmay",
    datum: "17.5.1973."
};
const korisnik3 = {
    ime: "Ammar",
    prezime: "Ibrahimović",
    username: "chunchunmaru",
    datum: "28.4.2000."
};
const korisnik4 = {
    ime: "Fabio",
    prezime: "Zetović",
    username: "c.men",
    datum: "6.9.420."
};
const korisnik5 = {
    ime: "Marin",
    prezime: "Boban",
    username: "ma31n",
    datum: "24.6.2010."
};
const korisnik6 = {
    ime: "Matej",
    prezime: "Grubišić",
    username: "doktorgruba",
    datum: "8000 BC"
};
const korisnik7 = {
    ime: "Nikolina",
    prezime: "Grubić",
    username: "BragadaciousReaperOfSkulls",
    datum: "1.5.1666."
};
const korisnik8 = {
    ime: "Robert",
    prezime: "Smith",
    username: "chewsdayinnit",
    datum: "21.4.1959."
};
const korisnik9 = {
    ime: "Tina",
    prezime: "Andrić",
    username: "nezninja",
    datum: "18.5.2021."
};
const korisnik10 = {
    ime: "Mauro",
    prezime: "Budić",
    username: "manebuda",
    datum: "24.1.2004."
};

  return (
    <div className="Users">
        <h1 align="center">A list of all the users on the website!</h1>
        <Korisnici user1={korisnik1} user2={korisnik2} user3={korisnik3} user4={korisnik4} user5={korisnik5} user6={korisnik6} user7={korisnik7} user8={korisnik8} user9={korisnik9} user10={korisnik10}></Korisnici>
    </div>
  );
}

export default Users;