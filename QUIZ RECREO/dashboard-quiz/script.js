// Sample data for the quiz results
const quizData = {
    participants: [
        { rank: 1, name: "Anjelin Nainggolan", score: "10/10", timer: "04:37" },
        { rank: 2, name: "A", score: "10/10", timer: "04:37" },
        { rank: 3, name: "B", score: "10/10", timer: "04:37" },
        { rank: 4, name: "C", score: "10/10", timer: "04:37" },
        { rank: 5, name: "D", score: "10/10", timer: "04:37" },
        { rank: 6, name: "E", score: "9/10", timer: "04:45" },
        { rank: 7, name: "F", score: "9/10", timer: "04:52" },
        { rank: 8, name: "G", score: "8/10", timer: "05:00" },
        { rank: 9, name: "H", score: "8/10", timer: "05:15" },
        { rank: 10, name: "I", score: "7/10", timer: "05:30" }
    ],
    scoreDistribution: {
        scores: [4, 5, 6, 7, 8, 9, 10],
        counts: [2, 3, 5, 8, 12, 15, 30]
    },
    timeDistribution: {
        categories: ["Skor tinggi (8-10)", "Skor sedang (5-7)", "Skor rendah (0-4)"],
        values: [57, 18, 0],
        colors: ["#4a9d5f", "#17a2b8", "#ffc107"]
    }
};

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTable();
    createBarChart();
    createPieChart();
    setupEventListeners();
});

// Initialize the results table
function initializeTable() {
    const tableBody = document.getElementById('resultsTableBody');
    renderTable(quizData.participants);
}

// Render table rows
function renderTable(data) {
    const tableBody = document.getElementById('resultsTableBody');
    tableBody.innerHTML = '';
    
    data.forEach(participant => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${participant.rank}</td>
            <td>${participant.name}</td>
            <td>${participant.score}</td>
            <td>${participant.timer}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view-btn">👁️</button>
                    <button class="action-btn delete-btn">🗑️</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Create bar chart for score distribution
function createBarChart() {
    const canvas = document.getElementById('barChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 400;
    canvas.height = 250;
    
    const data = quizData.scoreDistribution;
    const maxValue = Math.max(...data.counts);
    const barWidth = 40;
    const barSpacing = 10;
    const chartHeight = 180;
    const chartTop = 30;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set styles
    ctx.fillStyle = '#4a9d5f';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    // Draw bars
    data.scores.forEach((score, index) => {
        const count = data.counts[index];
        const barHeight = (count / maxValue) * chartHeight;
        const x = 60 + (barWidth + barSpacing) * index;
        const y = chartTop + chartHeight - barHeight;
        
        // Draw bar
        ctx.fillStyle = '#4a9d5f';
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw score label
        ctx.fillStyle = '#333';
        ctx.fillText(score.toString(), x + barWidth/2, chartTop + chartHeight + 20);
        
        // Draw count label
        ctx.fillText(count.toString(), x + barWidth/2, y - 10);
    });
    
    // Draw title
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Distribusi Skor', canvas.width/2, 20);
    
    // Draw axis labels
    ctx.font = '12px Arial';
    ctx.fillText('Skor', canvas.width/2, canvas.height - 10);
    
    // Draw y-axis label
    ctx.save();
    ctx.translate(20, canvas.height/2);
    ctx.rotate(-Math.PI/2);
    ctx.fillText('Jumlah', 0, 0);
    ctx.restore();
}

// Create pie chart for time distribution
function createPieChart() {
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 400;
    canvas.height = 250;
    
    const data = quizData.timeDistribution;
    const total = data.values.reduce((sum, val) => sum + val, 0);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Chart settings
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 10;
    const radius = 80;
    
    let currentAngle = -Math.PI / 2; // Start from top
    
    // Draw pie slices
    data.values.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        
        // Draw slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = data.colors[index];
        ctx.fill();
        
        // Draw slice border
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        currentAngle += sliceAngle;
    });
    
    // Draw legend
    const legendX = 20;
    const legendY = canvas.height - 60;
    
    data.categories.forEach((category, index) => {
        const y = legendY + (index * 18);
        
        // Draw color box
        ctx.fillStyle = data.colors[index];
        ctx.fillRect(legendX, y, 12, 12);
        
        // Draw text
        ctx.fillStyle = '#333';
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(category, legendX + 18, y + 9);
    });
    
    // Draw title
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Waktu Rata-rata', canvas.width/2, 20);
}

// Setup event listeners
function setupEventListeners() {
    // Sort functionality
    const sortSelect = document.getElementById('sortBy');
    sortSelect.addEventListener('change', function() {
        const sortBy = this.value;
        let sortedData = [...quizData.participants];
        
        switch(sortBy) {
            case 'name':
                sortedData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'score':
                sortedData.sort((a, b) => {
                    const scoreA = parseInt(a.score.split('/')[0]);
                    const scoreB = parseInt(b.score.split('/')[0]);
                    return scoreB - scoreA;
                });
                break;
            default: // rank
                sortedData.sort((a, b) => a.rank - b.rank);
        }
        
        renderTable(sortedData);
    });
    
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Action buttons (placeholder functionality)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-btn')) {
            alert('View functionality would be implemented here');
        } else if (e.target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this entry?')) {
                // Delete functionality would be implemented here
                console.log('Delete confirmed');
            }
        }
    });
}

// Responsive chart resizing
window.addEventListener('resize', function() {
    createBarChart();
    createPieChart();
});