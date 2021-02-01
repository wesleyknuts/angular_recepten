import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recept } from '../recept';

@Component({
  selector: 'app-recepten',
  templateUrl: './recepten.component.html',
  styleUrls: ['./recepten.component.scss']
})
export class ReceptenComponent implements OnInit {
  receptForm: FormGroup;
  recepten: Recept[]= [];
  constructor() { }

  ngOnInit(): void {
    this.receptForm = new FormGroup(
      {
        'naam': new FormControl(null,Validators.required),
        'bereidingstijd': new FormControl(null),
        'ingredienten': new FormArray([])

      }
    );
    //this.receptForm.get('naam').setValue('start');
  }
  onSubmit(){
    let nieuwRecept:Recept = new Recept();
    nieuwRecept.naam = this.receptForm.value["naam"];
    nieuwRecept.bereidingstijd = this.receptForm.value["bereidingstijd"];
    nieuwRecept.ingredienten = this.receptForm.value["ingredienten"];
    this.recepten.push(nieuwRecept);
  }
  voegtoe(){
    const group= new FormGroup({
      'naam':new FormControl(null, Validators.required),
      'hoev':new FormControl(null, Validators.required)
    });
    (this.receptForm.get('ingredienten') as FormArray).push(group);
  }

  ingredienten(): FormArray{
    return (this.receptForm.get('ingredienten') as FormArray);
  }

}
