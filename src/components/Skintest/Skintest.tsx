// src/page/SkinTest.js
import React, { useState, useCallback } from 'react';
import './styles/styles.css'; // Nhập file CSS

// Định nghĩa mảng questions ở đầu file, trước component
const questions = [
    {
        question: "Sau khi rửa mặt, da bạn cảm thấy thế nào?",
        options: [
            { value: 'a', text: 'Mềm mại, không khô căng' },
            { value: 'b', text: 'Căng và khô' },
            { value: 'c', text: 'Nhờn, bóng dầu' },
            { value: 'd', text: 'Vùng chữ T nhờn, nhưng hai má khô' },
        ],
    },
    {
        question: "Da bạn thường bóng dầu vào thời điểm nào trong ngày?",
        options: [
            { value: 'a', text: 'Hầu như không bóng dầu' },
            { value: 'b', text: 'Không bóng dầu cả ngày, có thể hơi khô' },
            { value: 'c', text: 'Luôn bóng dầu, đặc biệt ở vùng trán, mũi, cằm' },
            { value: 'd', text: 'Chỉ bóng dầu ở vùng chữ T, các vùng khác bình thường hoặc khô' },
        ],
    },
    {
        question: "Khi thời tiết thay đổi, da bạn có phản ứng như thế nào?",
        options: [
            { value: 'a', text: 'Ít thay đổi, da ổn định' },
            { value: 'b', text: 'Rất khô, dễ bong tróc' },
            { value: 'c', text: 'Dễ nổi mụn, dầu nhiều hơn vào mùa nóng' },
            { value: 'd', text: 'Da nhạy cảm hơn, vùng chữ T bóng dầu, vùng má khô' },
        ],
    },
    {
        question: "Bạn có thấy lỗ chân lông của mình như thế nào?",
        options: [
            { value: 'a', text: 'Lỗ chân lông nhỏ, khó nhìn thấy' },
            { value: 'b', text: 'Rất nhỏ hoặc không thấy rõ' },
            { value: 'c', text: 'To, dễ nhìn thấy' },
            { value: 'd', text: 'To ở vùng chữ T, nhưng nhỏ ở hai bên má' },
        ],
    },
    {
        question: "Da bạn thường có cảm giác nào sau khi thoa kem dưỡng ẩm?",
        options: [
            { value: 'a', text: 'Cảm thấy dễ chịu, không quá bóng hay khô' },
            { value: 'b', text: 'Da hút ẩm ngay lập tức, nhưng vẫn có cảm giác khô' },
            { value: 'c', text: 'Thường cảm giác nhờn dính' },
            { value: 'd', text: 'Vùng chữ T bóng nhẹ, vùng khác dễ chịu' },
        ],
    },
    {
        question: "Bạn có gặp vấn đề về mụn hoặc kích ứng da không?",
        options: [
            { value: 'a', text: 'Hiếm khi xảy ra' },
            { value: 'b', text: 'Da dễ kích ứng, ngứa, hoặc bong tróc' },
            { value: 'c', text: 'Thường bị mụn, lỗ chân lông tắc nghẽn' },
            { value: 'd', text: 'Mụn xuất hiện chủ yếu ở vùng chữ T' },
        ],
    },
];

const SkinTest = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (question, answer) => {
        setAnswers({
            ...answers,
            [question]: answer,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(answers).length === questions.length) {
            calculateResult();
        } else {
            alert("Vui lòng trả lời tất cả các câu hỏi.");
        }
    };

    const calculateResult = () => {
        const score = { a: 0, b: 0, c: 0, d: 0 };
        Object.values(answers).forEach(answer => {
            score[answer]++;
        });

        const maxScore = Math.max(score.a, score.b, score.c, score.d);
        let resultText = "";
        let recommendations = "";

        if (score.a === maxScore) {
            resultText = "Da thường";
            recommendations = "Bạn có làn da khỏe mạnh và cân bằng. Nên duy trì chế độ chăm sóc da đơn giản với sữa rửa mặt dịu nhẹ và kem dưỡng ẩm phù hợp.";
        } else if (score.b === maxScore) {
            resultText = "Da khô";
            recommendations = "Da của bạn cần được cung cấp độ ẩm nhiều hơn. Nên sử dụng các sản phẩm dưỡng ẩm đậm đặc và tránh rửa mặt với nước quá nóng.";
        } else if (score.c === maxScore) {
            resultText = "Da dầu";
            recommendations = "Nên sử dụng sản phẩm không chứa dầu (oil-free) và có khả năng kiểm soát dầu. Đừng quên dưỡng ẩm nhẹ để tránh da tiết dầu nhiều hơn.";
        } else {
            resultText = "Da hỗn hợp";
            recommendations = "Cần chăm sóc riêng biệt cho từng vùng da. Sử dụng sản phẩm dành cho da dầu ở vùng chữ T và sản phẩm dưỡng ẩm cho vùng má.";
        }

        setResult({ type: resultText, recommendations });
    };



    return (
        <div className="skintest-container">
            <h1>Kiểm Tra Da</h1>
            <div className="test-content">
                <div className="skin-test-container">
                    <div className="test-header">
                        <h1>Kiểm Tra Loại Da</h1>
                        <p className="test-description">
                            Trả lời các câu hỏi dưới đây để xác định loại da của bạn và nhận được những gợi ý chăm sóc phù hợp.
                        </p>
                    </div>

                    <div className="progress-bar">
                        <div 
                            className="progress-fill"
                            style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
                        ></div>
                    </div>

                    <form onSubmit={handleSubmit} className="skin-test-form">
                        <ol>
                            {questions.map((q, index) => (
                                <li key={index} className="question-item">
                                    <div className="question-header">
                                        <span className="question-number">Câu {index + 1}</span>
                                        <h3 className="question-text">{q.question}</h3>
                                    </div>
                                    <div className="options-container">
                                        {q.options.map((option, i) => (
                                            <label key={i} className={`option-label ${answers[`q${index + 1}`] === option.value ? 'selected' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name={`q${index + 1}`}
                                                    value={option.value}
                                                    onChange={() => handleChange(`q${index + 1}`, option.value)}
                                                />
                                                <span className="option-text">{option.text}</span>
                                            </label>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <button type="submit" className="submit-button">
                            Xem Kết Quả
                        </button>
                    </form>

                    {result && (
                        <div className="results">
                            <div className="result-header">
                                <h2>Kết Quả Phân Tích</h2>
                                <div className="result-type">{result.type}</div>
                            </div>
                            <div className="result-content">
                                <p className="result-recommendations">{result.recommendations}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        
        </div>
    );
};

export default SkinTest;