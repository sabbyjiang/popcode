import i18next from 'i18next';
import PropTypes from 'prop-types';
import React from 'react';

export default function NewProjectButton({onClick, isUserAuthenticated}) {
  if (!isUserAuthenticated) {
    return false;
  }

  return (
    <div
      className="top-bar__menu-button top-bar__menu-button_secondary"
      onClick={onClick}
    >
      {i18next.t('top-bar.new-project')}
    </div>
  );
}

NewProjectButton.propTypes = {
  isUserAuthenticated: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
