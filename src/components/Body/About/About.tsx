import { useEffect } from "react";
import { about } from "../../Data/data";
import TopicParas from "../SharedComponents/TopicParas";

function About() {
  const {about_top, latest_news:{small_sec, view_all, img_urls}, team} = about;
  
  //to go to top of page each time component renders
  useEffect(()=>{
      window.scrollTo(0,0);
  },[])

  return (
    <section id="about">

      <div id="top-about">

        <h1 className="larger-font">About us</h1>

        <div className="about-grid">

            {
              about_top.map((info, i)=>{
                const {topic, small_sec, img_url} = info;
                return (
                  <div className="about-info" key={i}>

                    <img src={img_url} alt={topic} />

                    <div>

                      <h4 className="small-font">{topic}</h4>

                      <TopicParas obj={small_sec} />
                    
                    </div>
                  </div>
                )
              })
            }

        </div>

      </div>

      <div id="latest-news">
        
        <div className="about-grid">

          <div className="about-info">

            <TopicParas obj={small_sec} />

            <h3 className="small-font active-title">{view_all}</h3>

          </div>

          <div id="about-img-container">
            {
              img_urls.map((url, i)=>{
                return <img src={url} alt={`${i}.jpg`} key={i} />
              })
            }
          </div>
        </div>

      </div>

      <div id="our-team">

        <TopicParas obj={team.small_sec} />

        <div id="team-grid">

          {
            team.members.map((member, id)=>{
              const {img_url, name, post, desc} = member;

              return (
                <div className="staff-info" key={id}>

                  <img src={img_url} alt={name + post} />
                  <h1 className="mid-font">{name}</h1>
                  <span className="mid-font">{post}</span>
                  <p className="staff-detail smaller-font">{desc}</p>

                </div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}

export default About
