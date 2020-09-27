import React from 'react';
import { Component } from 'react';
import createPreview, {downloadPdf, setPdfData} from './templatePdf'
import api from '../../service/service';

class RelatorioDespesa extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    async componentDidMount() {
        const response = await api.get('/Despesa')
        setPdfData(response.data.docs)

        createPreview()
    }

    

    handleClick(){
        downloadPdf()
    }

    render() {

        return (
            <scroll>
                <div className="container"> 
                    <h1>Relatorio</h1>
                    <button onClick={this.handleClick}>Download</button>
                    <iframe
                        src={this.state.urlData}
                        frameborder="0"
                        width="100%"
                        height="700px"
                    />
                </div>
            </scroll>


        )
    }
}

export default RelatorioDespesa