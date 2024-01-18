import React, { useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";


const ImageFileUpload = ({
    handleFileChange,
    error,
    selectedImageFile, setSelectedImageFile }) => {

    useEffect(() => {
        return () => {
            setSelectedImageFile(null);
        }
    }, []);

    return (
        <Box p={3} border="1px dashed #ccc" borderRadius={8} textAlign="center">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="image-file-input"
            />
            <label htmlFor="image-file-input">
                <Button variant="outlined" component="span">
                    Sélectionner une image
                </Button>
            </label>
            {selectedImageFile && (
                <Box>
                    <Typography variant="subtitle1" mt={2}>
                        Image sélectionnée: {selectedImageFile.name}
                    </Typography>
                </Box>
            )}
            {error && (
                <Typography variant="body2" color="error" mt={2}>
                    {error}
                </Typography>
            )}
        </Box>
    );
};

export default ImageFileUpload;
