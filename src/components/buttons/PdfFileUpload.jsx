import React, { useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";


const PdfFileUpload = ({
    handleFileChange,
    error,
    selectedPdfFile,
    setSelectedPdfFile }) => {

    useEffect(() => {
        return () => {
            setSelectedPdfFile(null);
        }
    }, []);

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
