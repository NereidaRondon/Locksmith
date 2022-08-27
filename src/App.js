import van from './images/van.png';
import keys from './images/keys.jpg';
import ServiceCards from './ServiceCards';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Rey Rey's Locksmith</h1>
        <img src={van} className="van" alt="Work van" width="250" height="150" />
        <h4>OUR 24 HOUR/ 7 DAY A WEEK EMERGENCY LOCKSMITH SERVICE GUARANTEES AN IMMEDIATE RESPONSE TO ALL CALLS.</h4>
        <br></br>
        <div className="text-start">
          <p>We are here to provide the best professional locksmith services possible and to keep our skills and products up to date with the latest techniques, as well as the locksmith industry's ever changing standards. This in turn allows us to offer our fellow Cape Coral area residents the best security and quality locksmith services for all your residential, commercial, and automotive locksmith needs.</p>

          <ServiceCards />

          <p>We offer a comprehensive guarantee on all parts and workmanship, and we pride ourselves in our ability to meet the demands of our customers through the provision of a 24/7 service. Our fully equipped mobile workshops are run by experienced and qualified licensed trades-people who believe in good old-fashioned service.</p>
          <p>We carry a large range of locks and key blanks so we can complete your job onsite. It's less time you are off the road and back to doing the things you need to do... we guarantee it! Now that's just how we want to be treated, so we think you should be too.</p>
        </div>
        <img src={keys} className="keys" alt="Types of keys and car makers" width="800" height="300" />
      </main>
      
    </div>
  );
}

export default App;
