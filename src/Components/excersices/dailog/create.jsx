import React, { Component } from 'react'
import {Button} from '@material-ui/core'
import {Dialog, DialogActions, Fab,DialogContent , DialogContentText , DialogTitle} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

export default class CreateDialog extends Component {
    state = {
     
        open:false
    }
    handleToggle = () =>{
       
       // console.log('hello') 
        this.setState({
        open:true
        

    })
}
    handleClose = () =>{
        console.log('hello') 
        this.setState({
        open:false
        
    })
    }
    render() {
     let {open} = this.state
        return (
            <React.Fragment>

            <Fab onClick={this.handleToggle}>
                    <AddIcon />
            </Fab>    
            <Dialog open={open}
             //onClick={this.handleToggle}
             onClose={this.handleToggle}
              >
                    <DialogTitle  id="form-dialog-title">Create</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                       please fill information
                      </DialogContentText>
                      <form>

                      </form>
                      
                    </DialogContent>
                    <DialogActions>
                     
                      <Button onClick={this.handleClose} color="secondary" variant="raised">
                        Create
                      </Button>
                    </DialogActions>
                  </Dialog>
            </React.Fragment>
            )
    }
}

