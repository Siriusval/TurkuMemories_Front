import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSnackbarContext } from '../contexts/SnackbarContext';
import { apis } from '../services/apis';

interface IDeleteMemoryDialog {
    memoryId: number;
    handleDeleteMemory(): void;
}
const DeleteMemoryDialog: React.FC<IDeleteMemoryDialog> = ({
    memoryId,
    handleDeleteMemory,
}) => {
    const snackbarContext = useSnackbarContext();

    const [open, setOpen] = React.useState(false);
    const [confirmMessage, setConfirmMessage] = React.useState<string>('');

    const handleConfirmMessageChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setConfirmMessage(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        if (confirmMessage === 'Yes') {
            handleDeleteMemory();

            handleClose();
        } else {
            snackbarContext.displayWarningSnackbar(
                'Please enter "Yes" to confirm',
            );
        }
    };

    return (
        <div>
            <Button size="small" color="secondary" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Delete Memory</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure that you want to delete your memory ?<br />
                        Type "Yes" to confirm.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="confirm"
                        label="Confirm"
                        type="text"
                        fullWidth
                        onChange={handleConfirmMessageChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteMemoryDialog;
