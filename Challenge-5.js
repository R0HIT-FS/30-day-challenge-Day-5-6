function spotlightMap(grid) {
    const rows = grid.length;
    const columns = grid[0].length;
    const spotlightGrid = [];
  
    for (let i = 0; i < rows; i++) {
      spotlightGrid[i] = [];
      for (let j = 0; j < columns; j++) {
        let sum = grid[i][j];
  
    
        if (i > 0) {
          sum += grid[i - 1][j]; 
          if (j > 0) sum += grid[i - 1][j - 1];
          if (j < columns - 1) sum += grid[i - 1][j + 1];
        }
        if (i < rows - 1) {
          sum += grid[i + 1][j];
          if (j > 0) sum += grid[i + 1][j - 1];
          if (j < columns - 1) sum += grid[i + 1][j + 1];
        }
        if (j > 0) sum += grid[i][j - 1];
        if (j < columns - 1) sum += grid[i][j + 1];
  
        spotlightGrid[i][j] = sum;
      }
    }
  
    return spotlightGrid;
  }
  
  const grid = [
    [100,200,300],
    [400,500,600],
    [700,800,900]
  ];
  
  const spotlightGrid = spotlightMap(grid);
  console.log('the spot light sum of the grid\n' ,grid, "is: \n")
  console.log(spotlightGrid);