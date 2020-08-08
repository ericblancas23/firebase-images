import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ setFile, file }) => {
    const { url, progress } = useStorage(file);
    useEffect(() => {
        if(url !== null) {
            setFile(null);
        }
    }, [url,setFile])
    console.log(progress);
    return (
        <div className="progress-bar" style={{ width: progress + '%' }}>     
        </div>
    )
}

export default ProgressBar
