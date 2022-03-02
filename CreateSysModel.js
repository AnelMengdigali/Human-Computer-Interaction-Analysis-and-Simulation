import React from "react";
import CreateSysModelItem from "../Components/CreateSysModelItem";
import "../Styles/CreateModel.css";
import { useNavigate } from 'react-router-dom';

function CreateSysModel() {

  let navigate = useNavigate();

  const [initState, setInitState] = React.useState([])
  const [finalState, setFinalState] = React.useState([])
  const [transRule, setTransRule] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:8080/api/structured-entity/states")
        .then(res => res.json())
        .then(data => setInitState(data))
  }, [])
  React.useEffect(() => {
    fetch("http://localhost:8080/api/structured-entity/states")
        .then(res => res.json())
        .then(data => setFinalState(data))
  }, [])
  React.useEffect(() => {
    fetch("http://localhost:8080/api/rules/transition")
        .then(res => res.json())
        .then(data => setTransRule(data))
  }, [])

  function handleClickBack () {
    navigate('/configuration')
  }

  function handleClickSave () {
      navigate('/systems')
  }

  function toStringEntity(entity) {
    if (entity.head === null) return ""
    let res = entity.head
    entity.arguments.forEach(a => {
      res = `${res}(${toStringEntity(a)})`
    })
    return res
  }

  function toStringRule(rule) {
    if (rule.head === null) return ""
    let resRule = rule.head
    rule.arguments.forEach(a => {
      resRule = `${resRule}(${toStringRule(a)})`
    })
    return resRule
  }

  return (

    <div className="createModel">
      <div>
          <div>
            <h4>Initial States</h4>
          </div>
          <div className="createModelList">
          {initState.map((createSysItem, key) =>  {
                var resultInitState = toStringEntity(createSysItem)
                return (
                  <CreateSysModelItem
                    key={key}
                    id={createSysItem.id}
                    name={resultInitState}
                    type="Initial States"
                  />
                );
              }
            )}
            </div>
      </div>

      <div>
          <div>
            <h4>Final States</h4>
          </div>
          <div className="createModelList">
          {finalState.map((createSysItem, key) =>  {
                var resultFinalState = toStringEntity(createSysItem)
                return (
                  <CreateSysModelItem
                    key={key}
                    id={createSysItem.id}
                    name={resultFinalState}
                    type="Final States"
                  />
                );
              }
            )}
          </div>
      </div>

      <div>
          <div>
            <h4>Transition Rules</h4>
          </div>
          <div className="createModelList">
            {transRule.map((createSysItem, key) => {
                var resultTransRule1 = toStringRule(createSysItem.state1)
                var resultTransRule2 = toStringRule(createSysItem.state2)
                var resultTransRule3 = toStringRule(createSysItem.action)
                return (
                    <CreateSysModelItem
                      key={key}
                      id={createSysItem.id}
                      name={`${resultTransRule1}, ${resultTransRule2}, ${resultTransRule3}`}
                      type="Transition Rules"
                    />
                );
              })}
          </div>
      </div>

      <div className="model-button">
        <button onClick={handleClickBack}>Go Back</button>
        <button onClick={handleClickSave}>Save</button>
      </div>

    </div>
 
  );
}

export default CreateSysModel;
