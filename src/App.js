import React from 'react';
import InputForm from './Components/Form/inputForm'
// import {Header , Footer} from './Components/layout/index'
// import Excises from './Components/excersices/index';
// import {muscles , excises} from './Components/store'
import { makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import SwipeableTextMobileStepper from './Components/stteper/steper'
//import Main from './main'
import Main from './main.jpg'
//import Slider from './Components/slider/slider';
import { Slider } from './Components/slider/slider';

const useStyles = makeStyles(theme => ({
   // paperContainer: {
   //    alignItems: 'center',
   //    height: 720,

   //    overflow: 'hidden',
   //    backgroundSize: 'cover',
   //    backgroundPosition: 'center',
   //    backgroundImage: `url(https://images3.alphacoders.com/853/thumb-1920-85305.jpg)`,
   //    backgroundRepeat: "no-repeat",

   // },
   // div: {
   //    color: "yellow",
   //    display: "flex",
   //    flexDirection: "column"
   // }


}))
// const Images = () => {

//    return <img src={Main}></img>
// }
// const Images1 = () =>{
//    return <img src={Image}></img>
// }

export default function App() {
   const classes = useStyles()
   const theme = useTheme();
   return (
      // <div className={classes.paperContainer}>
      <div>
            <h2>Slider Examples</h2>
                            <br />
         <SwipeableTextMobileStepper />                   
         {/* <Slider />   */}
         {/* <Slider  /> */}
         {/* <Images /> */}
         {/* <Images1 /> */}
         {/* <div className={classes.div}>
             <div>
               hello 
             </div>
             <div>
               worlds
             </div>
          </div> */}
         {/* <InputForm /> */}

      </div>
   )
}

// class App extends React.Component {

//    // state = {
//    //    excises,
//    //    exercise:{}

//    // }

//    // getExcises =() =>{
//    //  return Object.entries( this.state.excises.reduce((exercises ,exercise ) =>{
//    //       const {muscles} = exercise

//    //       exercises[muscles] = exercises[muscles]
//    //       ? [...exercises[muscles] , exercise]
//    //       :[exercise]
//    //       return exercises
//    //    } , {})
//    //    )
//    // }
//    // handleCategorySelected = (category) =>{
//    //    this.setState({
//    //       category
//    //    })
//    // }
//    // handleExerciseSelected = id =>{
//    //    this.setState(({excises}) =>({
//    //       exercise:excises.find(x => x.id === id)
//    //    }))
//    // }
//    // handleExerciseDelete = id =>{
//    //    this.setState(({ exercise }) => ({
//    //       exercise:exercise.filter(ex => ex.id !== id)
//    //    }))
//    // }

//    render() {
//       //console.log('Excises', this.getExcises())
//       // const exercises1 = this.getExcises(); 
//       // let {category ,exercise } = this.state
//       const classes = useStyles()
//       return (
//          <div className={classes.paperContainer}>

//             <br />
//           <InputForm />

//          </div>
//          // <React.Fragment>
//          //    <Header />
//          //    <Excises
//          //    exercise={exercise}
//          //    category={category}
//          //    onSelect={this.handleExerciseSelected}
//          //    exercises = {exercises1}
//          //    onDelete={this.handleExerciseDelete}
//          //    />
//          //    <Footer
//          //    category={category}
//          //    muscles={muscles}
//          //    onSelect={this.handleCategorySelected}
//          //    />
//          // </React.Fragment>
//       );
//    }
// }
// export default App;