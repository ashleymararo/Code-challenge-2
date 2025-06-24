let form = document.getElementById("event-form")
let input = document.getElementById("guestname")
let guestList = document.getElementById("guest-list")

let guests =[];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value.trim() === '') return;

  if (guests.length >= 10) {
    alert("Guest list is full!");
    return;
  }

  const guest = {
    id: Date.now(),
    name: input.value.trim(), 
    attending: true,
    timestamp: new Date().toLocaleString()

  };
  
  guests.push(guest);
  
  renderGuestList();

  input.value = '';
});

function deleteGuest(id) {
  guests = guests.filter((guest) => guest.id !== id);
  renderGuestList();
}

function toggleAttendance(id) {
  guests = guests.map((guest) => {
    if (guest.id === id) {
      return { ...guest, attending: !guest.attending };
    }
    return guest;
  });
  renderGuestList();
}

function renderGuestList() {
  guestList.innerHTML = '';
  
  guests.forEach((guest) => {
    const li = document.createElement('li');
    li.textContent = `${guest.name} — ${guest.attending ? 'Attending' : 'Not Attending'} Added at: ${guest.timestamp}`;


    const toggleBtn = document.createElement('button'); 
    toggleBtn.textContent = 'Attendance';
    toggleBtn.onclick = () => toggleAttendance(guest.id);
    li.appendChild(toggleBtn);

    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = () => deleteGuest(guest.id);
    li.appendChild(deleteBtn);

    guestList.appendChild(li);
  });
}
