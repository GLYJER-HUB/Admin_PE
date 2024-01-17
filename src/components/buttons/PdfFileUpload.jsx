import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import useFileStore from "../../store/fileStore";

const ALLOWED_FILE_TYPES = ["application/pdf"];

const PdfFileUpload = () => {
    const { selectedPdfFile, setError, error, setSelectedPdfFile, resetError } = useFileStore();

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!ALLOWED_FILE_TYPES.includes(file?.type)) {
            setError("Type de fichier non valide. Veuillez téléverser un fichier au format PDF.");
            return;
        }

        resetError();
        setSelectedPdfFile(file);
    };

    return (
        <Box p={3} border="1px dashed #ccc" borderRadius={8} textAlign="center">
            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="pdf-file-input"
            />
            <label htmlFor="pdf-file-input">
                <Button variant="outlined" component="span">
                    Sélectionner un PDF
                </Button>
            </label>
            {selectedPdfFile && (
                <Box>
                    <Typography variant="subtitle1" mt={2}>
                        PDF sélectionné: {selectedPdfFile.name}
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

export default PdfFileUpload;
