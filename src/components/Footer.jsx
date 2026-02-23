const LOGO_URL =
  'https://media.discordapp.net/attachments/729514141911613452/760846701875167273/5a028110e3cb6efd4c36e5dc9f67c9d0.png?ex=679d7075&is=679c1ef5&hm=d8511221577f7dc8c046ffeb10e7c4738c57e4ae463be88fb765c18fdcb976ee&=&format=webp&quality=lossless&width=160&height=160'

export default function Footer() {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="row py-3 text-light">
          <div className="col-md-4">
            <img src={LOGO_URL} className="img-fluid" width="160" draggable="false" alt="Logo" />
          </div>
          <div className="col-md-4">
            <h3>About</h3>
            <p>My name is Nicolas Garlinski and I am a Computer Science Student Living in Poland.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact me</h3>
            <p>
              If you are interested in working with me or just want to say hello simply write on email.
              <br />
              <strong>Email: <a href="mailto:contact@mail.com" className="text-white">contact@mail.com</a></strong>
            </p>
          </div>
        </div>

        <p className="lead text-center text-light">FOLLOW ME ON THE WEB</p>
        <div className="row mb-3 justify-content-center">
          <a href="https://www.facebook.com" role="button"><i className="fab fa-facebook fa-lg"></i></a>
          <a href="https://twitter.com" role="button"><i className="fab fa-twitter fa-lg"></i></a>
          <a href="https://youtube.com" role="button"><i className="fab fa-youtube fa-lg"></i></a>
          <a href="https://pinterest.com" role="button"><i className="fab fa-pinterest-p fa-lg"></i></a>
        </div>

        <div className="row py-3 d-flex justify-content-center border-top">
          <small className="d-block text-light">Copyright &copy; 2025 Nicolas Garlinski Blog</small>
        </div>
      </div>
    </footer>
  )
}
