import React, {} from 'react';
import {} from 'universal-cookie';
import {} from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getData } from '../redux/reducers/users'

const Flex = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row' // flex-direction
    }}
    >
      <div style={{
        display: 'flex',
        height: '100vh',
        minWidth: '100px',
        flexDirection: 'column' // flex-direction
      }}
      >
        <div> row 1 </div>
        <div> row 2</div>
      </div>
      <div style={{
        display: 'flex',
        height: '100vh',
        minWidth: '600px',
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'column' // flex-direction
      }}
      >
        <div> Header </div>
        <div> Tweet Stream </div>
      </div>
      <div style={{
        height: 'fit-content',
        display: 'flex',
        minWidth: '100px',
      }}
      >
        3
        <br />
        3
        <br />
        3

      </div>
    </div>
  )
}

Flex.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Flex)
