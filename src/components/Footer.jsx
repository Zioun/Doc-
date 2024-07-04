import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#020043] px-3">
      <footer className="footer max-w-[1160px] m-auto w-full py-10 text-[#CCCCD1]">
        <aside>
          <img src="../../public/images/appointment-logo.png" alt="" />
          <p>
          123 Main Street Anytown, USA <br /> Postal Code: 12345
            <br /><br />
            <span>Support: support@oyolloo.com</span><br />
            <span>(Available : 10:00am to 07:00pm)</span>
          </p>
        </aside>
        <nav>
          <h6 className="font-bold text-[16px] text-[#CCCCD1]">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-bold text-[16px] text-[#CCCCD1]">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold text-[16px] text-[#CCCCD1]">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
