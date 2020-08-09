import React from 'react'
import useFirestore from '../hooks/useFirestore';

const ImgGrid = ({ setSelectedImage }) => {
    const { docs } = useFirestore('images');
    return (
        <div className="img-grid">
            {
                docs && docs.map((doc) => (
                    <div className="img-wrap" key={doc.id}
                        onClick={() => setSelectedImage(doc.url) }>
                        <img src={doc.url} alt="firebase-img"/>
                    </div>
                ))
            }
        </div>
    )
}

export default ImgGrid;
