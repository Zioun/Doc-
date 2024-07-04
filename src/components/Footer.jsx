import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#020043] px-3 py-10">
      <footer className="footer max-w-[1160px] m-auto w-full py-10 text-[#CCCCD1]">
        <aside>
          <img src="../../public/images/appointment-logo.png" alt="" />
          <p className="mt-5">
          123 Main Street Anytown, USA <br /> Postal Code: 12345
            <br /><br />
            <span>Support: support@oyolloo.com</span><br />
            <span>(Available : 10:00am to 07:00pm)</span>
          </p>
        </aside>
        <nav className="mt-14">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and condition</a>
        </nav>
        <nav className="mt-14">
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav className="mt-14">
          <h6 className="font-bold text-[16px] text-[#CCCCD1]">Follow Us</h6>
          <div className="flex gap-5"><a className="link link-hover"><img src="../../public/images/facebook.png" alt="" /></a>
          <a className="link link-hover"><img src="../../public/images/linkedin.png" alt="" /></a>
          <a className="link link-hover"><img src="../../public/images/instagram.png" alt="" /></a>
          <a className="link link-hover"><img src="../../public/images/youtube.png" alt="" /></a></div>
          <h1 className="mt-5">@Docplus 2024</h1>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
