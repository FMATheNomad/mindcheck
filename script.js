// Objek array kumpulan pertanyaan
const questions = [
    { question: "1/50. Apakah kamu suka memanipulasi orang?", answers: ["Ya", "Tidak"] },
    { question: "2/50. Apakah kamu merasa tidak bersalah setelah menyakiti seseorang?", answers: ["Ya", "Tidak"] },
    { question: "3/50. Apakah kamu sering berbohong untuk keuntungan pribadi?", answers: ["Ya", "Tidak"] },
    { question: "4/50. Apakah kamu memiliki sedikit atau tidak ada empati terhadap orang lain?", answers: ["Ya", "Tidak"] },
    { question: "5/50. Apakah kamu senang menipu orang lain?", answers: ["Ya", "Tidak"] },
    { question: "6/50. Apakah kamu memiliki rasa superioritas terhadap orang lain?", answers: ["Ya", "Tidak"] },
    { question: "7/50. Apakah kamu sering merasa bosan dan mencari sensasi?", answers: ["Ya", "Tidak"] },
    { question: "8/50. Apakah kamu impulsif dan sering membuat keputusan tanpa berpikir panjang?", answers: ["Ya", "Tidak"] },
    { question: "9/50. Apakah kamu memiliki sejarah perilaku kriminal atau tindakan ilegal?", answers: ["Ya", "Tidak"] },
    { question: "10/50. Apakah kamu sering memanfaatkan orang lain untuk keuntungan pribadi?", answers: ["Ya", "Tidak"] },
    { question: "11/50. Apakah kamu cenderung merasa tidak bersalah atau tidak bertanggung jawab atas tindakanmu?", answers: ["Ya", "Tidak"] },
    { question: "12/50. Apakah kamu merasa bahwa aturan tidak berlaku untukmu?", answers: ["Ya", "Tidak"] },
    { question: "13/50. Apakah kamu sering merasa kesulitan untuk menjaga hubungan jangka panjang?", answers: ["Ya", "Tidak"] },
    { question: "14/50. Apakah kamu merasa bahwa kamu lebih pintar dari orang lain?", answers: ["Ya", "Tidak"] },
    { question: "15/50. Apakah kamu memiliki sejarah perilaku agresif atau kekerasan?", answers: ["Ya", "Tidak"] },
    { question: "16/50. Apakah kamu suka menantang otoritas?", answers: ["Ya", "Tidak"] },
    { question: "17/50. Apakah kamu sering merasa marah atau frustrasi?", answers: ["Ya", "Tidak"] },
    { question: "18/50. Apakah kamu sering merasa tidak berperasaan terhadap penderitaan orang lain?", answers: ["Ya", "Tidak"] },
    { question: "19/50. Apakah kamu merasa bahwa kamu berhak mendapatkan lebih dari yang lain?", answers: ["Ya", "Tidak"] },
    { question: "20/50. Apakah kamu memiliki sejarah perilaku antisosial?", answers: ["Ya", "Tidak"] },
    { question: "21/50. Apakah kamu sering tidak mematuhi aturan dan norma sosial?", answers: ["Ya", "Tidak"] },
    { question: "22/50. Apakah kamu memiliki sejarah perilaku penipuan?", answers: ["Ya", "Tidak"] },
    { question: "23/50. Apakah kamu merasa bahwa kamu tidak perlu mengikuti aturan?", answers: ["Ya", "Tidak"] },
    { question: "24/50. Apakah kamu sering merasa bahwa kamu lebih baik dari orang lain?", answers: ["Ya", "Tidak"] },
    { question: "25/50. Apakah kamu sering merasa bahwa perasaan orang lain tidak penting?", answers: ["Ya", "Tidak"] },
    { question: "26/50. Apakah kamu sering berperilaku dengan cara yang menyakitkan bagi orang lain?", answers: ["Ya", "Tidak"] },
    { question: "27/50. Apakah kamu sering merasa tidak bertanggung jawab atas tindakanmu?", answers: ["Ya", "Tidak"] },
    { question: "28/50. Apakah kamu sering merasa kesulitan untuk mempertahankan pekerjaan atau hubungan?", answers: ["Ya", "Tidak"] },
    { question: "29/50. Apakah kamu sering merasa tidak puas dengan hidup?", answers: ["Ya", "Tidak"] },
    { question: "30/50. Apakah kamu sering mencari cara untuk melanggar aturan?", answers: ["Ya", "Tidak"] },
    { question: "31/50. Apakah kamu merasa bahwa kamu tidak perlu mengikuti hukum?", answers: ["Ya", "Tidak"] },
    { question: "32/50. Apakah kamu sering merasa bahwa kamu tidak perlu mematuhi aturan sosial?", answers: ["Ya", "Tidak"] },
    { question: "33/50. Apakah kamu merasa bahwa kamu tidak perlu menghormati hak orang lain?", answers: ["Ya", "Tidak"] },
    { question: "34/50. Apakah kamu sering merasa tidak bersalah setelah menyakiti seseorang secara fisik atau emosional?", answers: ["Ya", "Tidak"] },
    { question: "35/50. Apakah kamu merasa bahwa kamu berhak mendapatkan lebih dari yang lain tanpa harus bekerja untuk itu?", answers: ["Ya", "Tidak"] },
    { question: "36/50. Apakah kamu sering mencari cara untuk mendapatkan keuntungan pribadi dengan cara yang tidak jujur?", answers: ["Ya", "Tidak"] },
    { question: "37/50. Apakah kamu sering merasa tidak puas dengan situasi saat ini dan mencari perubahan terus-menerus?", answers: ["Ya", "Tidak"] },
    { question: "38/50. Apakah kamu sering merasa bahwa orang lain tidak memahami atau menghargai kamu sebagaimana mestinya?", answers: ["Ya", "Tidak"] },
    { question: "39/50. Apakah kamu sering merasa bahwa aturan dan norma sosial menghambat kebebasanmu?", answers: ["Ya", "Tidak"] },
    { question: "40/50. Apakah kamu sering merasa bahwa kamu tidak perlu mematuhi hukum jika itu tidak menguntungkanmu?", answers: ["Ya", "Tidak"] },
    { question: "41/50. Apakah kamu sering merasa bahwa kamu tidak perlu mematuhi aturan yang dibuat oleh orang lain?", answers: ["Ya", "Tidak"] },
    { question: "42/50. Apakah kamu sering merasa bahwa perasaan orang lain tidak relevan dalam pengambilan keputusanmu?", answers: ["Ya", "Tidak"] },
    { question: "43/50. Apakah kamu sering merasa tidak bersalah setelah melakukan sesuatu yang salah?", answers: ["Ya", "Tidak"] },
    { question: "44/50. Apakah kamu sering merasa bahwa kamu berhak mendapatkan perlakuan istimewa?", answers: ["Ya", "Tidak"] },
    { question: "45/50. Apakah kamu sering merasa bahwa kamu lebih pintar dari orang lain dan bisa memanipulasi mereka?", answers: ["Ya", "Tidak"] },
    { question: "46/50. Apakah kamu sering merasa bahwa kamu tidak perlu bertanggung jawab atas tindakanmu?", answers: ["Ya", "Tidak"] },
    { question: "47/50. Apakah kamu sering merasa bahwa kamu tidak perlu mematuhi aturan jika itu tidak menguntungkanmu?", answers: ["Ya", "Tidak"] },
    { question: "48/50. Apakah kamu sering merasa bahwa kamu lebih baik dari orang lain dan berhak mendapatkan lebih?", answers: ["Ya", "Tidak"] },
    { question: "49/50. Apakah kamu sering merasa tidak terpengaruh oleh kritik atau rasa malu?", answers: ["Ya", "Tidak"] },
    { question: "50/50. Apakah kamu sering merasa bahwa kamu lebih baik dari orang lain dan berhak mendapatkan lebih?", answers: ["Ya", "Tidak"] }
];
let currentQuestion = 0;
let score = 0;
let quizStarted = false;

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');

function startQuiz() {
    quizStarted = true;
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    resultContainer.innerHTML = ''; // Kosongkan hasil saat tes dimulai
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const questionObj = questions[currentQuestion];
        quizContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${questionObj.question}</h5>
                    ${questionObj.answers.map((answer, index) => `
                        <button class="btn button mt-2" onclick="handleAnswer('${answer}')">${answer}</button>
                    `).join('')} <br>
                    ${currentQuestion > 0 ? `<button class="btn button mt-2" onclick="previousQuestion()"><i class="fa-solid fa-arrow-left"></i> Pertanyaan Sebelumnya</button>` : ''}
                </div>
            </div>
        `;
    } else {
        displayResult();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        score--; // Optional: Adjust the score if necessary
        loadQuestion();
    }
}

function handleAnswer(answer) {
    if (answer === "Ya") {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function displayResult() {
    let resultMessage = `Skor kamu: ${score} dari ${questions.length}. `;
    if (score > questions.length / 2) {
        resultMessage += "Hasilnya menunjukkan bahwa kamu mungkin memiliki tanda-tanda psikopat.";
    } else {
        resultMessage += "Hasilnya menunjukkan bahwa kamu tidak memiliki tanda-tanda psikopat.";
    }
    quizContainer.innerHTML = '<button class="btn button" onclick="startQuiz()"><i class="fa-solid fa-user-secret"></i> Mulai Ulang Tes</button>';
    resultContainer.innerHTML = `<p class="result-message"><u>${resultMessage}</u></p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (!quizStarted) {
        resultContainer.innerHTML = '<p>Hasil belum tersedia, lakukan tes terlebih dahulu.</p>';
    }
});