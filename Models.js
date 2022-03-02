import React, { useState } from 'react'
import "../Styles/Models.css";
import Select from 'react-select';
import CustomizedDialogs from '../Components/Dialog'
import Setup from '../Components/Setup';
import { useNavigate, useLocation } from 'react-router-dom';

function Models () {
  

    // let navigate = useNavigate();
    // const [option, setOption] = React.useState([])
    // React.useEffect(() => {
    // fetch("http://localhost:8080/api/project/public")
    //     .then(res => res.json())
    //     .then(data => setOption(data[0].overallModels))
    // }, [])

    // const style = {
    //   fontSize: 30,
    //   height: 100
    // };

    // return (
    //   <div style={style}>
    //       <div>
    //           <h2>Please configure models to run the experiment by selecting Overall Model and corresponding System and Cognitive Models to it below.</h2>
    //           <h2>Overall Models</h2>
    //           {option.map((overallModelsItem, key) => {
    //             return (
    //               <OverallModelsItem
    //                 key={key}
    //                 name={overallModelsItem.name}
    //                 definition={overallModelsItem.description}
    //                 version={overallModelsItem.versions.description}
    //               />
    //             );
    //           })}
    //         </div>
    //         <div>
    //           <h2>System Models</h2>
    //         </div>
    //         <div>
    //           <h2>Cognitive Models</h2>
    //         </div>
    //         <div className="my-button">
    //           <button onClick={() => {navigate.push('/simulationMan')}}>Run: manual</button>
    //           <button onClick={() => {navigate.push('/simulationEnd')}}>Run: end</button>
    //         </div>
    //     </div> 
    //   );
   
    let navigate = useNavigate();
    var OverList = [
        {
            value: 1,
            label: "Overall Model 1: Abstract",
            description: "Description: abstract overall model for people and dogs project"
        },
        {
            value: 2,
            label: "Overall Model 2: Concrete", 
            description: "Description: concrete overall model for people and dogs project"
        }
    ];

    var SysList = [
        {
            value: 1,
            label: "Version 1",
            description: "Description: person patting a dog"
        }
    ];

    var CogList = [
        {
            value: 1,
            label: "Version 1: Child",
            description: "Description: child aiming to pat a dog" 
        },
        {
            value: 2,
            label: "Version 2: John", 
            description: "Description: adult patting a dog"
        }
    ];

    const [result, overValue] = useState(OverList.label);
    const overHandler = e => {
        overValue(e.description);
    }

    const [result1, sysValue] = useState(SysList.label);
    const sysHandler = e => {
        sysValue(e.description);
    }

    const [result2, cogValue] = useState(CogList.label);
    const cogHandler = e => {
        cogValue(e.description);
    }
  
    function handleClickMan () {
        if(result === "Description: abstract overall model for people and dogs project" 
        && result1 === "Description: person patting a dog"
        && result2 === "Description: child aiming to pat a dog")
        {
            navigate('/simulationMan')
        }
    }
    function handleClickEnd () {
        if(result === "Description: abstract overall model for people and dogs project" 
        && result1 === "Description: person patting a dog"
        && result2 === "Description: child aiming to pat a dog")
        {
            navigate('/simulationEnd')
        }
    }
    function handleClickBack () {
        navigate('/systems')
    }
    function handleClickCreateSysModel () {
        navigate('/createSysModel')
    }
    function handleClickCreateCogModel () {
        navigate('/createCogModel')
    }

    return (
        <div className="mod-con">
            <div className="body">   
                <div className="project">
                    <h1>Interaction human-dog project</h1>
                    <p>Definition: The relations between a human being and a dog builds on the long-term experience.</p>
                    <p>Stage: Pre-model</p>
                    <p>Access: Public</p>
                    <p>Please configure models to run the experiment by selecting Overall Model and corresponding System and Cognitive Models to it below.</p>
                </div>          
                <div className="overall">
                    <h3>Overall Models</h3>
                    <Select options={OverList} onChange={overHandler}/>   
                    {/*<CustomizedDialogs></CustomizedDialogs>  */}  
                    <p>{result}</p>  
                </div>
                <div className="system">
                    <h3>System Models</h3>
                    <Select options={SysList} onChange={sysHandler}/>   
                    {/*<CustomizedDialogs></CustomizedDialogs> */}  
                    <p>{result1}</p>  
                    <button onClick={handleClickCreateSysModel}>Create</button>
                </div>
                <div className="cognitive">
                    <h3>Cognitive Models</h3>
                    <Select options={CogList} onChange={cogHandler}/>   
                    {/*<CustomizedDialogs><Setup/></CustomizedDialogs> */} 
                    <p>{result2}</p>  
                    <button onClick={handleClickCreateCogModel}>Create</button>
                </div>  
            </div>
            <div className="model-button">
                <button onClick={handleClickMan}>Run: manual</button>
                <button onClick={handleClickEnd}>Run: end result</button>
                <button onClick={handleClickBack}>Go Back</button>
            </div>
        </div>
        )
}

export default Models;

