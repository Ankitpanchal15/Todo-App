import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ListItemAction = (props) => {

    const itemDelete = () => {
        props.onDelete(props.id);
    }
    const itemEdit = () => {
        props.onEdit(props.id);
    }

    return(
        <>
            <div className="action-grp">
            <Tooltip title="Set Task Status">
            <FormControlLabel style={{margin:'0'}} defaultChecked onChange={props.pass}   size="small" 
            control={<Switch color="primary" />}
            />
            </Tooltip>
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
            </div>
        </>
    )
}

export default ListItemAction;