import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

render(){
    return(
        <div>
            <form className='meme-form'>
                <input 
                    type='text'
                    name='topText'
                    placeholder='top text'
                    value={this.state.topText}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='bottomText'
                    placeholder='bottom text'
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                />
                <button>Gen</button>
            </form>
        </div>
    );
}

}

export default MemeGenerator;