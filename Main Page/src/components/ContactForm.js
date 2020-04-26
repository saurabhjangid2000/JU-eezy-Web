import React from 'react';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          Found anything interesting? Found a bug? Have any suggestion? Want to work with us?<br/>
          We are listening. Just drop your message here.
        </p>
        <form action="https://getform.io/f/6f09bce4-ae59-4988-97ba-3bc7bea19613" method="POST">
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="button primary"
              />
            </li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
      </div>
    </>
  );
}
