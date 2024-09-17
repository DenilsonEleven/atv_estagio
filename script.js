document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    
    
    
    const response = await fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, date, time })
    });
    
    const result = await response.json();
    
    document.getElementById('message').textContent = result.message;
});

document.getElementById('viewBookings').addEventListener('click', async function() {
    const response = await fetch('http://localhost:3000/bookings');
    const bookings = await response.json();
    
    const bookingsList = document.getElementById('bookingsList');
    bookingsList.innerHTML = '';
    
    bookings.forEach(booking => {
        const bookingItem = document.createElement('div');
        bookingItem.className = 'booking-item';
        bookingItem.textContent = `Nome: ${booking.name}, Data: ${booking.date}, Hora: ${booking.time}`;
        bookingsList.appendChild(bookingItem);
    });
});