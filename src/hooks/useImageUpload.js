import React, { useState } from 'react';

// Custom hook for handling image selection
const useImageUpload = () => {
    const [image, setImage] = useState(null);

    // Function to handle file input change
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Set the state with the selected image
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Function to reset the image
    const resetImage = () => {
        setImage(null);
    };

    // Function to get the base64 string of the selected image
    const getImageDataString = () => {
        return image ? image.toString() : null;
    };

    return { image, handleFileInputChange, resetImage, getImageDataString };
};

export default useImageUpload
