import React from "react";
import { useState } from "react";
import {
    TextField,
    Stack,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    InputAdornment,
} from "@mui/material";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { colors } from "../utilities/colors";
import { changePassword } from "../services/userService";
import useModalAlertStore from "../store/modalAlertStore";
import ModalAlert from "./ModalAlert";
import useAlertStore from "../store/alertStore";
import useChangePasswordStore from "../store/changePasswordStore";

const ChangePasswordModal = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { setModalAlert } = useModalAlertStore();
    const { setAlert } = useAlertStore();
    const { isOpen, closeModal } = useChangePasswordStore();

    const handleCurrentPasswordChange = (event) => {
        setCurrentPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleClose = () => {
        setCurrentPassword('');
        setNewPassword('');
        closeModal();
    };

    const handleChangePassword = async () => {
        const response = await changePassword(currentPassword, newPassword);
        const responseData = await response.json();

        if (response.ok) {
            setAlert(responseData.message, 'success');
            handleClose();
        }
        else {
            setModalAlert(responseData.message, 'error');
        }
    };

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>
                    Changer Mot De Passe
                </DialogTitle>
                <ModalAlert />
                <DialogContent>
                    <Stack direction="row" gap={3}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="currentPassword"
                            label="Mot de passe actuel"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
                            value={currentPassword}
                            onChange={handleCurrentPasswordChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="motDePasse"
                            label="Nouveau mot de passe"
                            variant="outlined"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            InputLabelProps={{ shrink: true }}
                            sx={{ mt: 2, borderColor: colors.green, borderRadius: "8px" }}
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOffIcon />
                                            ) : (
                                                <VisibilityIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        sx={{
                            mr: 2,
                            borderRadius: "8px",
                            backgroundColor: colors.green,
                            color: "white:hover",
                        }}
                        onClick={handleChangePassword}
                    >
                        Changer
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "8px",
                            backgroundColor: colors.red,
                            color: "white",
                        }}
                        onClick={handleClose}
                    >
                        Annuler
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ChangePasswordModal;
