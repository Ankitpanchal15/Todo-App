import React from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

const ListItemAction = (props) => {

    const itemDelete = () => {
        props.onDelete(props.id);
    }
    const itemEdit = () => {
        props.onEdit(props.id);
    }

    return(
        <>
            <ListItemSecondaryAction>
            <Tooltip title="Edit">
            <IconButton className="edit" onClick={itemEdit} edge="end" aria-label="Edit">
            <EditIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
            <IconButton className="delete"  onClick={itemDelete}  aria-label="delete">
            <DeleteIcon />
            </IconButton>
            </Tooltip>
            </ListItemSecondaryAction> 
        </>
    )
}

export default ListItemAction;