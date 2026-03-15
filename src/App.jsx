import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import SummaryCards from './components/SummaryCards';
import InsightsTable from './components/InsightsTable';

function App() {
  const [data, setData] = useState([]);
  const [surveyIds, setSurveyIds] = useState([]);
  const [selectedSurveyId, setSelectedSurveyId] = useState('');

  useEffect(() => {
    Papa.parse('/data.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data;
        setData(parsedData);

        const allSurveyIds = parsedData.map(item => item.survey_id);
        const uniqueSurveyIds = [...new Set(allSurveyIds)];
        setSurveyIds(uniqueSurveyIds);

        if (uniqueSurveyIds.length > 0) {
          setSelectedSurveyId(uniqueSurveyIds[0]);
        }
      }
    });
  }, []);

  const filteredData = data.filter(item => item.survey_id === selectedSurveyId);
  const totalResponses = filteredData.length;
  const positiveCount = filteredData.filter(item => item.sentiment === 'positive').length;
  const escalateCount = filteredData.filter(item => item.action === 'escalate').length;

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>

      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, color: '#2c3e50' }}>Ne Dendy? İçgörü Paneli</h1>
        <div>
          <label style={{ marginRight: '10px', fontWeight: 'bold', color: '#34495e' }}>Anket Seç:</label>
          <select
            value={selectedSurveyId}
            onChange={(e) => setSelectedSurveyId(e.target.value)}
            style={{ padding: '10px 15px', fontSize: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', cursor: 'pointer' }}
          >
            {surveyIds.map(id => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
        </div>
      </div>

      
      <SummaryCards
        totalResponses={totalResponses}
        positiveCount={positiveCount}
        escalateCount={escalateCount}
      />

      <InsightsTable
        data={filteredData}
      />

    </div>
  );
}

export default App;