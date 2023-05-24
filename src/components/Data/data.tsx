import {FaFacebook, FaTwitter, FaInstagram, FaSearch, FaBars, FaSkype, FaLinkedin} from "react-icons/fa";
import {FiSmartphone} from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci"

//blog page 

//header data
export const Header = {
    //navbar
    navbar:{
        blog_name: "ZenBlog",

        nav_menus:[
            {
                id:0,
                name: "blog"
            },

            {
                id:1,
                name: "single post"
            },

            {
                id:2,
                name: "categories",
            },

            {
                id:3,
                name: "about"
            },

            {
                id:4,
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
            id:0,
            heading: "17 Pictures of Medium length hair in layers that will inspire your new haircut",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium,",
            img_url:"./post-slide-1.jpg"
        },

        {
            //CI=== carousel item
            id:1,
            heading: "17 Pictures of Medium length hair in layers that will inspire your new haircut",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium,",
            img_url:"./post-slide-2.jpg"
        },

        {
            id:2,
            heading: "17 Pictures of Medium length hair in layers that will inspire your new haircut",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium,",
            img_url:"./post-slide-3.jpg"
        },

        {
            id:3,
            heading: "17 Pictures of Medium length hair in layers that will inspire your new haircut",
            summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium,",
            img_url:"./post-slide-4.jpg"
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
        img_url:"./post-landscape-1.jpg",
        category: "culture",
        date: "july 5th '22",
        heading: "11 Work From Home Part-Time Jobs You Can Do Now",
        summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos",
        second_img_url: "./person-1.jpg",
        person_name: "Cameron Williamson"
    },

    small_img_texts:[
        {
            id: "SIT-1",
            img_url:"./post-landscape-2.jpg",
            category:"sport",
            date: "july 5th '22",
            title:"Let’s Get Back to Work, New York"
        },

        {
            id: "SIT-2",
            img_url:"./post-slide-3.jpg",
            category:"food",
            date: "july 17th '22",
            title:"How to Avoid Distraction and Stay Focused During Video Calls?"
        },

        {
            id: "SIT-3",
            img_url:"./post-landscape-7.jpg",
            category:"design",
            date: "july 5th '22",
            title:"Let’s Get Back to Work, New York"
        },

        {
            id: "SIT-4",
            img_url:"./post-slide-1.jpg",
            category:"business",
            date: "mar 15th '22",
            title:"Why Craigslist Tampa Is One of The Most Interesting Places On the Web?"
        },

        {
            id: "SIT-5",
            img_url:"./post-slide-4.jpg",
            category:"tech",
            date: "july 5th '22",
            title:"Let’s Get Back to Work, New York"
        },

        {
            id: "SIT-6",
            img_url:"./post-landscape-8.jpg",
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
            img_url:"./post-slide-4.jpg",
            category: "culture",
            date: "jul 5th '22",
            heading: "What is the son of Football Coach John Gruden, Deuce Gruden doing Now?",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?            ",
            second_img_url: "./person-4.jpg",
            person_name: "Wade Warren"
        },

        //doggy pic
        second_part: {
            id: "MS-1",
            img_url:"./post-landscape-1.jpg",
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
            img_url: "./post-landscape-2.jpg",
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
            img_url:"./post-slide-1.jpg",
            category: "culture",
            date: "jul 5th '22",
            heading: "What is the son of Football Coach John Gruden, Deuce Gruden doing Now?",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?            ",
            second_img_url: "./person-1.jpg",
            person_name: "Wade Warren"
        },

        //doggy pic
        second_part: {
            id: "MS-1",
            img_url:"./post-slide-3.jpg",
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
            img_url: "./post-landscape-7.jpg",
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
                img_url: "./post-landscape-1.jpg",
                category: "culture",
                date: "june 15th '22",
                title: "5 Great startup tips for female founders"
            },

            {
                id:"FRP-2",
                img_url: "./post-landscape-2.jpg",
                category: "culture",
                date: "june 15th '22",
                title: "5 Great startup tips for female founders"
            },

            
            {
                id:"FRP-3",
                img_url: "./post-slide-1.jpg",
                category: "culture",
                date: "june 15th '22",
                title: "5 Great startup tips for female founders"
            },

            
            {
                id:"FRP-4",
                img_url: "./post-slide-2.jpg",
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

export interface img_paras_type {
    img_url: string,
    img_caption: string,
    paras: string[]
};

export interface comment_reply_type{
    img_url: string,
    name: string,
    day: string,
    comment: string
};


//single-post page
export const single_post = {
    //left part
    single_post_top: {
        category: "business",
        date: "june 12th '22",
        title: "13 Amazing Poems from Shel Silverstein with Valuable Life Lessons",
        writer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officia sed, suscipit distinctio, numquam omnis quo fuga ipsam quis inventore voluptatum recusandae culpa, unde doloribus saepe labore alias voluptate expedita? Dicta delectus beatae explicabo odio voluptatibus quas, saepe qui aperiam autem obcaecati, illo et! Incidunt voluptas culpa neque repellat sint, accusamus beatae, cumque autem tempore quisquam quam eligendi harum debitis.`
    },
    img_paras: [
        {
            img_url:"./post-landscape-1.jpg",
            img_caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit?",
            paras: [
                "Sunt reprehenderit, hic vel optio odit est dolore, distinctio iure itaque enim pariatur ducimus. Rerum soluta, perspiciatis voluptatum cupiditate praesentium repellendus quas expedita exercitationem tempora aliquam quaerat in eligendi adipisci harum non omnis reprehenderit quidem beatae modi. Ea fugiat enim libero, ipsam dicta explicabo nihil, tempore, nulla repellendus eos necessitatibus eligendi corporis cum? Eaque harum, eligendi itaque numquam aliquam soluta.",
                "Explicabo perspiciatis, laborum provident voluptates illum in nulla consectetur atque quaerat excepturi quisquam, veniam velit ex pariatur quos consequuntur? Excepturi reiciendis perferendis, cupiditate dolorem eos illum amet. Beatae voluptates nemo esse ratione voluptate, nesciunt fugit magnam veritatis voluptas dignissimos doloribus maiores? Aliquam, dolores natus exercitationem corrupti blanditiis, consequuntur nihil nobis sed voluptatibus maiores sunt, illo provident aliquid laborum. Vitae, ut.",
                "Reprehenderit aut sed doloribus blanditiis, aspernatur magni? In molestias rem, similique ut esse repudiandae quod recusandae dolores neque earum omnis at, suscipit fuga? Minima qui veniam deserunt quisquam error amet at ratione nesciunt porro quis placeat repudiandae voluptatibus officiis fuga necessitatibus, expedita officia adipisci eaque labore accusamus? Nesciunt repellat illo exercitationem facilis similique quaerat, quis sequi? Praesentium nulla ipsam dolor.",
                "Dolorum, incidunt! Adipisci harum itaque maxime dolores doloremque porro eligendi quis, doloribus vel sit rerum sunt obcaecati nam suscipit nulla vitae alias blanditiis aliquam debitis atque illo modi et placeat. Ratione iure eveniet provident. Culpa laboriosam sed ad quia. Corrupti, earum, perferendis dolore cupiditate sint nihil maiores iusto tempora nobis porro itaque est. Ut laborum culpa assumenda pariatur et perferendis?",
                "Est soluta veritatis laboriosam, consequuntur temporibus asperiores, fugit id a ullam sed, expedita sequi doloribus fugiat. Odio et necessitatibus enim nam, iste reprehenderit cupiditate omnis ut iure aliquid obcaecati, repellendus nemo provident eveniet tempora minus! Voluptates aut laboriosam, maiores nihil accusantium, a dolorum quaerat tenetur illo eum culpa cum laudantium sunt doloremque modi possimus magni? Perferendis cum repudiandae corrupti porro."
            ]
        },
        {
            img_url:"./post-slide-3.jpg",
            img_caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit?",
            paras: [
                "Sunt reprehenderit, hic vel optio odit est dolore, distinctio iure itaque enim pariatur ducimus. Rerum soluta, perspiciatis voluptatum cupiditate praesentium repellendus quas expedita exercitationem tempora aliquam quaerat in eligendi adipisci harum non omnis reprehenderit quidem beatae modi. Ea fugiat enim libero, ipsam dicta explicabo nihil, tempore, nulla repellendus eos necessitatibus eligendi corporis cum? Eaque harum, eligendi itaque numquam aliquam soluta.",
                "Explicabo perspiciatis, laborum provident voluptates illum in nulla consectetur atque quaerat excepturi quisquam, veniam velit ex pariatur quos consequuntur? Excepturi reiciendis perferendis, cupiditate dolorem eos illum amet. Beatae voluptates nemo esse ratione voluptate, nesciunt fugit magnam veritatis voluptas dignissimos doloribus maiores? Aliquam, dolores natus exercitationem corrupti blanditiis, consequuntur nihil nobis sed voluptatibus maiores sunt, illo provident aliquid laborum. Vitae, ut.",
                "Reprehenderit aut sed doloribus blanditiis, aspernatur magni? In molestias rem, similique ut esse repudiandae quod recusandae dolores neque earum omnis at, suscipit fuga? Minima qui veniam deserunt quisquam error amet at ratione nesciunt porro quis placeat repudiandae voluptatibus officiis fuga necessitatibus, expedita officia adipisci eaque labore accusamus? Nesciunt repellat illo exercitationem facilis similique quaerat, quis sequi? Praesentium nulla ipsam dolor.",
                "Dolorum, incidunt! Adipisci harum itaque maxime dolores doloremque porro eligendi quis, doloribus vel sit rerum sunt obcaecati nam suscipit nulla vitae alias blanditiis aliquam debitis atque illo modi et placeat. Ratione iure eveniet provident. Culpa laboriosam sed ad quia. Corrupti, earum, perferendis dolore cupiditate sint nihil maiores iusto tempora nobis porro itaque est. Ut laborum culpa assumenda pariatur et perferendis?",
                "Est soluta veritatis laboriosam, consequuntur temporibus asperiores, fugit id a ullam sed, expedita sequi doloribus fugiat. Odio et necessitatibus enim nam, iste reprehenderit cupiditate omnis ut iure aliquid obcaecati, repellendus nemo provident eveniet tempora minus! Voluptates aut laboriosam, maiores nihil accusantium, a dolorum quaerat tenetur illo eum culpa cum laudantium sunt doloremque modi possimus magni? Perferendis cum repudiandae corrupti porro."
            ]
        }
    ],
    comments: [
        {
            img_url: "./person-1.jpg",
            name: "Jordan Singer",
            day: "2d",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui magni, placeat deserunt pariatur itaque laudantium impedit aliquam eligendi repellendus excepturi quibusdam nobis esse accusantium."
        },
        {
            img_url: "./post-landscape-8.jpg",
            name: "Santiago Roberts",
            day: "4d",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui magni, placeat deserunt pariatur itaque laudantium impedit."
        }
    ],
    replies: [
        {
            img_url: "./person-4.jpg",
            name: "Brandon Smith",
            day: "2d",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui m."
        },
        {
            img_url: "./post-slide-3.jpg",
            name: "Santiago Roberts",
            day: "1d",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui magni, placeat deserunt pariatur itaque laudantium impedit."
        }
    ],
    form:{
        head: "Leave a Comment",
        btn_name: "Post comment"
    },

    
    //right part
    pop_trend_lat:{
        popular: [
            {
               category: "sport",
               date: "jul 5th '22",
               title: "How to Avoid Distraction and Stay Focused During Video Calls?",
               writer: "Jenny Wilson" 
            },
            {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "lifestyle",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "business",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             }
        ],
        trending:  [
            {
               category: "lifestyle",
               date: "jul 5th '22",
               title: "9 Half-up/half-down Hairstyles for Long and Medium Hair",
               writer: "Jenny Wilson" 
            },
            {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "lifestyle",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "business",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             }
        ],
    
        latest: [
            {
               category: "business",
               date: "jul 5th '22",
               title: "10 Life-Changing Hacks Every Working Mom Should Know",
               writer: "Jenny Wilson" 
            },
            {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "lifestyle",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "business",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             },
             {
                category: "sport",
                date: "jul 5th '22",
                title: "How to Avoid Distraction and Stay Focused During Video Calls?",
                writer: "Jenny Wilson" 
             }
        ],

        video:{
            img_url:"./post-landscape-7.jpg"
        },
        categories_tags:[
            "business",
            "culture",
            "sport",
            "food",
            "politics",
            "celebrity",
            "startups",
            "travel"
        ]
    }
};

//about page
export interface small_sec_type{
    sub_topic: string,
    paragraphs: string[]
};

export const about={
    about_top:[
        {
            topic: "about us",
            small_sec:{
                sub_topic: "company history",
                paragraphs: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!",
                    "Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi."
                ]
            },
            img_url: "./post-landscape-2.jpg"
        },
        {
            topic: "mission & vision",
            small_sec:{
                sub_topic: "mission & vision",
                paragraphs: [
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!",
                    "Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi."
                ]
            },
            img_url: "./post-landscape-1.jpg"
        }
    ],
    latest_news:{
        small_sec:{
            sub_topic: "latest news",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!",
                "Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi."
            ]
        },
        view_all: "view all blog posts",
        img_urls:["./post-portrait-3.jpg", "./post-portrait-4.jpg"]
    },
    team: {
        small_sec:{
            sub_topic: "company history",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!",
            ]
        },
        members:[
            {
                img_url:"./person-1.jpg",
                name: "Cameron Williamson",
                post: "founder & ceo",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!"
            },
            {
                img_url:"./person-4.jpg",
                name: "Wade Warrem",
                post: "founder,Vp",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!"
            },
            {
                img_url:"./person-1.jpg",
                name: "Jane Cooper",
                post: "editor staff",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!"
            },
            {
                img_url:"./post-landscape-8.jpg",
                name: "Cameron Williamson",
                post: "founder & ceo",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!"
            },
            {
                img_url:"./person-1.jpg",
                name: "Cameron Williamson",
                post: "founder & ceo",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!"
            },
            {
                img_url:"./post-slide-4.jpg",
                name: "Cameron Williamson",
                post: "founder & ceo",
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!"
            }
        ]
    }
};

//categories page


//contact page
export interface contact_subpart_type{
    icon: JSX.Element,
    name: string,
    info: string
};

export const contact ={
    address:{
        icon: <CiLocationOn />,
        name: "address",
        info: "A108 Adam Street, NY 535022, USA"
    },
    phone_num:{
        icon: <FiSmartphone />,
        name: "phone number",
        info: "+1 5589 55488 55"
    },
    email:{
        icon: <AiOutlineMail />,
        name: "email",
        info: "info@example.com"
    },
    form: {
        head: "",
        btn_name: "send message"
    }
}

//search-result page

