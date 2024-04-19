document.addEventListener("DOMContentLoaded", function() {
    const NUM_FLOORS = 5; // Total number of floors

    // Function to open elevator doors
    function openElevatorDoor(side, floor) {
        const doorClass = `.door-${side}${floor}`;
        document.querySelector(doorClass).classList.add('open');
    }

    // Function to close elevator doors
    function closeElevatorDoor(side, floor) {
        const doorClass = `.door-${side}${floor}`;
        document.querySelector(doorClass).classList.remove('open');
    }

    // Function to handle button click events
    function handleButtonClick(floor) {
        return function() {
            openElevatorDoor('left', floor);
            openElevatorDoor('right', floor);

            // Close the doors after 2 seconds
            setTimeout(function() {
                closeElevatorDoor('left', floor);
                closeElevatorDoor('right', floor);
            }, 2000);
        };
    }

    // Attach click event listeners to each floor button
    for (let i = 0; i < NUM_FLOORS; i++) {
        const floorButtonId = `R${i}`;
        document.getElementById(floorButtonId).addEventListener('click', handleButtonClick(i));
    }
});




