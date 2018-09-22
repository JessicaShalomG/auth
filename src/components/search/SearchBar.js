import React from "react";


class SearchBar extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              value: ''};

            // this.handleChange = this.handleChange.bind(this);
            // this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
            this.setState({value: event.target.value});
        }
        // handleSubmit(event) {
        //     // alert('A name was submitted: ' + this.state.value);
        //     event.preventDefault();
        // }
        render() {
            return (
            <div>

      <button onClick={this.props.handleSubmitClothes} data-type="bold"><span >Ropa</span></button>

      <button onClick={this.props.handleSubmitToys} data-type="italic"><span>Juguetes</span></button>

      <button onClick={this.props.handleSubmitBeds} data-type="justifyLeft"><span>Camitas</span></button>

      <button onClick={this.props.handleSubmitAccesories} data-type="justifyCenter"><span>Accesorios</span></button>

            </div>
            );
        }
    }
export default SearchBar;
