
function bunnyroad(instructions: string[]): { x: number, y: number } {
    
  
    let position = { x: 0, y: 0 };
  
    for (let i = 0; i < instructions.length; i++) {
      const instruction = instructions[i];
  
      switch (instruction) {
        case "gauche":
          position.x--;
          break;
        case "droite":
          position.x++;
          break;
        case "nord":
          position.y++;
          break;
        case "sud":
          position.y--;
          break;
        default:
      }
    }
  
    
    return position;
  }
  
   