import Sidebar from '../components/Sidebar'

export default function About() {
  return (
    <main className="py-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h2>Who I Am</h2>
            <p className="lead">
              My name is Nicolas Garlinski and I am a Computer Science Student Living in Poland.
            </p>

            <p>
              This website will be devoted to sharing my personal thoughts and updating readers on my life. This blog
              exists as a foray into web development and a personal project of mine to talk what I want to talk about
              without having the restrictions of a character limit, a design that I have no control over, or any
              corporate control.
            </p>

            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FD4D03AQEOH3dQ1rZ8sA%2Fprofile-displayphoto-shrink_200_200%2Fprofile-displayphoto-shrink_200_200%2F0%2F1710701139650%3Fe%3D2147483647%26v%3Dbeta%26t%3D7Yv7gDY6lrr0unWrAHUGtx-NsntcZIP3OwrQzr1WIm8&f=1&nofb=1&ipt=68f76512c681a7ad1bf546b8eecd679e42b8d3b898df7106dfe4fa393351c08e"
              className="img-fluid float-right"
              width="250"
              draggable="false"
              alt="Nicolas Garlinski"
            />

            <p className="lead">
              <strong>Time to start at the beginning.</strong> I was born to polish parents on the northwest side of
              Chicago where I lived the first 19 years of my life. After I graduated high school I decided to go abroad
              to study not only to be close to my paternal family but also to avoid paying the high cost of american
              college tuition. My primary interests are science-fiction (primarily that seen in movies and TV), video
              games, politics and recently web development.
            </p>

            <p>
              I am not normally one for long descriptions, nor writing out a biography inside a code editor yet here we
              are. If you wish to find me I mainly divide my time between Wroclaw where I study and Chicago where I
              vacate to during the summer.
            </p>

            <img
              src="https://res.cloudinary.com/dfog0e294/image/upload/v1547644602/webdev/Blog/about-me-03.png"
              className="img-fluid float-left"
              width="250"
              draggable="false"
              alt="About Me"
            />

            <p>
              Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus.{' '}
              <strong>Nulla facilisi morbi tempus iaculis. Nulla facilisi nullam vehicula ipsum a arcu.</strong> Pharetra
              sit amet aliquam id diam. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Aenean
              pharetra magna ac placerat vestibulum.
            </p>

            <p className="lead">
              Porttitor massa id neque aliquam vestibulum. A scelerisque purus semper eget. Dis parturient montes
              nascetur ridiculus mus. Adipiscing bibendum est ultricies integer quis. Dui vivamus arcu felis bibendum ut
              tristique et egestas quis.
            </p>

            <img
              src="https://res.cloudinary.com/dfog0e294/image/upload/v1547644602/webdev/Blog/about-me-04.png"
              className="img-fluid float-right"
              width="250"
              draggable="false"
              alt="About Me"
            />

            <p>
              In vitae turpis massa sed elementum. <a href="#">Convallis a cras semper auctor neque</a>. Laoreet id
              donec ultrices tincidunt. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.
            </p>

            <p>
              Varius sit amet mattis vulputate enim nulla aliquet porttitor. A lacus vestibulum sed arcu non odio
              euismod lacinia. <strong>Consectetur adipiscing elit pellentesque habitant morbi.</strong> Feugiat nisl
              pretium fusce id velit ut tortor pretium viverra.
            </p>

            <p className="lead">Thanks for visiting!</p>
          </div>
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
