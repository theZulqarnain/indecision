class Visibility extends React.Component {
    
    constructor(props){
        super(props)
        
        this.handleToggleVisibility =this.handleToggleVisibility.bind(this)
        this.state = {
            Visibility : false
        }

    }

    handleToggleVisibility() {
        this.setState((PrevState)=>{
            return{
                Visibility : !PrevState.Visibility
            }
        })
    }

    render(){
        return(
            <div>
               <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.Visibility ? 'hide details' : "show details"}</button>
            {
            this.state.Visibility && (
                <div>
                    <p> hey these are some Details!</p>
                </div>
            )
            } 
            </div>
        )
    }
}
ReactDOM.render(<Visibility />,document.getElementById('app'))

// var check = 0;
// let Visibility =false;
// const ToggleVisibility = () => {
//     Visibility = !Visibility;
//     render()
// }
// const ClickToggle =() =>{
//     console.log('Toggle');
//     if(check === 1){
//         check = 0;
//          ''
//     }else{
//         check =1;
//          <p>this is text</p>;
//     }
//     render();
// }
// var appRoot = document.getElementById('app');

// const render = () => {
//     var template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={ToggleVisibility}>{Visibility ? 'hide details' : "show details"}</button>
//         {Visibility && (
//                 <div>
//                     <p> hey these are some Details!</p>
//                 </div>
//             )
//         }
//         </div>
        
//     )

//     ReactDOM.render(template,appRoot);
// }

// render();