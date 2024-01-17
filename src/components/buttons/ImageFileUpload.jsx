import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import useFileStore from "../../store/fileStore";

const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"];

const ImageFileUpload = () => {
    const { selectedImageFile, error, setError, setSelectedImageFile, resetError } = useFileStore();

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!ALLOWED_FILE_TYPES.includes(file?.type)) {
            setError("Type de fichier non valide. Veuillez téléverser une image au format JPEG ou PNG.");
            return;
        }

        resetError();
        setSelectedImageFile(file);
    };

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
