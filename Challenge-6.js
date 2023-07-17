function groupSeats(seats, n) {
    const rows = seats.length;
    const columns = seats[0].length;
    let count = 0;
  
    for (let i = 0; i < rows; i++) {
      let empty = 0;
      for (let j = 0; j < columns; j++) {
        if (seats[i][j] === 0) {
          empty++;
          if (empty === n) {
            count++;
            empty = 0;
          }
        } else {
          empty = 0;
        }
      }
    }

    return count;
  }
  
  // Example usage
  const seats = 
  [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]];
  
  const n = 2;
  const seatingOptions = groupSeats(seats, n);
  console.log(seats)
  console.log(`No of seating options for the given array :`,seatingOptions);