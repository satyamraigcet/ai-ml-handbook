import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Site-wide soft watermark (readable on screen, clearer on print)
 * + hard-copy WhatsApp notice.
 */
export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const wa = siteConfig.customFields?.whatsappGroupUrl || '';
  const hasWa = typeof wa === 'string' && wa.startsWith('http');

  return (
    <>
      <div className="nb-wm-layer" aria-hidden="true">
        <div className="nb-wm-layer__tile">Satyam Rai · © 2026 · Pictures First</div>
        <div className="nb-wm-layer__tile">Satyam Rai · © 2026 · Pictures First</div>
        <div className="nb-wm-layer__tile">Satyam Rai · © 2026 · Pictures First</div>
        <div className="nb-wm-layer__tile">Satyam Rai · © 2026 · Pictures First</div>
        <div className="nb-wm-layer__tile">Satyam Rai · © 2026 · Pictures First</div>
        <div className="nb-wm-layer__tile">Satyam Rai · © 2026 · Pictures First</div>
      </div>

      <aside className="nb-hardcopy" role="note">
        <strong>Hard copy</strong>
        <span>
          Printing or sharing this book needs permission. Need a printed copy? Join the WhatsApp
          group.
        </span>
        {hasWa ? (
          <a className="nb-hardcopy__btn" href={wa} target="_blank" rel="noopener noreferrer">
            WhatsApp group
          </a>
        ) : (
          <span className="nb-hardcopy__hint">Ask Satyam Rai for the WhatsApp group invite.</span>
        )}
      </aside>

      {children}
    </>
  );
}
