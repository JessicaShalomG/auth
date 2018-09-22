import axios from "axios";
import React from "react";



class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Item'};

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleUpload(event) {
    alert('gracias por usar Segunda Pata:' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <div className = "data">
      <form onSubmit={this.props.handleUpload}>
        <label className = "data">
        Categoria:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Clother">Clothes</option>
            <option value="Toys">Toys</option>
            <option value="Beds">Beds</option>
            <option value="Accessories">Accessories</option>
          </select>
      Descripcion:<input type="text" name="name" />
      Precio:<input type="text" name="name" />
      Email:<input type="text" name="name" />
        <input type="submit" value="Submit" />
        </label>
        </form>

        </div>
      );
    }
  }


export default Upload;
