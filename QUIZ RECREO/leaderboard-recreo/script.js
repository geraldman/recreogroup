// Scoreboard Data Management
class Scoreboard {
    constructor() {
        this.players = [
            { name: "Anjelin", time: "03:27", correctAnswers: 20, rank: 1 },
            { name: "John", time: "03:58", correctAnswers: 20, rank: 2 },
            { name: "XXX", time: "05:32", correctAnswers: 20, rank: 3 },
            { name: "aLn", time: "06:00", correctAnswers: 20, rank: 4 },
            { name: "B", time: "06:17", correctAnswers: 18, rank: 5 },
            { name: "C", time: "07:46", correctAnswers: 18, rank: 6 },
            { name: "D", time: "09:23", correctAnswers: 17, rank: 7 },
            { name: "E", time: "10:00", correctAnswers: 15, rank: 8 },
            { name: "F", time: "10:00", correctAnswers: 9, rank: 9 }
        ];
        this.init();
    }

    init() {
        this.updateLastModified();
        this.addEventListeners();
        this.addAnimations();
    }

    // Convert time string to seconds for comparison
    timeToSeconds(timeStr) {
        const [minutes, seconds] = timeStr.split(':').map(Number);
        return minutes * 60 + seconds;
    }

    // Convert seconds back to MM:SS format
    secondsToTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Sort players by correct answers (desc) then by time (asc)
    sortPlayers() {
        this.players.sort((a, b) => {
            if (b.correctAnswers !== a.correctAnswers) {
                return b.correctAnswers - a.correctAnswers;
            }
            return this.timeToSeconds(a.time) - this.timeToSeconds(b.time);
        });

        // Update ranks
        this.players.forEach((player, index) => {
            player.rank = index + 1;
        });
    }

    // Add new player to scoreboard
    addPlayer(name, time, correctAnswers) {
        if (!name || !time || correctAnswers === undefined) {
            alert('Please provide all required information!');
            return false;
        }

        const newPlayer = {
            name: name.trim(),
            time: time,
            correctAnswers: parseInt(correctAnswers),
            rank: this.players.length + 1
        };

        this.players.push(newPlayer);
        this.sortPlayers();
        this.renderTable();
        this.updateLastModified();
        this.showNotification(`${name} has been added to the scoreboard!`);
        return true;
    }

    // Remove player from scoreboard
    removePlayer(index) {
        if (index >= 0 && index < this.players.length) {
            const playerName = this.players[index].name;
            this.players.splice(index, 1);
            this.sortPlayers();
            this.renderTable();
            this.updateLastModified();
            this.showNotification(`${playerName} has been removed from the scoreboard!`);
        }
    }

    // Render the table with current data
    renderTable() {
        const tbody = document.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = '';

        this.players.forEach((player, index) => {
            const row = document.createElement('tr');
            
            // Determine rank class
            let rankClass = 'rank-default';
            if (player.rank === 1) rankClass = 'rank-1';
            else if (player.rank === 2) rankClass = 'rank-2';
            else if (player.rank === 3) rankClass = 'rank-3';
            
            row.className = rankClass;
            row.innerHTML = `
                <td>${player.rank}.</td>
                <td>${player.name}</td>
                <td>${player.time}</td>
                <td>${player.correctAnswers}</td>
            `;

            // Add click event for editing/removing
            row.addEventListener('click', () => this.showPlayerOptions(index));
            
            tbody.appendChild(row);
        });

        this.animateTableRows();
    }

    // Show options for a player (edit/remove)
    showPlayerOptions(index) {
        const player = this.players[index];
        const action = confirm(`${player.name} - What would you like to do?\nOK = Remove Player\nCancel = Edit Player`);
        
        if (action) {
            this.removePlayer(index);
        } else {
            this.editPlayer(index);
        }
    }

    // Edit player information
    editPlayer(index) {
        const player = this.players[index];
        
        const newName = prompt('Enter new name:', player.name);
        if (newName === null) return;
        
        const newTime = prompt('Enter new time (MM:SS):', player.time);
        if (newTime === null) return;
        
        const newCorrectAnswers = prompt('Enter correct answers:', player.correctAnswers);
        if (newCorrectAnswers === null) return;

        // Validate time format
        if (!/^\d{2}:\d{2}$/.test(newTime)) {
            alert('Invalid time format! Please use MM:SS format.');
            return;
        }

        // Update player data
        this.players[index].name = newName.trim();
        this.players[index].time = newTime;
        this.players[index].correctAnswers = parseInt(newCorrectAnswers);

        this.sortPlayers();
        this.renderTable();
        this.updateLastModified();
        this.showNotification(`${newName}'s information has been updated!`);
    }

    // Update last modified time
    updateLastModified() {
        const updateTimeElement = document.querySelector('.update-time');
        if (updateTimeElement) {
            const now = new Date();
            const options = { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            };
            const formattedDate = now.toLocaleDateString('en-US', options);
            updateTimeElement.textContent = `Terakhir diperbarui: ${formattedDate}`;
        }
    }

    // Show notification
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #14AC75;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 1000;
            transform: translateX(300px);
            transition: transform 0.3s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(300px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add event listeners
    addEventListeners() {
        const startBtn = document.querySelector('.start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', this.handleStartQuiz.bind(this));
        }

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault();
                this.showAddPlayerForm();
            }
            if (e.key === 'F5') {
                e.preventDefault();
                this.refreshScoreboard();
            }
        });

        // Add double-click to add new player
        document.addEventListener('dblclick', (e) => {
            if (e.target.tagName === 'BODY' || e.target.className.includes('container')) {
                this.showAddPlayerForm();
            }
        });
    }

    // Handle start quiz button click
    handleStartQuiz() {
        const actions = [
            'Start New Quiz',
            'Add New Player',
            'Refresh Scoreboard',
            'Export Data',
            'Import Data'
        ];

        const choice = prompt(`Choose an action:\n${actions.map((action, i) => `${i + 1}. ${action}`).join('\n')}\n\nEnter number (1-${actions.length}):`);
        
        const actionIndex = parseInt(choice) - 1;
        
        switch (actionIndex) {
            case 0:
                this.startNewQuiz();
                break;
            case 1:
                this.showAddPlayerForm();
                break;
            case 2:
                this.refreshScoreboard();
                break;
            case 3:
                this.exportData();
                break;
            case 4:
                this.importData();
                break;
            default:
                if (choice !== null) {
                    alert('Invalid selection!');
                }
        }
    }

    // Show add player form
    showAddPlayerForm() {
        const name = prompt('Enter player name:');
        if (!name) return;

        const time = prompt('Enter completion time (MM:SS):');
        if (!time || !/^\d{2}:\d{2}$/.test(time)) {
            alert('Invalid time format! Please use MM:SS format.');
            return;
        }

        const correctAnswers = prompt('Enter number of correct answers:');
        if (!correctAnswers || isNaN(correctAnswers)) {
            alert('Please enter a valid number for correct answers.');
            return;
        }

        this.addPlayer(name, time, correctAnswers);
    }

    // Start new quiz
    startNewQuiz() {
        if (confirm('Are you sure you want to start a new quiz? This will clear all current data.')) {
            this.players = [];
            this.renderTable();
            this.updateLastModified();
            this.showNotification('New quiz started! Scoreboard cleared.');
        }
    }

    // Refresh scoreboard
    refreshScoreboard() {
        this.sortPlayers();
        this.renderTable();
        this.updateLastModified();
        this.showNotification('Scoreboard refreshed!');
    }

    // Export data to JSON
    exportData() {
        const dataStr = JSON.stringify(this.players, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `scoreboard-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.showNotification('Data exported successfully!');
    }

    // Import data from JSON
    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (Array.isArray(importedData)) {
                        this.players = importedData;
                        this.sortPlayers();
                        this.renderTable();
                        this.updateLastModified();
                        this.showNotification('Data imported successfully!');
                    } else {
                        alert('Invalid file format!');
                    }
                } catch (error) {
                    alert('Error reading file: ' + error.message);
                }
            };
            reader.readAsText(file);
        };
        
        input.click();
    }

    // Add animations to elements
    addAnimations() {
        // Animate podium steps
        const steps = document.querySelectorAll('.step');
        steps.forEach((step, index) => {
            step.style.transform = 'translateY(50px)';
            step.style.opacity = '0';
            step.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                step.style.transform = 'translateY(0)';
                step.style.opacity = '1';
            }, 300 + index * 200);
        });

        // Animate cat
        const cat = document.querySelector('.cat');
        if (cat) {
            cat.style.transform = 'translateX(50px)';
            cat.style.opacity = '0';
            cat.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                cat.style.transform = 'translateX(0)';
                cat.style.opacity = '1';
            }, 1000);
        }

        // Animate container
        const container = document.querySelector('.outer-container');
        if (container) {
            container.style.transform = 'translateY(30px)';
            container.style.opacity = '0';
            container.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                container.style.transform = 'translateY(0)';
                container.style.opacity = '1';
            }, 800);
        }
    }

    // Animate table rows
    animateTableRows() {
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach((row, index) => {
            row.style.transform = 'translateX(-20px)';
            row.style.opacity = '0';
            row.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                row.style.transform = 'translateX(0)';
                row.style.opacity = '1';
            }, index * 100);
        });
    }
}

// Initialize scoreboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const scoreboard = new Scoreboard();
    
    // Make scoreboard globally accessible for debugging
    window.scoreboard = scoreboard;
    
    console.log('Scoreboard initialized successfully!');
    console.log('Available commands:');
    console.log('- Double-click anywhere to add a player');
    console.log('- Ctrl+N to add a new player');
    console.log('- F5 to refresh scoreboard');
    console.log('- Click on any player row to edit/remove');
    console.log('- Use window.scoreboard to access the scoreboard object');
});