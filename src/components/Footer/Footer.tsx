import SmallDesc from "../Body/AllSection/SmallDesc";
import { footer } from "../Data/data";
import {FaAngleRight} from "react-icons/fa";
import SmallImgText from "../Body/AllSection/SmallImgText";

function Footer() {
    const {foot_head, navigation, categories, recent_posts, foot_last} = footer;

  return (
    <section id="footer">

        <div id="foot-top">

            <div id="foot-head">
                <SmallDesc part={foot_head} />

                <span className="smaller-font"><a href="#">Learn More</a></span>
            </div>

            <div id="foot-links">

                {/*navigation links*/}
                <div id="navigation-links">
                    <h3 className="small-font">
                        {navigation.title}
                    </h3>
                    <ul>
                        {navigation.arr.map((link, i)=>{
                            return (
                                <li key={i}>
                                    <span className="small-font"><FaAngleRight /></span>
                                    <span className="small-font">{link}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/*categories links*/}
                <div id="categories-links">
                    <h3 className="small-font">
                        {categories.title}
                    </h3>
                    <ul>
                        {categories.arr.map((link, i)=>{
                            return (
                                <li key={i}>
                                    <span className="small-font"><FaAngleRight /></span>
                                    <span className="small-font">{link}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>

            <div id="recent-posts">
                <h3 className="small-font">{recent_posts.title}</h3>

                {recent_posts.arr.map(recent_post=>{
                    return (
                        <div className="recent-post" key={recent_post.id}>
                            <SmallImgText small_img_text={recent_post} />
                        </div>
                    );
                })}
            </div>
        </div>
      

      <div id="foot-last-part">
        <div id="foot-last-left">
            <p className="smaller-font">
                <span>&copy;</span>
                <span>Copyright Zenblog. All Rights Reserved</span>
            </p>
            <p className="smaller-font">Designed by <b>BootstrapMade</b></p>
        </div>
        <div id="foot-last-right">
            {foot_last.arr.map((icon,i)=>{
                return (
                    <span className="mid-font" key={i}>
                    {icon}
                    </span>
            )
            })}
        </div>
      </div>
    </section>
  )
}

export default Footer
