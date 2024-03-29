import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DialogTitle, Dialog, Typography, IconButton } from '@material-ui/core'
import ExploreIcon from '@material-ui/icons/Language'

const styles = theme => ({
    contact: {
        display: 'flex',
        flexFlow: 'row nowrap',
        padding: 30,
    },
    navBox: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent:'center',
        alignItems: 'center',
    },
    navText: {
        marginBottom: 10,
    },
    largeButton: {
        width: '25%',
        height: '25%',
        minWidth: '200px',
        minHeight: '200px',
    },
    icon: {
        height: '100%',
        width: '100%',
    }
})

class ContactModal extends React.Component {

    render() {

        const { classes, onClose, open } = this.props

        return (
            <Dialog open={open} onClose={onClose} maxWidth='lg' aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">Make a Reservation</DialogTitle>
                <div className={classes.contact}>
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="primary" className={classes.navText}>
                            AirBnB
                        </Typography>
                        <IconButton variant='outlined' className={classes.largeButton} color="primary">
                            <ExploreIcon className={classes.icon} color="primary" />
                        </IconButton>
                    </div>
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="primary" className={classes.navText}>
                            Homeaway
                        </Typography>
                        <IconButton variant='outlined' className={classes.largeButton} color="primary">
                            <ExploreIcon className={classes.icon} color="primary" />
                        </IconButton>
                    </div>
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="primary" className={classes.navText}>
                            VRBO
                        </Typography>
                        <IconButton variant='outlined' className={classes.largeButton} color="primary">
                            <ExploreIcon className={classes.icon} color="primary" />
                        </IconButton>
                    </div>
                    <div className={classes.navBox}>
                        <Typography variant="h3" color="secondary" className={classes.navText}>
                            Documents
                        </Typography>
                        <IconButton variant='outlined' className={classes.largeButton} color="secondary">
                            <ExploreIcon className={classes.icon} color="secondary" />
                        </IconButton>
                    </div>
                </div>
            </Dialog>
        );
    }
}

ContactModal.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default withStyles(styles)(ContactModal);