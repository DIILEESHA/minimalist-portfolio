import { useEffect, useState } from "react";
import "./lng.css";
import Sanity from "../../sanity/Sanity";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

export default function Languages() {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    const fetchLng = async () => {
      try {
        const fetchQuery = `*[_type == "skill"]{
          skillimg[]{asset->{_id,url}},
        }`;

        const res = await Sanity.fetch(fetchQuery);

        setLanguage(res[0]?.skillimg || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLng();
  }, []);

  const numDuplicates = Math.ceil(100 / language.length);

  const duplicatedImages = times(numDuplicates, () => language).flat();

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
        <Marquee velocity={3} minScale={17} resetAfterTries={200}>
          {duplicatedImages.map((lg, index) => (
            <div key={index} className="cr">
              <img className="mea" loading="lazy" src={lg?.asset?.url} alt="" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
