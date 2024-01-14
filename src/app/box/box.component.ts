import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  @ViewChild('boxContainer', { static: true }) boxContainer: ElementRef;
   showAlert(){
     this.name="Welcome RAO"
   }
   
   name="Muni"
   

  boxCounter = 0;

  constructor(private renderer: Renderer2) {}

  addBox() {
    const boxContainerElement = this.boxContainer.nativeElement;

    const boxDiv = this.renderer.createElement('div');
    this.renderer.addClass(boxDiv, 'box');
    this.renderer.setStyle(boxDiv, 'width', '100px');
    this.renderer.setStyle(boxDiv, 'height', '100px');
    this.renderer.setStyle(boxDiv, 'border', '1px solid #000');
     // Optional: Add border for better visibility
     this.renderer.setStyle(boxDiv, 'background-color', 'red'); 

    this.renderer.appendChild(boxContainerElement, boxDiv);

    this.boxCounter++;
}}
