import React from 'react';

class UserItem extends React.Component {

    render() {
        const {id, name, email, isGoldClient, salary, image, removeUser} = this.props;

        return (
            <div className="media pt-3">
                {
                    image ?
                        <img src={image} style={{width: '80px', height: '80px'}} alt={name} className="mr-3"/>
                        :
                        <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32"
                             className="mr-2 rounded"
                             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170fd647b80%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170fd647b80%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.0390625%22%20y%3D%2217.2%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                             data-holder-rendered="true" style={{width: '32px', height: '32px'}}/>

                }
                <div className="media-body pb-3 mb-0  lh-125 border-bottom border-gray">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <strong>{name}</strong>
                        <input type="button" className="btn btn-link"
                               onClick={(userId) => removeUser(id)}
                               value="Delete"/>
                    </div>
                    <span className="d-block">{email}</span>
                    <span className="d-block">  {isGoldClient
                        ? <span>Gold Client</span>
                        : null
                    }</span>
                    <span className="d-block">{salary}</span>
                </div>
            </div>
        );
    }
}

export default UserItem;