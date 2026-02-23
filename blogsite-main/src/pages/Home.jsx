import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const homePosts = [
  {
    title: 'Babylon 5',
    description: 'This is an article talking about the similarities and differences between Babylon 5 and Deep Space Nine',
    img: 'https://insidepulse.com/wp-content/uploads/2023/07/Babylon-5-banner-e1690152594533.jpg',
    imgWidth: 500,
    imgHeight: undefined,
    to: '/blog/spider-man',
  },
  {
    title: 'Deep Space Nine',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed.',
    img: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547038239/webdev/Blog/img02.png',
    imgWidth: undefined,
    imgHeight: 250,
    to: '/blog/batman',
  },
  {
    title: 'An American living in Poland',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed.',
    img: 'https://res.cloudinary.com/dfog0e294/image/upload/v1547038233/webdev/Blog/img03.png',
    imgWidth: undefined,
    imgHeight: 250,
    to: '/blog/panther',
  },
]

export default function Home() {
  return (
    <main className="py-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {homePosts.map((post) => (
              <div key={post.title} className="card flex-md-row mb-4 border-light shadow-sm h-md-250">
                <img
                  className="card-img-left flex-auto d-none d-md-block"
                  width={post.imgWidth}
                  height={post.imgHeight}
                  src={post.img}
                  alt={post.title}
                />
                <div className="card-body d-flex flex-column align-items-start">
                  <h3 className="card-title mb-0">{post.title}</h3>
                  <p className="card-text mb-auto">{post.description}</p>
                  <Link to={post.to} className="btn btn-outline-secondary">Read More</Link>
                </div>
              </div>
            ))}
          </div>
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
