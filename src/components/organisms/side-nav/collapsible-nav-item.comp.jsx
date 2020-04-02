import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsSideNavOpen } from '../../../redux/navigation/actions';

import { NavItem, Trigger, SubList } from './collapsible-nav-item.styled';

export const ToggleLink = ({ type: Component, ...otherProps }) => {
  const dispatch = useDispatch();
  return <Component onClick={() => dispatch(setIsSideNavOpen(false))} {...otherProps} />;
};

function CollapsibleNavItem({ heading, to, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavItem>
      <Trigger>
        <ToggleLink type={NavLink} to={to} exact>
          {heading}
        </ToggleLink>
        <ion-icon
          onClick={() => setIsOpen(!isOpen)}
          name={`chevron-${isOpen ? 'up' : 'down'}-outline`}
        />
      </Trigger>
      <Collapse isOpened={isOpen}>
        <SubList>{children}</SubList>
      </Collapse>
    </NavItem>
  );
}

CollapsibleNavItem.propTypes = {
  heading: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsibleNavItem;
