import "./footer.css";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_card">
        <div className="footer_grid">
          <div className="footer_sub">
            <h2 className="footer_title">Dedicated to design with a passion</h2>
            <ul className="footer_ul">
              <li className="footer_li">
                <p className="gf">
                  Radiating creativity on a global scale, I am a designer driven
                  by passion and innovation.
                </p>
              </li>
              <li className="footer_li"></li>
              <li className="footer_li"></li>
              <li className="footer_li"></li>
            </ul>
          </div>
          <div className="footer_sub">
            <h2 className="footer_title">explore</h2>
            <ul className="footer_ul">
              <li className="footer_li">About Me</li>
              <li className="footer_li">Articles</li>
              <li className="footer_li">Newsletter</li>
              <li className="footer_li"></li>
            </ul>
          </div>
          <div className="footer_sub">
            <h2 className="footer_title">Say hello!</h2>
            <ul className="footer_ul">
              <li className="footer_li">Twitter</li>
              <li className="footer_li">Instagram</li>
              <li className="footer_li">Youtube</li>
              <li className="footer_li">Dribble</li>
            </ul>
          </div>
          <div className="footer_sub">
            <div className="muta">
              <h2 className="footer_title musa">Let’s work together</h2>
              <ul className="footer_ul">
                <li className=" saq">
                  <div className="saqer">
                    Have an idea?
                    <div className="imh">
                      <img src="https://i.imgur.com/YLyn5cd.png" alt="" />
                    </div>
                  </div>
                </li>
                {/* <div className="lino"></div> */}
                <li className="footer_li lino"></li>
                <li className="footer_li"></li>
                <li className="footer_li"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="imgt">
          <img src="https://i.imgur.com/baykvWY.png" alt="" />
        </div>
      </div>

      <div className="condition">
        <div className="conditioner">
          <h1>Terms & Conditions</h1>
          <h1>|</h1>
          <h1>Privacy Policy</h1>
        </div>
        <div className="conditioner">
          <h1>© 2024 Dileesha. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
}
