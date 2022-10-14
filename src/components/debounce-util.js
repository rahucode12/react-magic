import React from 'react'

export default function DebounceUtil({...props}) {
    const [url, setUrl] = React.useState('')
    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target
        setUrl(value)
        console.log(' searching..')
    }

    const debounce = (handle, delay) => {
        let timer
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => handle(...args), delay)
        }
    }

    return (
        <div {...props }>
            <input type='search' placeholder='search' onChange={debounce(handleChange, 500)} />
            <div>{'You searched this ' + url}</div>
        </div>
    );
}
