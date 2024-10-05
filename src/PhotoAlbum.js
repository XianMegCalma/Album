// src/PhotoAlbum.js

import React, { useState } from 'react';

const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([]);
  const [photoUrl, setPhotoUrl] = useState('');

  const handleInputChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const handleAddPhoto = () => {
    if (photoUrl) {
      setPhotos([...photos, photoUrl]);
      setPhotoUrl('');
    }
  };

  const handleRemovePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Anniversary Photo Album</h1>
      <input
        type="text"
        placeholder="Enter photo URL"
        value={photoUrl}
        onChange={handleInputChange}
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button onClick={handleAddPhoto} style={{ padding: '10px' }}>
        Add Photo
      </button>

      <div style={{ marginTop: '20px' }}>
        {photos.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {photos.map((photo, index) => (
              <div key={index} style={{ margin: '10px', position: 'relative' }}>
                <img src={photo} alt={`Photo ${index}`} style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                <button 
                  onClick={() => handleRemovePhoto(index)} 
                  style={{ 
                    position: 'absolute', 
                    top: '5px', 
                    right: '5px', 
                    backgroundColor: 'red', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No photos added yet!</p>
        )}
      </div>
    </div>
  );
};

export default PhotoAlbum;
