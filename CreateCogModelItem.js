import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CreateCogModelItem(props) {

    var result = [];
    const [formData, setFormData] = React.useState(
        {
            isSelected: false
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
        if(formData.isSelected === true) {
            result.push(value)
        }
    }

    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox/>} label={props.name} />
            {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
        </FormGroup>
    )
}
export default CreateCogModelItem;


