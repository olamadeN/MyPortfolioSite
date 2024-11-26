import "./portfolio.css"
import img1 from '../../assets/arise.jpg'
import img2 from '../../assets/kukeat.jpg'
import img3 from '../../assets/foremaj.jpg'
import img4 from '../../assets/landing.jpg'
import img5 from '../../assets/chef.jpg'

const Portfolio = () => {

    const portData = [
        {
            id:1,
            image: img1,
            title: 'Arise Contractors Group',
            description: "This is a website for a constronction company. It contains a the full detail of their services and their work process. It is a large website withover 16 pages including a well arranged gallery of previous projects and an admin panel to manage the gallery. This work ws made using the MERN stack. ",
            demo: 'https://arise-866e1.firebaseapp.com/'
        },
        {
            id: 2,
            image: img2,
            title: 'Kukeat',
            description: 'This is a website for a foodstuff sales and delivery company. It is an ecomerce website with a store, cart and check out system. This work was made with React js.',
            demo: 'https://kukeat-e0152.firebaseapp.com/'
        },
        {
            id:3,
            image: img3,
            title: 'Foremaj',
            description: 'This is a website an intrernational Nigerian raw food sale. It has a very beatiful design and made with clean code. It was designed with React JS',
            demo: 'https://formaj-92e86.firebaseapp.com/'
        },
        {
            id:4,
            image: img4,
            title: 'Clothing Store',
            description: 'This eCommerce website was designed and developed for a clothing store aiming to enhance its online presence and provide customers with a seamless shopping experience. The site features a visually appealing.',
            demo: 'https://apprels.web.app/'
        },
        {
            id:5,
            image: img5,
            title: 'Chefs conner',
            description: 'This website was developed for a professional chef looking to share recipes, cooking tips, and culinary expertise with food enthusiasts. The site offers an engaging platform for users to explore a variety of recipes, view cooking tutorials, and access detailed ingredient lists and instructions.',
            demo: 'https://tobams-foodieland.web.app/'
        }
    ]

  

    return (    
        <section>
           <h5>My Recent work</h5>
           <h2>Portfolio</h2>

            <div className="container portfolioContainer">
                {
                    portData.map((data) => {
                        return(
                            <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" key={data.id} className="portfolioItem">
                               <a id="portA" href={data.demo}>
                                    <div className="portfolioItem-image">
                                        <img src={data.image} alt={data.title} />                       
                                    </div>
                                    <div className="portDisc">
                                        <h3>{data.title}</h3>
                                        <p>{data.description}</p>
                                        <div className="portfolioItem-cta">
                                            <a href={data.demo} target="_blank" rel="noreferrer" className="protBtn btn">Demo</a>
                                            {/* <a href={data.demo} target="_blank" aria-disabled rel="noreferrer" className="btn btn-primary">Live Demo</a> */}
                                        </div> 
                                    </div>
                               </a>                                   
                            </article>
                        )
                    })
                }
              
            </div>
        </section>
    );
}
 
export default Portfolio;