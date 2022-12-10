import { 
    Button,  
    Dialog, 
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions 
} from '@mui/material';

interface DialogProps {
    dialogOpen: boolean,
    handleClose: () => void,
    spanText: string,
    title: string,
    message: string,
    showConfirm: boolean,
    actionMessageText: string,
    confirm?: () => void,
    confirmActionMessage?: string
}

const MessageDialog = ({
    dialogOpen, 
    handleClose, 
    spanText, 
    title, 
    message, 
    showConfirm,
    actionMessageText,
    confirm,
    confirmActionMessage
}: DialogProps) => {
    return (
        <Dialog
            open={dialogOpen}
            onClose={handleClose}
            style={{padding: '20px'}}
        >
            <DialogTitle style={{textAlign: 'center'}}>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                    <span style={{color: '#2E7D32'}}> {spanText} </span>
                </DialogContentText>
            </DialogContent>
            <DialogActions style={{padding: '0 15px 15px'}}>
                {
                    showConfirm && <Button color="success" onClick={confirm}>{confirmActionMessage}</Button>
                }
                <Button color="success" onClick={handleClose}>{actionMessageText}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default MessageDialog;