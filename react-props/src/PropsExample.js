import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const PropsExample = ({
  name,
  userId,
  handleDisableClick,
  roles,
  lastLogin,
  isActive,
}) => {
  return (
    <>
      <h1>User details</h1>
      <Card
        cardHeader={<Header title={name} />}
        cardBody={
          <Content>
            <>
              <p>
                <strong>User Id</strong>: {userId}
              </p>
              <p>
                <strong>Roles</strong>:
              </p>
              <ul>
                {roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
              <p>
                <strong>Last login</strong>:
              </p>
              <ul>
                <li>Date :{lastLogin.date}</li>
                <li>Location :{lastLogin.location}</li>
              </ul>
              <p>
                <strong>Status</strong>: {isActive ? 'Active' : 'Not active'}
              </p>
            </>
          </Content>
        }
        cardFooter={
          <Footer handleClick={handleDisableClick} buttonText="Disable User" />
        }
      />
    </>
  );
};

// add type checks here
PropsExample.propTypes = {
  name: PropTypes.string,
  userId: PropTypes.number,
  handleDisableClick: PropTypes.func,
  roles: PropTypes.array,
  lastLogin: PropTypes.object,
  isActive: PropTypes.bool,
};

export default PropsExample;
