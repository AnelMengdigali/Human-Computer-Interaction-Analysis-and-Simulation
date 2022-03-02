import React, {Component} from 'react';
import { Navigate } from 'react-router-dom';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const styles = {
    center: {
      marginLeft: "auto",
      marginRight: "auto"
    }
}
  
class Setup extends Component {

    constructor(props) {
        super(props);
        this.state={
            capacity: '',
            load: '',
            time: '',
            setIn: false
        };
        this.handleChange=this.handleChange.bind(this);
        this.submit=this.submit.bind(this);
    }
 
    handleChange(e){
        let name=e.target.name;
        let value=e.target.value;
        console.log(name, value);

        let data={};
        data[name]=value;
        this.setState(data);
    }
    render () {
        if(this.state.setIn){
            return <Navigate to='/' />
        }
        return (
            <div className={styles.center}>
                 <Container>
                    <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Experiment Setup</h1>
                    <Row>
                        <Col>
                            <Form onSubmit={this.submit}> 
                                <Form.Group>
                                    <Form.Control type="text" name="capacity" placeholder="STM Capacity" onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" name="load" placeholder="Cognitive Load"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" name="time" placeholder="Decay Time"/>
                                </Form.Group>
                                <Button variant="success btn-block" type="submit">Apply</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
    submit(e) {
        e.preventDefault();

        window.axios.post('api/login', {capacity: this.state.capacity, load: this.state.load, time: this.state.time})
        .then(response=>{
            console.log(response);
            this.setState({setIn:true});
            localStorage.setItem('token', response.data.auth.access_token)
        });
    }
   
}

export default Setup;
