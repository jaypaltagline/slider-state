import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
//import { autoPlay } from 'react-swipeable-views-utils';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        Questions: "what is your name ?",
        option1: 'jaypal',
        option2: 'hiren',
        option3: 'dhaval',
        option4: 'Yash',
        answers: 'yash'

    },
    {
        Questions: "how much your age",
        option1: '15',
        option2: '20',
        option3: '30',
        option4: '40',
        answers: '30'
    },
    {
        Questions: "what is your hometown name ?",
        option1: 'bhavanagr',
        option2: 'Amroli',
        option3: 'surat',
        option4: 'mumbai',
        answers: 'surat'
    },
    {
        Questions: "your fav. movie name",
        option1: '3 idiot',
        option2: 'chichore',
        option3: 'Dhoom',
        option4: 'Man',
        answers: '3 idiot'
    },
    {
        Questions: "your fav. song",
        option1: 'lift karade',
        option2: 'sajan',
        option3: 'hey garami',
        option4: 'dil to pagal he',
        answers: 'sajan'
    },
    {
        Questions: "your best_friends name",
        option1: 'yash',
        option2: 'dhaval',
        option3: 'mohit',
        option4: 'prem',
        answers: 'dhaval'
    },
    {
        Questions: "which city you prefer for living",
        option1: 'surat',
        option2: 'manali',
        option3: 'pune',
        option4: 'chennai',
        answers: 'manali'
    },
    {
        Questions: "what is your strength",
        option1: 'family',
        option2: 'frinds',
        option3: 'gardians',
        option4: 'self',
        answers: 'self'
    },
    {
        Questions: "what is your shoes number",
        option1: '8',
        option2: '6',
        option3: '9',
        option4: '7',
        answers: '9'
    },
    {
        Questions: "what is your teacher name",
        option1: 'dhaval',
        option2: 'hitesh',
        option3: 'kamlendu sir',
        option4: 'satishbhai',
        answers: 'kamlendu sir'
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    let [value, setValue] = React.useState('hi');
    let [result, setResult] = React.useState([{}])
    let [flag , setFlag] = React.useState(false)
    const maxSteps = tutorialSteps.length;
    //  console.log('value', value)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const flags = () =>{
        setFlag(true)
    }
   const userResult = () => {
        let row=result.length;
        let userTable=[];

        //create row
            for(let i=0;i<row;i++){
                let child=[];
                let que,ans;
                //set que and ans 
                result.map((item,index) => {
                    if(i==index){
                       que = item.Questions;
                        ans = item.ans;
                    }
                });
                //create column
                for(let j=0;j<2;j++){
                    child.push(<td>{que}</td>)
                    child.push(<td>{ans}</td>)
                    break;
                }
                userTable.push(<tr>{child}</tr>)
            }
            return userTable;
    }

   const result1 = () =>{
        // e.preventDefault();
        let row=tutorialSteps.length;
        let table=[];
       
        //create row
            for(let i=0;i<row;i++){
                let child=[];
                let que,ans;
                //set que and ans 
                tutorialSteps.map((item,index) => {
                    if(i==index){
                       que = item.Questions;
                        ans = item.answers;
                    }
                });
                //create column
                for(let j=0;j<2;j++){
                    child.push(<td>{que}</td>)
                    child.push(<td>{ans}</td>)
                    break;
                }
                table.push(<tr>{child}</tr>)
            }
            
            return table;
    }

    const handleChange = (event) => {
        // console.log('hellow method call')
        //  let ind = this.state.currentIndex
        let Q = tutorialSteps[activeStep].Questions
        let ans = { Questions: Q, ans: event.target.value }
        //console.log('ans', ans)
        let r = result
        r.push(ans)
        setResult(r)
        // console.log('value', r)
        //  // this.setState({ value: value });
        let data = event.target.value
        //  console.log('data', data)
        setValue(data);

    };

    return (
        <div className={classes.root}>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >

                {tutorialSteps.map((step, index) => (
                    <div key={step.Questions}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend"> <Typography variant="h6">{tutorialSteps[activeStep].Questions}</Typography></FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(event) => handleChange(event)}>
                                <FormControlLabel value={tutorialSteps[activeStep].option1} control={<Radio />} label={tutorialSteps[activeStep].option1} />
                                <FormControlLabel value={tutorialSteps[activeStep].option2} control={<Radio />} label={tutorialSteps[activeStep].option2} />
                                <FormControlLabel value={tutorialSteps[activeStep].option3} control={<Radio />} label={tutorialSteps[activeStep].option3} />
                                <FormControlLabel value={tutorialSteps[activeStep].option4} control={<Radio />} label={tutorialSteps[activeStep].option4} />
                            </RadioGroup>
                        </FormControl>

                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                }
            />
            {
                
                activeStep === maxSteps - 1 ? <button onClick={flags}>Result</button> : ''
            }

<div>
                        <h2>Correct Answers</h2>
                        <table border="solid 2px">
                            <tr>
                                <th>Questions</th>
                                <th>Answer</th>
                            </tr>
                            {
                           flag === true ? result1() : ''
                            }
                        </table>
                        </div>    
                           <div style={{alignItems:'center'}}>
                           <h2>User Answers</h2>
                            <table border="solid 2px">
                                
                                <tr>
                                    <td>Questions</td>
                                    <td>Answer</td>
                                </tr>
                                {
                               flag === true ? userResult() : ''
                                }
                            </table>
                    
                      
                        </div>

        </div>
    );
}

export default SwipeableTextMobileStepper;