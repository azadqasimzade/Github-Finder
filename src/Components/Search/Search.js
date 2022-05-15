import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            keyword: ''
        }
    }

    onChange(e){
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        if(this.state.keyword === ''){
            this.props.setAlert('Enter keyword!','danger')
        }else{
            this.props.searchInput(this.state.keyword)
            this.setState({
                keyword: ''
            })
        }
    }

  render() {
    return (
      <>
        <div className="container my-3">
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <input type="text" value={this.state.keyword} onChange={this.onChange} className='form-control' />
                    <button type='submit' className='btn btn-primary'>Search</button>
                </div>
            </form>
            {
                this.props.showClearBtn && <button onClick={this.props.clearButton} className='btn btn-secondary w-100 mt-3'>Clear Results</button> 
            }
        </div>
      </>
    )
  }
}

export default Search