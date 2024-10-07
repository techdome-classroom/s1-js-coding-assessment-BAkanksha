const getTotalIsles = function (grid) {


  // write your code here
  if(grid || grid.length==0){
    const row =grid.length;
    const col = grid[0].length;
    let islandCount=0;
    function dfs(r, c){
      if(r<0 || c<0||r>=row ||c>=cols || grid[r][c]==='W'){
        return;
      }
      grid[r][c] ='W';
      dfs(r-1,c);
      dfs(R+1,c);
      
    }
  }

};

module.exports = getTotalIsles;