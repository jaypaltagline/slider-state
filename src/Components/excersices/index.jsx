import React, { Fragment } from "react";
import { Grid, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { Delete } from '@material-ui/icons';
// import RightPane from './rightPane'
// import LeftPane from './leftPane'
const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}
export default ({ exercises,onDelete ,category, onSelect, exercise: { id, title = 'Welcome', description = 'please select to category from left panel.' } }) =>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper}>
                {
                    exercises.map(([group, exercises]) =>
                        !category || category === group ?
                            <Fragment>
                                <Typography variant="headline" gutterBottom>
                                    {group}
                                    <br />
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) =>
                                        <ListItem button
                                            key={id}
                                            onClick={() => onSelect(id)}
                                        >

                                            <ListItemText primary={title} />
                                           <ListItemSecondaryAction>
                                               <IconButton onClick={() => onDelete(id)}>
                                                    <Delete />
                                               </IconButton>
                                               
                                               </ListItemSecondaryAction> 

                                        </ListItem>
                                    )}
                                </List>

                            </Fragment>
                            : null

                    )
                }

            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper}>

                <Typography variant="h4">
                    {title}
                    <br />
                    <br />
                </Typography>
                <Typography
                    variant="subheading"
                >
                    {description}
                </Typography>

            </Paper>
        </Grid>
    </Grid>

