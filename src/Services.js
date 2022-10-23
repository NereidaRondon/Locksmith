import { React } from 'react';

import ServiceCards from './ServiceCards';
import Image from 'react-bootstrap/Image';

import van from './images/van.png';
import './App.css';

export default function Services() {
  // const [isMobile, setIsMobile] = useState(false);
  // setIsMobile(window.innerWidth > 900);

  // if (window.innerWidth > 900) {
  //   setIsMobile(false);
  // } else {
  //   setIsMobile(true);
  // }

  return (
    <>
      <h2 className="text-center">Services</h2>
      <p className="list--title me-3 ms-3">
        ReyRey's locksmith is proud to provide our neighbors the following
        services:
      </p>
      <div className="services--container mt-2 me-3 ms-3 mb-5">
        <Image
          fluid
          src={van}
          className="van"
          alt="Work van"
          width="250"
          height="auto"
        />
        <div className="list1">
          <ul>
            <li>automobile locks</li>
            <li>residential</li>
            <li>lost key</li>
            <li>replacement</li>
            <li>re-key door locks</li>
            <li>door lock repairs</li>
            <li>knob sets</li>
          </ul>
        </div>
        <div className="list2">
          <ul>
            <li>commercial lock services</li>
            <li>high security locks</li>
            <li>master re-keying</li>
            <li>new locks</li>
            <li>install locks</li>
            <li>door lock repairs</li>
            <li>emergency lockout services</li>
          </ul>
        </div>
      </div>

      <div className="mt-2 me-3 ms-3 mb-5">
        <ServiceCards />

        <p className="mt-3">
          We carry a large range of locks and key blanks so we can complete your
          job onsite. It's less time you spend on the road so you can get back
          to doing the things you need to do... we guarantee it! That's how we
          want to be treated, so it's how we treat our customers.
        </p>
      </div>
    </>
  );
}
