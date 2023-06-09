import React from 'react';
import Form from 'react-bootstrap/Form';


class Header extends React.Component {
    
    render(){
        return (
            <>
                <h1>Horned Beats</h1>
                <Form>
                    <Form.Select style={{width: "20%"}} onChange={this.props.handleSetSelectedHorns}>
                        <option value="0">Seach by number of horns</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Select>
                </Form>
            </>
        )
    }
}

export default Header;