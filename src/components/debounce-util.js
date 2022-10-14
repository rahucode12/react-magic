import React from 'react'

export default function DebounceUtil() {
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
        <>
            <input type='search' placeholder='search' onChange={debounce(handleChange, 500)} />
            <div>{'You searched ' + url}</div>
        </>
    );
}
