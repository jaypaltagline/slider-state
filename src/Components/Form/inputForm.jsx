import { form } from '../store';
import React, { useState } from 'react';
import DynamicForm from '../Form/dynamicForm';
import { Grid, makeStyles, Button , Paper, Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

    grid:{
         textAlign:'center',
         alignItems: 'center',
         justifyContent: 'center'

    },
    textField:{
        padding: '0 500px',
        margin: theme.spacing(5, 0, 5),
        xs:12,
        
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    label: {
        textTransform: 'capitalize',
    },
    // Paper: {
    //     padding: 20,
    //     marginTop:100,
    //     marginBottom: 250,
    //     marginLeft:300,
    //     marginRight:300,
    //     overflowY: 'auto',
    //     color:'red',
    //     background:'skyblue',
    //     border:'solid 20px',
    //     textAlign:'center',
    //      alignItems: 'center',
    //      justifyContent: 'center'
    // },
    // divTag:{
    //     background:'black'
    // }


}))

export default function InputForm() {
    const classes = useStyles()

    const [forms, setForms] = useState(form)

    const handleChange = (e) => {
        const { name, value } = e.target
        let formClone = { ...forms }
        formClone[name].value = value
        setForms(formClone);

    }
    const formData = Object.values(forms).map(({ type, value }, index) => {
        const name = Object.keys(forms)[index]
        return <div><label className={classes.label}>{name}:</label>
            <br />
            <DynamicForm key={name}  className={classes.textField}>
                {/* label=`enter ${name}` */}
            value={value}
            type={type}
            onChange={(e) => handleChange(e)}
           
                <br />
            </DynamicForm>
        </div>

    })
    return (
        <React.Fragment>
            <Container maxWidth='xs'>
                <Grid container spacing={0} >
            <Grid item xs={12}  className={classes.grid}>
            <Paper className={classes.Paper} item xs={12} >
            <h2>
            Registration Form

          </h2>
          <br />    
            {formData}
            <br />
            <Button className={classes.button} >Submit</Button>

            </Paper>
            </Grid>
            </Grid>
            </Container>
           
        </React.Fragment>
    )
}

