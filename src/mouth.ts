export class Mouth {
    constructor(
      private readonly centerPointX: number,
      private readonly centerPointY:number,
      private readonly centerRadius: number,
      private readonly centerColor: string,
      private readonly direction: boolean,
    ) {}
  
    draw(context: CanvasRenderingContext2D) {
      context.beginPath();
      context.fillStyle = this.centerColor;
      context.strokeStyle = this.centerColor;
      context.arc(
        this.centerPointX,
        this.centerPointY,
        this.centerRadius,
        0,
        Math.PI,
        this.direction
      );
      context.stroke();
      context.beginPath();
    }

  }