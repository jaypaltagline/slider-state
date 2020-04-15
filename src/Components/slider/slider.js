import React from 'react';
import './slider.scss';
import './style.css';
import Radio from '@material-ui/core/Radio';
import Slide from '@material-ui/core/Slide';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";


let slides = [
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

// export function slider1() {
//     let theme = useTheme()
//     console.log('theme', theme)
//     return (
//         <div>
//     hello            
//         </div>
//     )
// }


export class Slider extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0,
            length: slides.length,
            value: '',
            result: [{}],
            flag:false,
        }
    }


    next = (e) => {
        e.preventDefault()
        if (this.state.currentIndex === 9) {
            alert('next quetion not availabel')
        } else {
                   this.setState({ currentIndex: this.state.currentIndex + 1 })
        }
    }
    
    prev = (e) => {
        e.preventDefault()
        if (this.state.currentIndex > 0) {
            this.setState({ currentIndex: this.state.currentIndex - 1 })
        }
        else {
            alert("no page available")
        }
    }
    flags = () =>{
        this.setState({flag:true})
    }


    userResult = () => {
        let row=this.state.result.length;
        let userTable=[];

        //create row
            for(let i=0;i<row;i++){
                let child=[];
                let que,ans;
                //set que and ans 
                this.state.result.map((item,index) => {
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

    result = () =>{
        // e.preventDefault();
        let row=slides.length;
        let table=[];
       
        //create row
            for(let i=0;i<row;i++){
                let child=[];
                let que,ans;
                //set que and ans 
                slides.map((item,index) => {
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
            this.setState(

            )
            return table;
    }
    handleChange = (event) => {
       // console.log('hellow method call')
        let ind = this.state.currentIndex
        let ans = { Questions: slides[ind].Questions, ans: event.target.value }
        // console.log('ans', ans)
        let value = this.state.result
        value.push(ans)
        this.setState({ result: value })
       // console.log('value', value)
        // this.setState({ value: value });
        this.setState({ value: event.target.value })

    };


    render() {
        const { flag } = this.state
        // console.log('this.state.value', this.state.value)
        let res = this.state.result
       // console.log('object', res)
        let that = this
        let slideNodes = slides.map((slide, index) => {
            return (
                <div key={index} className="h1">
                    {/* <Slide
                        direction='left'
                        in="bool"
                        timeout="2000"
                    > */}
                      <SwipeableViews 
        axis={useTheme.direction === "rtl" ? "x-reverse" : "x"}
                        >
                    <Slidess 
                        Questions={slide.Questions}
                        option1={slide.option1}
                        option2={slide.option2}
                        option3={slide.option3}
                        option4={slide.option4}
                        answers={slide.answers}
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.value}
                    />
                    {/* </Slide> */}
                    </SwipeableViews>


                </div>
            )
        });
        return (
          
            <div>
                
                <div className="slideShow">
                    <button className="previous" onClick={this.prev}>prev</button>
                    <div className="slider">
                        {slideNodes[this.state.currentIndex]}
                    </div>
                    <button className="next" onClick={this.next}>
                        {
                            this.state.currentIndex === 9 ? 'finish' : 'next'
                        }
                    </button>
                </div>
                <div>
                    <center>
                        {
                            this.state.currentIndex === 9 ?
                        <button onClick={this.flags}>Result</button> : ''
                        }
                    </center>    
                        <div>
                        <h2>Correct Answers</h2>
                        <table border="solid 2px">
                            <tr>
                                <th>Questions</th>
                                <th>Answer</th>
                            </tr>
                            {
                            this.state.flag === true ? this.result() : ''
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
                               this.state.flag === true ? this.userResult() : ''
                                }
                            </table>
                    
                      
                        </div>
                    
                </div>
            </div>
        );
    }
};
export class Slidess extends React.Component {
    render() {
        return (
            <div>
                <p className='p'> {this.props.Questions} </p>
                <FormControl  component="fieldset">
                    <FormLabel component="legend">Select answers</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.props.value} onChange={this.props.onChange}>
                        <FormControlLabel value={this.props.option1} control={<Radio />} label={this.props.option1} />
                        <FormControlLabel value={this.props.option2} control={<Radio />} label={this.props.option2} />
                        <FormControlLabel value={this.props.option3} control={<Radio />} label={this.props.option3} />
                        <FormControlLabel value={this.props.option4} control={<Radio />} label={this.props.option4} />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
};
