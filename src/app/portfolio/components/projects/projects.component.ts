import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  closeResult = '';
  title!: string;
  description!: string
  imgUrl: Array<string> = [];
  rating!: number;
  client!: string;
  webAddress!: string;


  constructor(private modalService: NgbModal, private svs: ServicesService) {}

	open(content: any, productName: string) {

		this.svs.loadProjets(productName).then((res)=>{
			this.title = res.title
			this.description = res.description;
			this.rating = res.rating;
			this.client = res.client;
			this.webAddress = res.webAddress;
			// this.imgUrl.push("hhhh")
			res["imgUrl"].map((img: string)=>{
				this.imgUrl.push(img)
			});console.log(this.imgUrl);

			this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', fullscreen: true }).result.then(
				(result) => {
					this.closeResult = `Closed with: ${result}`;
				},
				(reason) => {
					this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
				},
			);	
		})
		
	}

	private getDismissReason(reason: any): string {
		this.imgUrl = [];
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
