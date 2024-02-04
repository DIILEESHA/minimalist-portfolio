import { useEffect, useState } from "react";
import "./lng.css";
import Sanity from "../../sanity/Sanity";
import Marquee from "react-fast-marquee";

export default function Languages() {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    const fetchLng = async () => {
      try {
        const fetchQuery = `*[_type == "skill"]{
          skillimg[]{asset->{_id,url}},
        }`;

        const res = await Sanity.fetch(fetchQuery);
        setLanguage(res[0]);
        console.log("skill data:", res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLng();
  }, []);

  return (
    <div className="lng_container">
      <div className="servicer11">
        <img loading="lazy" src="https://i.imgur.com/JDVhmYa.png" alt="" />
      </div>
      <h2 className="skill_title">Tools & Technologies I Use</h2>
      <p className="skills_para mm">
        Explore a selection of my
        <span className="mooha" style={{ fontWeight: "700" }}>
          projects
        </span>
        Discover the key tools and technologies I wield to craft innovative web
        solutions, from front-end design to powerful back-end development and
        efficient data management
      </p>
 
      <div className="mid">
        <Marquee
          autoFill={true}
          gradient={true}
          direction="left"
          gradientWidth={-1}
          // speed={10}
          gradientColor="#070708"
          backgroundColor="#070708"
          play={true}
          className="marquee"
        >
          {language?.skillimg?.map((lg, index) => (
            <>
              <div className="cr" key={index}>
                <img
                  className="mea"
                  loading="lazy"
                  src={lg?.asset?.url}
                  alt=""
                />
              </div>
            </>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
