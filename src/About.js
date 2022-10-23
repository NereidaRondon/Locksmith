import Image from 'react-bootstrap/Image';
import door from './images/door.jpg';

export default function About() {
  return (
    <>
      <h2 className="text-center">About</h2>
      <div className="about--container mt-2 me-3 ms-3 mb-5">
        <Image
          fluid
          src={door}
          className="door"
          alt="Residential locksmith services"
          width="180"
          height="auto"
        />
        <div className="about1">
          <p>
            We are here to provide the best professional locksmith services
            possible with our up-to-date skills, using the latest techniques, as
            well as complying with the locksmith industry's ever changing
            standards. This in turn allows us to offer our fellow Cape Coral
            area residents the best security and quality locksmith services for
            all your residential, commercial, and automotive locksmith needs.
          </p>
        </div>
        <div className="about2">
          <p>
            We offer a comprehensive guarantee on all parts and workmanship, and
            we pride ourselves in our ability to meet the demands of our
            customers through the provision of a 24/7 service. Our fully
            equipped mobile workshops are run by experienced and qualified
            licensed trades-people who believe in good old-fashioned service.
          </p>
        </div>
        <div className="about3 text-center">
          <h5 className="about--title">Reynaldo Hernandez</h5>
          <p className="about--par">Owner and Operator</p>
          <br></br>
          <h5 className="about--title">reyreylocksmith@gmail.com</h5>
          <h5 className="about--title">(239)691-6019</h5>
        </div>
      </div>
    </>
  );
}
