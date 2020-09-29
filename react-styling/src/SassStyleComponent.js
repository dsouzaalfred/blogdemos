import React from 'react';
import './SassStyleComponent.scss';

const SassStyleComponent = () => {
  return (
    <div className="sass-wrapper">
      <ul>
        <li>
          <a href="https://dsouzaalf.red/">This is a link</a>
        </li>
        <li>This is not a link</li>
      </ul>
    </div>
  );
};

export default SassStyleComponent;
