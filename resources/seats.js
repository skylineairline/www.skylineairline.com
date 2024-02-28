const numRows = 10; // Number of rows
const seatsPerRow = 6; // Number of seats per row
const totalSeats = numRows * seatsPerRow;

const seatMapElement = document.getElementById('seatMap');
const selectSeatsBtn = document.getElementById('selectSeatsBtn');
const selectedSeats = [];

// Function to assign seat class and price
function assignSeatClassAndPrice() {
  const classes = ['Economy', 'Business Class', 'First Class'];
  const prices = [1500, 3000, 5000]; // Sample prices for each class in Philippine Peso
  const randomIndex = Math.floor(Math.random() * classes.length);
  return { seatClass: classes[randomIndex], price: prices[randomIndex] };
}

// Generate seats
for (let row = 1; row <= numRows; row++) {
  const rowElement = document.createElement('div');
  rowElement.classList.add('row');

  for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    const { seatClass, price } = assignSeatClassAndPrice();
    seat.setAttribute('data-description', `Seat ${row}${String.fromCharCode(64 + seatNum)} - ${seatClass} - Price: ${price} PHP`);
    seat.setAttribute('data-price', `${price}`);
    seat.classList.add(seatClass.toLowerCase().replace(/\s+/g, '-')); // Add seat class as a CSS class
    seat.textContent = `${row}${String.fromCharCode(64 + seatNum)}`;
    rowElement.appendChild(seat);

    // Add click event listener to select/deselect seats
    seat.addEventListener('click', () => {
      seat.classList.toggle('selected');
      const seatId = `${row}${String.fromCharCode(64 + seatNum)}`;
      if (selectedSeats.includes(seatId)) {
        selectedSeats.splice(selectedSeats.indexOf(seatId), 1);
      } else {
        selectedSeats.push(seatId);
      }
    });
  }

  seatMapElement.appendChild(rowElement);
}

// Add click event listener to the "Select Seats" button
selectSeatsBtn.addEventListener('click', () => {
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat.');
  } else {
    const selectedSeatsInfo = selectedSeats.map(seatId => {
      const seatElement = document.querySelector(`.seat[data-description^="${seatId}"]`);
      const description = seatElement.getAttribute('data-description');
      const price = parseFloat(seatElement.getAttribute('data-price'));
      return { seatId, description, price };
    });
    const totalPrice = selectedSeatsInfo.reduce((acc, curr) => acc + curr.price, 0);
    const formattedSelectedSeats = selectedSeatsInfo.map(seat => `${seat.description}`).join('\n');
    alert(`Selected seats:\n${formattedSelectedSeats}\nTotal Price: ${totalPrice} PHP`);
    // Here you can proceed with further actions like submitting the selected seats to the server
  }
});
