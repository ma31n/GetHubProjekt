import '../App.css';
import meme from "../code.jpg";
function Forum() {
  return (
    <div className="Forum">
        <h1 align="center">The place to chat, discuss or ask for help!</h1>

        <div className="post">
        <h1>How to start a local server in React???</h1>
        <h4>Posted by nidzzo</h4>
        <p>How do I start the server so I can see my website?</p>
        <h4>Comments:</h4>
        <ul>
          <li>nezninja: Just go to CMD and write "npm start"</li>
          <li>chewsdayinnit: idk lol</li>
          <li>manebuda: very simple</li>
        </ul>
        </div>

        <div className="post">
        <h1>How to make text in HTML?</h1>
        <h4>Posted by ma31n</h4>
        <p>I need text like... now</p>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>chunchunmaru: just do the p tag</li>
          <li>desertmay: What he said</li>
          <li>BragadaciousReaperOfSkulls: bruh</li>
        </ul>
        </div>

        <div className="post">
        <h1>A very relatable meme</h1>
        <h4>Posted by doktorgruba</h4>
        <img src={meme}></img>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>chunchunmaru: HAHAHAHAHAHAHAHA</li>
          <li>chewsdayinnit: lol</li>
          <li>c.men: amazing</li>
        </ul>
        </div>

        <div className="post">
        <h1>How do I print out words in Python?</h1>
        <h4>Posted by c.men</h4>
        <p>I want it to show words like "AAAAAAAAAAA" XD</p>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>doktorgruba: print("words")</li>
          <li>manebuda: true</li>
          <li>nidzzo: I'm so tired</li>
        </ul>
        </div>

        <div className="post">
        <h1>Why doesn't anyone love me?</h1>
        <h4>Posted by nezninja</h4>
        <p>I am so sad :(</p>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>doktorgruba: Wrong forum</li>
          <li>ma31n: bro what</li>
          <li>nidzzo: same :(</li>
        </ul>
        </div>

        <div className="post">
        <h1>Is React good?</h1>
        <h4>Posted by desertmay</h4>
        <p>I'm not sure if I should learn React or not, it's really popular. Is it any good?</p>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>chewsdayinnit: NOOOOOOO</li>
          <li>manebuda: I cry every day because of React</li>
          <li>nidzzo: Please.... you're too young...</li>
        </ul>
        </div>

        <div className="post">
        <h1>How do I add a custom name on page?</h1>
        <h4>Posted by BragadaciousReaperOfSkulls</h4>
        <p>You know, the name of the website in the top left, how do I change it?</p>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>chunchunmaru: Use the title tag</li>
          <li>c.men: titl tag</li>
          <li>c.men: title*</li>
        </ul>
        </div>

        <div className="post">
        <h1>Help! Code doesn't work!</h1>
        <h4>Posted by manebuda</h4>
        <p>I SPENT 5 HOURS ON THE CODE AND I HAVE NO IDEA WHY IT DOESN'T WORK PLEASE HELP ME</p>
        <p>www.totallyreallink.com</p>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>doktorgruba: ....you didn't close the div</li>
          <li>chunchunmaru: lolololol</li>
          <li>nezninja: relatable</li>
        </ul>
        </div>

        <div className="post">
        <h1>Big title, how????</h1>
        <h4>Posted by chunchunmaru</h4>
        <p>Neemd title... how..?</p>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>BragadaciousReaperOfSkulls: just... ugh</li>
          <li>chewsdayinnit: use h1,h2,h3...</li>
          <li>doktorgruba: da</li>
        </ul>
        </div>

        <div className="post">
        <h1>I am 9 years old and made this awesome AAA game that sold millions!</h1>
        <h4>Posted by nidzzo</h4>
        <p>Not to brag, but... I'm bragging.</p>
        <a href="https://www.epicgames.com/fortnite/en-US/home" target="_blank">Here's the link!</a>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>doktorgruba: reported for toxicity</li>
          <li>desertmay: legit no one cares</li>
          <li>manebuda: wow so cool</li>
        </ul>
        </div>

        <div className="post">
        <h1>Can my low spec PC run android studio?</h1>
        <h4>Posted by nezninja</h4>
        <p>These are the specs:</p>
        <p>Intel® Celeron® Processor G5905</p>
        <p>500MB RAM</p>
        <p>32MB HDD storage</p>
        <br/>
        <h4>Comments:</h4>
        <ul>
          <li>chewsdayinnit: It'll run just fine</li>
          <li>doktorgruba: You're good</li>
          <li>c.men: That's like... top specs...</li>
        </ul>
        </div>
    </div>

  );
}

export default Forum;