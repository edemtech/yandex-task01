import React from 'react';
import MaskedInput from 'react-maskedinput';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fio: '',
            email: '',
            phone: '',
            status: '',
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submit(e) {
        e.preventDefault();
        this.validate();
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
        
    }
    validate() {
        //for fio
        var fio = document.getElementById('fio');
        //reset class
        fio.className='form-control';

        // if ( wordsQuantity !== 3 ) {
        //     this.setState({status: 'error'})
        // } else this.setState({status: 'success'});
        var wordsQuantity = fio.value.match(/\S+/g).length;
        if ( wordsQuantity !== 3 ) {
            document.getElementById('fio').className += ' error';
        }

        //check email
    }
    fioKeyUp(e) {
        e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Za-яА-Я\s@]+/, '');
    }

    render() {
        const { name, email, phone, status } = this.state;
        const resultContainer = (
            this.state.status === 'success' ?
                <div className="alert alert-success">
                    <strong>Success</strong>
                </div>
                : this.state.status === 'error' ?
                    <div className="alert alert-danger">
                        <strong>Error</strong>
                    </div> : this.state.status === 'progress' ?
                        <div className="alert alert-warning">
                            <strong>In progress..</strong>
                        </div> : ''
        )
        return (
            <form className="col-sm-3 panel" onSubmit={this.submit}>
                {resultContainer}
                <div className="form-group">
                    <label for="formGroupExampleInput">ФИО</label>
                    <input
                        type="text"
                        name="fio"
                        className="form-control"
                        id="fio"
                        value={this.state.fio}
                        onChange={this.handleChange}
                        placeholder="Введите ФИО"
                        onKeyUp={this.fioKeyUp}/>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Ввведите почту"/>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Телефон</label>
                    <MaskedInput
                        mask="+7(111)111-11-11"
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        placeholder="Введите номер"/>
                </div>
                <input type="submit" id="submitButton" value="Submit" className="btn btn-primary"/>
            </form>
        );
    }
}

export default App;
