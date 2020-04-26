export class Eyes {
    constructor(
      private readonly centerPointX: number,
      private readonly centerPointY:number,
      private readonly centerRadius: number,
      private readonly centerColor: string,
    ) {}
  
    draw(context: CanvasRenderingContext2D) {
      context.beginPath();
      context.fillStyle = this.centerColor;
      context.arc(
        this.centerPointX,
        this.centerPointY,
        this.centerRadius,
        0,
        2 * Math.PI
      );
      context.arc(
        this.centerPointX*2,
        this.centerPointY,
        this.centerRadius,
        0,
        2 * Math.PI,
      );
      context.fill();
    }

  }
  