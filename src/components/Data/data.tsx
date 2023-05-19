import {FaFacebook, FaTwitter, FaInstagram, FaSearch, FaBars, FaSkype, FaLinkedin} from "react-icons/fa";

//header data
export const Header = {
    //navbar
    navbar:{
        blog_name: "ZenBlog",

        nav_menus:[
            {
                id:"NM-1",
                name: "blog"
            },

            {
                id:"NM-2",
                name: "single post"
            },

            {
                id:"NM-3",
                name: "categories",
            },

            {
                id:"NM-4",
                name: "about"
            },

            {
                id:"NM-5",
                name: "contact"
            },
        ],
        
        submenus:[
            {
                id:"SM-1",
                name:"Search Result"
            },

            {
                id:"SM-2",
                name:"Drop down 2"
            },

            {
                id:"SM-3",
                name:"Deep Drop Down",
            },

            {
                id:"SM-4",
                name:"Drop down 3"
            },

            {
                id:"SM-5",
                name:"Drop down 4"
            },
        ],

        deep_submenus:[
            {
                id:"DSM-1",
                name:"Deep Drop Down 1"
            },

            {
                id:"DSM-2",
                name:"Deep Drop Down 2"
            },

            {
                id:"DSM-3",
                name:"Deep Drop Down 3"
            },

            {
                id:"DSM-4",
                name:"Deep Drop Down 4"
            },

            {
                id:"DSM-5",
                name:"Deep Drop Down 5"
            }
        ],

        header_icons:[
            <FaFacebook />,
            <FaTwitter />,
            <FaInstagram />,
            <FaSearch />
        ],
        
        toggle: <FaBars />
    },
    //carousel
    carousel:[
        {
            //CI=== carousel item
            id:"CI-1",
            heading: "17 Pictures of Medium length hair in layers that will inspire your new haircut",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium,",
            img_url:"./src/assets/post-slide-1.jpg"
        },

        {
            //CI=== carousel item
            id:"CI-2",
            heading: "17 Pictures of Medium length hair in layers that will inspire your new haircut",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium,",
            img_url:"./src/assets/post-slide-2.jpg"
        },

        {
            id:"CI-3",
            heading: "17 Pictures of Medium length hair in layers that will inspire your new haircut",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium,",
            img_url:"./src/assets/post-slide-3.jpg"
        },

        {
            id:"CI-4",
            heading: "17 Pictures of Medium length hair in layers that will inspire your new haircut",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium,",
            img_url:"./src/assets/post-slide-4.jpg"
        }
    ]
};

////body data

//all section

export interface big_img_text_type{
    img_url:string,
    category: string,
    date: string,
    heading: string,
    summary: string,
    second_img_url: string,
    person_name: string
};

export interface small_img_text_type{
    id:string,
    img_url: string,
    category: string,
    date: string,
    title: string
};

export interface quoteType{
    title: string,
    writer: string
};

export interface sectionType{
    big_img_text:big_img_text_type,

    small_img_texts:small_img_text_type[],

    quotes:quoteType[]
};

export const all:sectionType = {
    big_img_text: {
        img_url:"./src/assets/post-landscape-1.jpg",
        category: "culture",
        date: "july 5th '22",
        heading: "11 Work From Home Part-Time Jobs You Can Do Now",
        summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos",
        second_img_url: "./src/assets/person-1.jpg",
        person_name: "Cameron Williamson"
    },

    small_img_texts:[
        {
            id: "SIT-1",
            img_url:"./src/assets/post-landscape-2.jpg",
            category:"sport",
            date: "july 5th '22",
            title:"Let’s Get Back to Work, New York"
        },

        {
            id: "SIT-2",
            img_url:"./src/assets/post-slide-3.jpg",
            category:"food",
            date: "july 17th '22",
            title:"How to Avoid Distraction and Stay Focused During Video Calls?"
        },

        {
            id: "SIT-3",
            img_url:"./src/assets/post-landscape-7.jpg",
            category:"design",
            date: "july 5th '22",
            title:"Let’s Get Back to Work, New York"
        },

        {
            id: "SIT-4",
            img_url:"./src/assets/post-slide-1.jpg",
            category:"business",
            date: "mar 15th '22",
            title:"Why Craigslist Tampa Is One of The Most Interesting Places On the Web?"
        },

        {
            id: "SIT-5",
            img_url:"./src/assets/post-slide-4.jpg",
            category:"tech",
            date: "july 5th '22",
            title:"Let’s Get Back to Work, New York"
        },

        {
            id: "SIT-6",
            img_url:"./src/assets/post-landscape-8.jpg",
            category:"travel",
            date: "july 5th '22",
            title:"Let’s Get Back to Work, New York"
        },
    ],

    quotes:[
        {
            title: "The Best Homemade Masks for Face (keep the Pimples Away)",
            writer: "Jane Cooper"
        },

        {
            title: "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
            writer: "Wade Warren"
        },

        {
            title: "The Best Homemade Masks for Face (keep the Pimples Away)",
            writer: "Jane Cooper"
        },

        {
            title: "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
            writer: "Wade Warren"
        },

        {
            title: "The Best Homemade Masks for Face (keep the Pimples Away)",
            writer: "Jane Cooper"
        }
    ]
};

export interface small_desc_type{
    person_name: string,
    desc: string
};

export interface img_txt_plus_small_desc_type{
    id:string,
    img_url: string,
    category: string,
    date: string,
    title: string,
    description:small_desc_type
};

export interface cat_date_quote_type{
    title: string,
    writer: string,
    category: string,
    date: string
};

export interface middle_sections_type{
    header: {sectionHeader: string, 
    seeAll: string},
    middle_section_left: {
        first_part: big_img_text_type,

        second_part: img_txt_plus_small_desc_type,

        third_part: cat_date_quote_type,

        last_part: img_txt_plus_small_desc_type
    },
    middle_section_right: cat_date_quote_type[]
};

//culture section
export const culture: middle_sections_type= {

    header: {
        sectionHeader: "culture",
        seeAll: "see all culture"
    },
    middle_section_left: {
        first_part:{
            img_url:"./src/assets/post-slide-4.jpg",
            category: "culture",
            date: "jul 5th '22",
            heading: "What is the son of Football Coach John Gruden, Deuce Gruden doing Now?",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?            ",
            second_img_url: "./src/assets/person-4.jpg",
            person_name: "Wade Warren"
        },

        //doggy pic
        second_part: {
            id: "MS-1",
            img_url:"./src/assets/post-landscape-1.jpg",
            category: "culture",
            date: "jul 5th '22",
            title: "11 Work From Home Part-Time Jobs You Can Do Now",
            description:{
                person_name:"Jenny Wilson",
                desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus"
            }
        },
        
        //
        third_part: {
         category: "business",
         date: "Oct 24th, '22",
         title: "5 Great Startup Tips for Female Founders",
         writer: "Jenny Wilson"   
        },

        last_part: {
            id:"MS-2",
            img_url: "./src/assets/post-landscape-2.jpg",
            category: "culture",
            date: "jul 5th, '22",
            title: "How to Avoid Distraction and Stay Focused During Video Calls?",
            description: {
                person_name:"Jenny Wilson",
                desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus"
            }
        }

    },
    middle_section_right: [
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "5 Great Startup Tips for Female Founders",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "9 Half-up/half-down Hairstyles for Long and Medium Hair",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "Life Insurance And Pregnancy: A Working Mom’s Guide",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "5 Great Startup Tips for Female Founders",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "10 Life-Changing Hacks Every Working Mom Should Know",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "5 Great Startup Tips for Female Founders",
            writer: "Jenny Wilson"
        },
    ]
};

//business section
export const business: middle_sections_type = {
    header: {
        sectionHeader: "business",
        seeAll: "see all business"
    },
    middle_section_left: {
        first_part:{
            img_url:"./src/assets/post-slide-1.jpg",
            category: "culture",
            date: "jul 5th '22",
            heading: "What is the son of Football Coach John Gruden, Deuce Gruden doing Now?",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?            ",
            second_img_url: "./src/assets/person-1.jpg",
            person_name: "Wade Warren"
        },

        //doggy pic
        second_part: {
            id: "MS-1",
            img_url:"./src/assets/post-slide-3.jpg",
            category: "culture",
            date: "jul 5th '22",
            title: "11 Work From Home Part-Time Jobs You Can Do Now",
            description:{
                person_name:"Jenny Wilson",
                desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus"
            }
        },
        
        //
        third_part: {
         category: "business",
         date: "Oct 24th, '22",
         title: "5 Great Startup Tips for Female Founders",
         writer: "Jenny Wilson"   
        },

        last_part: {
            id:"MS-2",
            img_url: "./src/assets/post-landscape-7.jpg",
            category: "culture",
            date: "jul 5th, '22",
            title: "How to Avoid Distraction and Stay Focused During Video Calls?",
            description: {
                person_name:"Jenny Wilson",
                desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus"
            }
        }

    },
    middle_section_right: [
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "5 Great Startup Tips for Female Founders",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "9 Half-up/half-down Hairstyles for Long and Medium Hair",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "Life Insurance And Pregnancy: A Working Mom’s Guide",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "5 Great Startup Tips for Female Founders",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "10 Life-Changing Hacks Every Working Mom Should Know",
            writer: "Jenny Wilson"
        },
        {
            category: "business",
            date: "Oct 24th, '22",
            title: "5 Great Startup Tips for Female Founders",
            writer: "Jenny Wilson"
        },
    ]
};

//lifestyle section
export const lifestyle = {

};

//footer data
export const footer = {
    foot_head: {
        person_name: "About ZenBlog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab, perspiciatis beatae autem deleniti voluptate nulla a dolores, exercitationem eveniet libero laudantium recusandae officiis qui aliquid blanditiis omnis quae. Explicabo?"
    },

    navigation: {
        arr: [
            "home",
            "blog",
            "categories",
            "single post",
            "about us",
            "contact"
        ],
        title: "navigation"
    } ,
    
    categories:
    {
        arr: [
            "business",
            "culture",
            "sport",
            "food",
            "politics",
            "celebrity",
            "startups",
            "travel"
        ], 
        title: "categories"
    } ,

    recent_posts: {
        title: "recent posts",

        arr:[
            {
                id:"FRP-1",//footer recent post
                img_url: "./src/assets/post-landscape-1.jpg",
                category: "culture",
                date: "june 15th '22",
                title: "5 Great startup tips for female founders"
            },

            {
                id:"FRP-2",
                img_url: "./src/assets/post-landscape-2.jpg",
                category: "culture",
                date: "june 15th '22",
                title: "5 Great startup tips for female founders"
            },

            
            {
                id:"FRP-3",
                img_url: "./src/assets/post-slide-1.jpg",
                category: "culture",
                date: "june 15th '22",
                title: "5 Great startup tips for female founders"
            },

            
            {
                id:"FRP-4",
                img_url: "./src/assets/post-slide-2.jpg",
                category: "culture",
                date: "june 15th '22",
                title: "5 Great startup tips for female founders"
            }
        ]
    },

    foot_last: {
        arr: [
            <FaTwitter />,
            <FaFacebook />,
            <FaInstagram />,
            <FaSkype />,
            <FaLinkedin />
        ]
    }
}