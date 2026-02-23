import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (You can wire this up to a backend or email service like EmailJS.)')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <main className="py-3 mb-3">
      <div className="container">
        <div className="row">
          {/* Map */}
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.15270489381!2d-73.98024868453376!3d40.75866597932692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fec4f48e93%3A0x1a2ac0c533db6ec2!2sThe+LEGO+Store!5e0!3m2!1sen!2sua!4v1543332341437"
              height="600"
              style={{ width: '100%', border: 0 }}
              allowFullScreen
              title="Google Maps"
            ></iframe>
          </div>

          {/* Contact form */}
          <div className="col-md-6">
            <h2 className="display-3">Contact me</h2>
            <div className="mb-1">
              <h4>
                <i className="far fa-envelope"></i> Don't hesitate to contact me
              </h4>
            </div>
            <h5>Ready for offers and cooperation</h5>
            <p className="text-muted">
              Phone: +1 (0) 000 0000 000 <br />
              Email: <a href="mailto:nicgarlinski@mail.com">nicgarlinski@mail.com</a>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 pb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 pb-3">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12 pb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12 pb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="3"
                    maxLength="6000"
                    placeholder="Message"
                    style={{ resize: 'none' }}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-outline-secondary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
