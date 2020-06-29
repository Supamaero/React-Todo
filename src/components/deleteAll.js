import React from 'react'

class DeleteAll extends React.Component {

    render() {
        const{id, task} = this.props;
        return (
            <div className="last">
                <h2 className="options"> Your Options</h2>
                <button className="eraseStyle" onClick={this.props.delAll.bind(this, id)}> Erase all </button> {task} 
            </div>
        )
    }
}

export default DeleteAll;



