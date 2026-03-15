export default function InsightsTable({ data }) {
    const getSentimentStyle = (sentiment) => {
        switch (sentiment) {
            case 'positive': return { bg: '#dcfce7', text: '#166534' };
            case 'negative': return { bg: '#fee2e2', text: '#991b1b' };
            default: return { bg: '#f3f4f6', text: '#374151' };
        }
    };

    const getActionStyle = (action) => {
        switch (action) {
            case 'escalate': return { bg: '#fef2f2', text: '#ef4444', border: '1px solid #ef4444' };
            case 'watch': return { bg: '#fff7ed', text: '#f97316', border: '1px solid #f97316' };
            case 'follow_up': return { bg: '#eff6ff', text: '#3b82f6', border: '1px solid #3b82f6' };
            default: return { bg: '#f3f4f6', text: '#6b7280', border: '1px solid #d1d5db' };
        }
    };

    return (
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#2c3e50', borderBottom: '2px solid #f4f7f6', paddingBottom: '10px' }}>
                Geri Bildirim Detayları
            </h2>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f8fafc', color: '#64748b', fontSize: '14px', textTransform: 'uppercase' }}>
                            <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Başlık</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Özet</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Duygu</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Aksiyon</th>
                            <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Ciddiyet Skoru</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            const sentimentStyle = getSentimentStyle(item.sentiment);
                            const actionStyle = getActionStyle(item.action);
                            return (
                                <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold', color: '#334155' }}>{item.display_label || '-'}</td>
                                    <td style={{ padding: '15px', color: '#475569', maxWidth: '300px' }}>{item.summary || '-'}</td>
                                    <td style={{ padding: '15px' }}>
                                        <span style={{ backgroundColor: sentimentStyle.bg, color: sentimentStyle.text, padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'capitalize' }}>
                                            {item.sentiment || 'neutral'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '15px' }}>
                                        <span style={{ backgroundColor: actionStyle.bg, color: actionStyle.text, border: actionStyle.border, padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                            {item.action || 'ignore'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '15px', color: '#64748b' }}>{item.severity ? Number(item.severity).toFixed(2) : '0.00'}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {data.length === 0 && <p style={{ textAlign: 'center', color: '#94a3b8', padding: '20px' }}>Veri bulunamadı.</p>}
            </div>
        </div>
    );
}