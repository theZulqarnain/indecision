// // console.log('this is from app.js');

// var app ={
//     title:"Indecesion App",
//     subtitle:"this is my sub-title",
//     options:[]
// }

// const onFormSubmit= (e) => {

//     e.preventDefault();
//     const option = e.target.elements.option.value;

//     if(option){
//         app.options.push(option);
//         e.target.elements.option.value = '';
//     }
//     render();
// }

// const removeList = () => {
//     app.options = [];
//     render();
// }

// const onMakeDecision = () =>{
//     const randomNum = Math.floor(Math.random()* app.options.length);
//     const option = app.options[randomNum];
//     alert(option)
// } 


// var appRoot = document.getElementById('app');


// const render=()=>{
//     var template = (
//         <div>
//             <h1>{app.title}</h1>
//             <p>{app.subtitle}</p>
//             <p>{app.options.length >0 ? 'Here are you options' : 'No options'}</p>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I Do</button>
//             <button onClick={removeList}>Wipe List</button>
//             <ol>
//                 {
//                     app.options.map( (option) =>{
//                     return <li key={option}>{option}</li>
//                 })
//                 }
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option" />
//                 <button>Add options</button>
//             </form>
            
//         </div>
//     )
//     ReactDOM.render(template,appRoot);
// }

// render();

// // var templateTwo = 
// // (
// //     <div>
// //         <h1>Abduall Zulqarnain</h1>
// //         <p>Age:22</p>
// //         <p>Location:Hyderabad</p>   
        
// //     </div>
          
// // );



// // let count =0;
// // const addOne =() => {
// //     count++;
// //     renderCounterApp();
// // }

// // const minusOne =() =>{
// //     count--
// //     renderCounterApp();
// // }

// // const reset=()=>{
// //     count=0
// //     renderCounterApp();
// // }

// // var appRoot = document.getElementById('app');

// // const renderCounterApp = () =>{
// //     const templateTwo = (
// //         <div>
// //             <h1>count: {count}</h1>
// //             <button onClick={addOne}>+1</button>
// //             <button onClick={minusOne}>-1</button>
// //             <button onClick={reset}>reset</button>
// //         </div>
// //     )
// //     ReactDOM.render(templateTwo,appRoot);
// // }

// // renderCounterApp();

class IndecesionApp extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(()=>({options}))
            }
        } catch (e) {
            //Do Nothing
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    handleDeleteOptions(){
        this.setState(() => ({ options: []}))
    }
    handleAddOption(option){
        if(!option){
            return "Enter Valid Value to add item";
        } else if (this.state.options.indexOf(option) !==  -1 ) {
            return "This option already Exist!"
        }
        // this.setState((prevState)=>{
        //     return{
        //         options:prevState.options.concat(option)
        //     }
        // })
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
    }
    handleDeleteOption(optionToRemove) { 
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }) )
    }
    render(){
        const subtitle= 'put your life hands of computer';
        return(
            <div>
                <Header subtitle={subtitle} />
                <Action 
                hasOptions={this.state.options.length > 0}
                pickAction={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
               
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
 
const Header = (props) => {
    return (
        <div>
            
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision'
}
const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.pickAction}>What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Romve All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => 
                <Option 
                key={option} 
                OptionText={option} 
                handleDeleteOption={props.handleDeleteOption}
                />)
            }

        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.OptionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.OptionText);
                }}
                >
                remove
                </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state ={
            error:null        
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error =this.props.handleAddOption(option);
        this.setState(() => ({ error }))

        if(!error){
            e.target.elements.option.value =''
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
                
            </div>
        )
    }
}


 ReactDOM.render(<IndecesionApp />,document.getElementById('app'));

