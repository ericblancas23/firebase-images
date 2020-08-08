import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const types = [
        'image/png',
        'image/jpeg',
    ]

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('Please Continue');
        } else {
            setFile(null);
            setError('please select image file');
        }
      };

    return (
        <form>
            <input onChange={changeHandler} type="file"/>
            <div>
                {
                    error && (
                        <div className="error">
                            { error }
                        </div>
                    )
                }
                {
                    file && (
                        <div>
                            { file.name }
                        </div>
                    )
                }
                {
                    file && (
                        <ProgressBar file={file} setFile={setFile}/>
                    )
                }
            </div>
        </form>
    )
}

export default UploadForm;
