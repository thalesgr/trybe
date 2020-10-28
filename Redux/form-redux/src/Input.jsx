import React from 'react'

class Input extends React.Component {
    render() {
        const {name, type, onChange} = this.props
        return (
        <label>
            {name + ': '}
            <input name={name} type={type} onChange={onChange}/>
        </label>
            )
    }
}

export default Input