import { useParams, Navigate } from 'react-router-dom'
import { posts } from '../data/posts'
import Sidebar from '../components/Sidebar'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/" replace />

  const renderContent = (item, idx) => {
    switch (item.type) {
      case 'lead':
        return <p key={idx} className="lead">{item.text}</p>
      case 'text':
        return <p key={idx}>{item.text}</p>
      case 'image':
        const img = post.images[item.index]
        return (
          <img
            key={idx}
            src={img.src}
            className="img-fluid rounded mb-3"
            alt={img.alt}
          />
        )
      case 'blockquote':
        return (
          <blockquote key={idx} className="blockquote">
            <p className="mb-0">{item.text}</p>
            <strong className="blockquote-footer">{item.footer}</strong>
          </blockquote>
        )
      default:
        return null
    }
  }

  return (
    <main className="py-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h2>{post.title}</h2>
            <p className="lead">
              by <a href="#">{post.author}</a>
            </p>
            <p>Posted on {post.date}</p>

            {/* Hero image */}
            <img
              src={post.images[0].src}
              className="img-fluid rounded mb-3"
              alt={post.images[0].alt}
            />

            {/* Dynamic content */}
            {post.content.map((item, idx) => renderContent(item, idx))}
          </div>
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
