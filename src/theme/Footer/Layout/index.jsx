import React from 'react';
import clsx from 'clsx';

export default function FooterLayout({ style, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description mb-8">
          With VCMS, we build a video content moderation system, automatically
          detecting videos with sensitive and unsafe content for users. In
          addition, we also developed a text recognition system in photos and
          videos, helping to filter out inappropriate words.
        </p>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
