export class Center {
    constructor(
      private readonly centerPoint: number,
      private readonly centerRadius: number,
      private readonly centerColor: string
    ) {}
  
    draw(context: CanvasRenderingContext2D) {
      context.beginPath();
      context.fillStyle = this.centerColor;
      context.arc(
        this.centerPoint,
        this.centerPoint,
        this.centerRadius,
        0,
        2 * Math.PI
      );
      context.fill();
    }
  }