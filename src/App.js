import logo from './logo.svg';
import './App.css';

function App() {

  const YAML = require('json-to-pretty-yaml');

  const json = {"changeLogEntriesForMasterPlan":[{"concatLevels":"Customer Plan Information/Plan Setup Information","fieldDescription":"Funding Arrangement","fieldId":456,"fieldType":"Dynamic","level1":"Customer Plan Information","level2":"Plan Setup Information","level3":"","logDTTM":"2022-08-24T02:52:21.814Z","logId":0,"memberGroupId":2302,"newValue":"Fully-Insured","newValueForDisplay":"","obritTimelineUpdatedByUserID":null,"obritTimelineUpdatedByUserName":null,"oldValue":"[Select One]","oldValueForDisplay":"","orbitTimeline":null,"orbitTimelineUpdateDTTM":null,"planId":260086,"sessionId":-1,"tabName":"Plan Info","topicName":"Plan Setup Information","userId":10448,"userName":"fabhishe"},{"concatLevels":"Customer Plan Information/Plan Setup Information","fieldDescription":"State of Issue","fieldId":457,"fieldType":"Dynamic","level1":"Customer Plan Information","level2":"Plan Setup Information","level3":"","logDTTM":"2022-08-24T02:52:21.814Z","logId":0,"memberGroupId":2302,"newValue":"AR-Arkansas","newValueForDisplay":"","obritTimelineUpdatedByUserID":null,"obritTimelineUpdatedByUserName":null,"oldValue":"[Select One]","oldValueForDisplay":"","orbitTimeline":null,"orbitTimelineUpdateDTTM":null,"planId":260086,"sessionId":-1,"tabName":"Plan Info","topicName":"Plan Setup Information","userId":10448,"userName":"fabhishe"},{"concatLevels":"Customer Plan Information/Plan Setup Information","fieldDescription":"Does Minimum Premium (MMP) apply","fieldId":6006,"fieldType":"Dynamic","level1":"Customer Plan Information","level2":"Plan Setup Information","level3":"","logDTTM":"2022-08-24T02:52:21.814Z","logId":0,"memberGroupId":2302,"newValue":"No","newValueForDisplay":"","obritTimelineUpdatedByUserID":null,"obritTimelineUpdatedByUserName":null,"oldValueForDisplay":"","orbitTimeline":null,"orbitTimelineUpdateDTTM":null,"planId":260086,"sessionId":-1,"tabName":"Plan Info","topicName":"Plan Setup Information","userId":10448,"userName":"fabhishe"}],"changedFieldsForMasterPlan":[{"clonedFieldId":456,"controlType":801,"controlTypeText":"Drop Down","createDate":"2022-08-24T02:52:21.814Z","createdBy":10448,"fieldId":456,"fieldName":"Funding Arrangement","hiddenByAmendYear":true,"hiddenByProduct":false,"hiddenByTier1":false,"isEnabled":false,"isVisible":true,"lastUpdateBy":10448,"lastUpdateDate":"2022-08-24T02:52:21.814Z","screenId":14,"screenOrder":15,"toolTipText":null,"value":377},{"clonedFieldId":457,"controlType":801,"controlTypeText":"Drop Down","createDate":"2022-08-24T02:52:21.814Z","createdBy":10448,"fieldId":457,"fieldName":"State of Issue","hiddenByAmendYear":true,"hiddenByProduct":false,"hiddenByTier1":false,"isEnabled":false,"isVisible":true,"lastUpdateBy":10448,"lastUpdateDate":"2022-08-24T02:52:21.814Z","screenId":14,"screenOrder":17,"toolTipText":null,"value":877},{"clonedFieldId":6006,"controlType":801,"controlTypeText":"Drop Down","createDate":"2022-08-24T02:52:21.814Z","createdBy":10448,"fieldId":6006,"fieldName":"Does Minimum Premium (MMP) apply","hiddenByAmendYear":true,"hiddenByProduct":false,"hiddenByTier1":false,"isEnabled":false,"isVisible":true,"lastUpdateBy":10448,"lastUpdateDate":"2022-08-24T02:52:21.814Z","screenId":14,"screenOrder":16,"toolTipText":null,"value":613}],"childPlans":[],"isCovered":true,"masterPlanId":260086,"memberGroupId":2302,"screenId":14,"sessionList":[{"isMasterSession":"Y","masterSessionId":-1,"memberGroupId":2302,"orbitDT":null,"planId":260086,"reasonText":"sdsd","sessionDTTM":"2022-08-24T02:52:21.814Z","sessionId":-1,"userId":10448,"userName":"fabhishe"}],"user":{"dto":"2022-08-24T02:52:21.814Z","loginName":"fabhishe","userId":10448}};

const data = YAML.stringify(json);


//alert(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
