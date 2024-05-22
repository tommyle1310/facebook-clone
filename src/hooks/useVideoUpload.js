import React, { useState } from 'react';

// Custom hook for handling video selection
const useVideoUpload = () => {
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to handle file input change
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (!file.type.startsWith('video/')) {
                setError('Please select a valid video file');
                return;
            }
            if (file.size > 50 * 1024 * 1024) { // Example size limit: 50MB
                setError('Video file size exceeds the limit of 50MB');
                return;
            }

            setLoading(true);
            setError(null); // Clear any previous errors

            setVideo(file); // Set the state with the selected video file
            setLoading(false);
        }
    };

    // Function to reset the video
    const resetVideo = () => {
        setVideo(null);
        setError(null); // Clear any errors
    };

    return { video, loading, error, handleFileInputChange, resetVideo };
};

export default useVideoUpload;
