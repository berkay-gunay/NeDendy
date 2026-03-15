export default function SummaryCards({ totalResponses, positiveCount, escalateCount }) {
    return (
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
            <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '5px solid #3498db' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#7f8c8d', fontSize: '14px', textTransform: 'uppercase' }}>Toplam Yanıt</h3>
                <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold', color: '#2c3e50' }}>{totalResponses}</p>
            </div>
            <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '5px solid #2ecc71' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#7f8c8d', fontSize: '14px', textTransform: 'uppercase' }}>Olumlu Dönüşler</h3>
                <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold', color: '#27ae60' }}>{positiveCount}</p>
            </div>
            <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: '5px solid #e74c3c' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#7f8c8d', fontSize: '14px', textTransform: 'uppercase' }}>Acil Aksiyon </h3>
                <p style={{ margin: 0, fontSize: '28px', fontWeight: 'bold', color: '#c0392b' }}>{escalateCount}</p>
            </div>
        </div>
    );
}