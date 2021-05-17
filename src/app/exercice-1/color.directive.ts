import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  @HostListener("window:keydown", ["$event"]) windowClick($event) {
    console.log($event);
    console.log($event.key);
    let eventKey = $event.key;
    switch (eventKey) {
      case "ArrowUp":
        this.changeColor("red");
        break;
      case "ArrowRight":
        this.changeColor("green");
        break;
      case "ArrowDown":
        this.changeColor("purple");
        break;
      case "ArrowLeft":
        this.changeColor("orange");
        break;
      default:
        this.changeColor("black");
        break;
    }
  }
  constructor(private el: ElementRef) {}

  public changeColor(color: string) {
    console.log("[Color] : ", color);

    this.el.nativeElement.style.color = color;
  }
}
