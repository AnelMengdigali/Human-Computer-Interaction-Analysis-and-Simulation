import React from "react";
import CreateCogModelItem from "../Components/CreateCogModelItem";
import "../Styles/CreateModel.css";
import { useNavigate } from 'react-router-dom';

function CreateCogModel() {

  let navigate = useNavigate();

  const [stmMemory, setStmMemory] = React.useState([])
  const [declarMemory, setDeclarMemory] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:8080/api/structured-entity/goals")
        .then(res => res.json())
        .then(data => setStmMemory(data))
  }, [])
  React.useEffect(() => {
    fetch("http://localhost:8080/api/rules/cognitive")
        .then(res => res.json())
        .then(data => setDeclarMemory(data))
  }, [])

  function handleClickBack () {
    navigate('/configuration')
  }

  function handleClickSave () {
      navigate('/systems')
  }

  function toStringGoal(entity) {
    if (entity.head === null) return ""
    let res = entity.head
    entity.arguments.forEach(a => {
      res = `${res}(${toStringGoal(a)})`
    })
    return res
  }

  function toStringRules(rule) {
    if (rule.head === null) return ""
    let resRule = rule.head
    rule.arguments.forEach(a => {
      resRule = `${resRule}(${toStringRules(a)})`
    })
    return resRule
  }

  return (
    
    <div className="createModel">
      <div>
          <div>
            <h4>Short-Term Memory</h4>
          </div>
          <div className="createModelList">
          {stmMemory.map((createSysItem, key) =>  {
                var resultInitState = toStringGoal(createSysItem)
                return (
                  <CreateCogModelItem
                    key={key}
                    id={createSysItem.id}
                    name={resultInitState}
                    type="Short-Term Memory"
                  />
                );
              }
            )}
            </div>
      </div>

      <div>
          <div>
            <h4>Declarative Memory</h4>
          </div>
          <div className="createModelList">
              {/* {declarMemory.map((createSysItem, key) => {
                return createSysItem.map(rule => { 
                  return rule.map(item => {
                    var resultTransRule1 = toStringRules(item.head)
                    return (
                        <CreateCogModelItem
                          key={key}
                          id={createSysItem.id}
                          name={resultTransRule1}
                          type="Declarative Memory"
                        />
                    );
                  })
                })  
              })} */}
          </div>
      </div>

      <div className="model-button">
        <button onClick={handleClickBack}>Go Back</button>
        <button onClick={handleClickSave}>Save</button>
      </div>

    </div>
 
  );
}

export default CreateCogModel;
