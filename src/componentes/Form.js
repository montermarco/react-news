import React, { Component } from 'react';

class Form extends Component {

    state={
        category: 'general'
    }

    changeCategory = e => {
        this.setState({
            category: e.target.value
        }, () => {
            this.props.feedNews(this.state.category)
        });
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form action="">
                        <h2>Find news by caregory</h2>

                        <div className="input-field col s12 m8 offset-m2">
                            <select onChange={this.changeCategory}>
                                <option value="general">general</option>
                                <option value="business">business</option>                                                    
                                <option value="health">health</option>
                                <option value="science">science</option>
                                <option value="sports">sports</option>
                                <option value="technology">technology</option>
                                <option value="entertainment">entertainment</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;