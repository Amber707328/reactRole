import React from 'react';

class UserManger extends React.Component {
    render() {
        return (
            <div>
                <h2>用户管理</h2>
                {this.props.children}
            </div>
        )
    }
}

export {UserManger as default}