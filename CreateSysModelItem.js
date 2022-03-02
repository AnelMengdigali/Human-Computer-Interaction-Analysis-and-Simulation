import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CreateSysModelItem(props) {

    var result = [];
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    // function submitResults () {
    //     if(checked === true) {
    //     }
    //     return (<alert>result</alert>);
    // }
    

    return (
        <div>
            <FormGroup>
                <FormControlLabel 
                    control={
                        <Checkbox 
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                            value={props.name}
                        />} 
                    label={props.name} 
                />
            </FormGroup>
            {/* <button type="submit" onClick={submitResults}>Save</button> */}
        </div>
    )
}
export default CreateSysModelItem;


