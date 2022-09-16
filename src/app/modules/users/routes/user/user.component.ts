import html2canvas from 'html2canvas';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {exportSCV} from '../../../../common/helpers';
import {Post, User} from '../../../../common/interfaces';
import {StateService} from '../../../../common/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: User | undefined = this.stateService.users
    .find((user: User) => user.id === +(this.activatedRoute.snapshot.params as { id: string }).id);

  constructor(
    private stateService: StateService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  public exportCSV(): void {
    let csv = ['Id', 'User Id', 'Title', 'Body'].join(',') + '\r\n';

    const arrayFromCsv = csv.split(',');

    this.user?.posts.forEach((post: Post) => {
      csv += arrayFromCsv.map((title: string) => {
        switch (title) {
          case 'Id': {
            return post.id;
          }
          case 'User Id': {
            return post.userId;
          }
          case 'Title': {
            return post.title
          }
          case 'Body': {
            return post.body;
          }
          default: {
            return '';
          }
        }
      }).join(',') + '\r\n';
    });
    console.log(csv);
    exportSCV(csv, 'accounts.csv');
  }

  public saveAsImage(): void {
    html2canvas(document.body)
      .then((canvas: HTMLCanvasElement) => {
        // Convert the canvas to blob
        canvas.toBlob((blob: Blob | null) => {
          if (blob) {
            let link = document.createElement("a");
            link.download = "image.png";
            link.href = URL.createObjectURL(blob);
            link.click();
            link.remove();
          }
        }, 'image/png');
      });
  }

}
