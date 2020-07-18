import React from 'react';
import config from '../../config';
import { Link } from 'gatsby';

export default function SideFooter() {
  return (
    <footer>
      <ul className="items">
        <li>
          <h3>Other Resources</h3>
          <ul className="actions">
            <li>
              <a
                href="https://blog.jueezy.rocks/"
                className="button icon fa-newspaper-o"
              >
                Blogs
              </a>
            </li>
            <li>
              <Link to="/menu" className="button icon fa-spoon">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/pfd" className="button icon fa-file">
                Pass Fail Detector
              </Link>
            </li>
          </ul>
        </li>
        {config.emailId && (
          <li>
            <h3>Email</h3>
            <a href={`mailto:${config.emailId}`}>{config.emailId}</a>
          </li>
        )}

        <li>
          <h3>Social Links</h3>
          <ul className="icons">
            {config.socialLinks.map((social) => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </footer>
  );
}
