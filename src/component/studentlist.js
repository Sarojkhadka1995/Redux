import React, { Component } from 'react';


import { connect } from 'react-redux';

class studentlist extends Component{
    render(){
        return(
            <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          </thead>

          <tbody>
            {
              this.props.list.map(st => {
                return <tr key={st.id}>
                <td>{st.id}</td>
                <td>{st.name}</td>
                <td>{st.age}</td>
              </tr>
              })
            }
          </tbody>
        </table>
        )
    }
}

function mapStateToProps(store) {
    return {
      list: store.students
    }
  }

export default connect(mapStateToProps)(studentlist);