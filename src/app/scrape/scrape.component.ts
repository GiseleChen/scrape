import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrape',
  templateUrl: './scrape.component.html',
  styleUrls: ['./scrape.component.css']
})
export class ScrapeComponent implements OnInit {
  /** Template reference to the canvas element */

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  private isMouseDown: boolean = false;
  constructor() { }

  ngOnInit(): void {

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(0, 0, 200, 200);

    this.ctx.globalCompositeOperation = 'destination-out';
  }
  onMouseMove(e) {
    if (this.isMouseDown) {
      this.drawLine(this.ctx, e.offsetX + e.movementX, e.offsetY + e.movementY);
    }
  }
  onMouseDown(e) {
    this.isMouseDown = true;

    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 15;
    this.ctx.lineCap = 'round';
    this.ctx.beginPath();
    this.ctx.moveTo(e.offsetX, e.offsetY);
  }
  onMouseUp(e) {
    this.isMouseDown = false;
    this.ctx.closePath();
  }

  drawLine(context, x2, y2) {
    context.lineTo(x2, y2);
    context.moveTo(x2, y2);
    context.stroke();
  }




}
