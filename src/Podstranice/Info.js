import '../App.css';
import malilogo from "../gethub4.png";
function Info() {
  return (
    <div className="Info">
        <h1>About GetHub</h1>
        <img src={malilogo} style={{backgroundColor: "lightblue"}}></img>
        <h2>GetHub is an original website made before the invention of internet.</h2>
        <h2>Trouble started when a copycat website called GitHub became famous.</h2>
        <h2>They denied all claims of plagiarism.</h2>
        <h2>After 13 years of lawsuits, GitHub unrightfully won the war.</h2>
        <h2>We encourage you to trash GitHub on Twitter.</h2>
        <h2>In the meantime, enjoy our website!</h2>
    </div>
  );
}

export default Info;