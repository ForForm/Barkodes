// import { Component, Inject, OnInit } from '@angular/core';
import { LanguageMap } from './../interfaces/language.interface';

import AppUtil from './../interfaces/util';
import { NgModule, AfterViewInit, Inject, EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild, Optional, Output, SimpleChanges } from '@angular/core';
import { TableColumn } from '../../../@vex/interfaces/table-column.interface';
import { SubShiftDefinitionsComponent } from './subshift-definitions.component';
import { ShiftDefinitionsItemComponent } from '../shift/shift-definitions-item';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { filter } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icClose1 from '@iconify/icons-ic/close';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
//  import { Definition,DefinitionHourDetail } from './../definitions/interfaces/definition.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { DefinitionsService } from '../services/definitions.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { formatDate, Time } from "@angular/common";
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Style, StyleService } from './../.../../../../@vex/services/style.service';


export class Definition {
  type: string;
  id: number;
  code: string;
  multiplier: number;
  lowerLimit: Time;
  upperLimit: Time;


  constructor(definition) {
    this.type = definition.type;
    this.id = definition.id;
    this.code = definition.code;
    this.multiplier = definition.multiplier;
    this.lowerLimit = definition.lowerLimit;
    this.upperLimit = definition.upperLimit;
  }
}

export class DefinitionHourDetail {
  type: string;
  id: number;
  firstValue: number;
  finalValue: number;
  plainValue: number;
  sub: boolean;

  constructor(definitionDetail) {
    this.type = definitionDetail.type;
    this.id = definitionDetail.id;
    this.sub = definitionDetail.sub;
    this.firstValue = definitionDetail.firstValue;
    this.finalValue = definitionDetail.finalValue;
    this.plainValue = definitionDetail.plainValue;
  }
}


export const MY_FORMATS = {
  parse: {
    dateInput: "LL"
  },
  display: {
    dateInput: "LL",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: 'vex-shift-definitions',
  templateUrl: './shift-definitions.component.html',
  styleUrls: ['./shift.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],

  providers: [
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})



export class ShiftDefinitionsComponent implements OnInit {

  //  @ViewChild(WorkingtypesDefinitionsItemComponent,null) child:WorkingtypesDefinitionsItemComponent;
  // language: any = []; languageMap: LanguageMap = {};  
  public maskTime = [/[0-9]/, /\d/, ':', /\d/, /\d/];
  static id = 100;
  subject$: ReplaySubject<Definition[]> = new ReplaySubject<Definition[]>(1);
  data$: Observable<Definition[]> = this.subject$.asObservable();
  // definitions: Definition[];
  @Input()
  columns: TableColumn<Definition>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'ID', property: 'id', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Kod', property: 'code', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Durum', property: 'status', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: '??arpan', property: 'multiplier', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'AltLimit', property: 'lowerLimit', type: 'date', visible: true, cssClasses: ['font-medium'] },
    { label: '??stLimit', property: 'upperLimit', type: 'date', visible: true, cssClasses: ['font-medium'] },

    // { label: 'Ad??', property: 'name', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  @Input() languageMap: LanguageMap = {};


  tab = 0;
  roundingHours: any = [];
  roundingDays: any = [];
  workingTypesType: any = [{ kodu: 0, adi: 'Vardiya' }, { kodu: 1, adi: 'Serbest Vardiya' }];
  workingTypesStatus: any = [];
  definitions: any = [];

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  icAdd = icAdd;
  icEdit = icEdit;
  icMoreVert = icMoreVert;
  icClose = icClose;
  icMoreHoriz = icMoreHoriz;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Definition> | null;
  selection = new SelectionModel<Definition>(true, []);
  selectedIndex = 0;
  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icClose1 = icClose1;
  icPhone = icPhone;
  visible = false;
  label = '';
  codeV = false; nameV = false;
  firstDayValueV = false; finalDayValueV = false; plainDayValueV = false;
  firstHourValueV = false; finalHourValueV = false; plainHourValueV = false;
  searchCtrl = new FormControl();
  subcodeV = false; subnameV = false;
  isMobileLayout = false;
  saveClick = false; isSaved = false;
  saveEnabled = false;
  result: string;
  workingTypesCode: any = [];
  selectedStyle$ = this.styleService.style$;
  Style = Style;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ShiftDefinitionsComponent>,
    private fb: FormBuilder,
    private dialog: MatDialog,
    public definitionsService: DefinitionsService,
    private styleService: StyleService,
    private snackbar: MatSnackBar) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  closeDialog() {
    if (this.saveEnabled)
      this.openDialog(0, this.languageMap['De??i??iklikler iptal edilecek.'].labelName, 'save');
    else
      this.dialogRef.close(this.isSaved);
  }

  changeDetectEvent(saveEnabled) {

    this.saveEnabled = saveEnabled;
  }

  
 

  definitionGetWorkingTypes(id) {
  
    this.definitionsService.DefinitionGetWorkingTypes(id)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { id: res[key].ID.toString(), code: res[key].Code, name: res[key].Name };
          this.workingTypesCode.push(data);
        });

        console.log(this.workingTypesCode);
      }, err => {
        console.log(err);

      });

  }

  openDialog(ID, Temp, MethodName) {
    this.dialog.open(DemoDialogComponent3, {
      data: {
        temp1: Temp, temp2: this.languageMap['Devam etmek istedi??inize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hay??r'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        this.dialogRef.close(false);
      }
    });
  }




  save() { this.saveClick = !this.saveClick; this.isSaved = true; }



  ngOnInit() {
    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;
    // console.log(this.defaults.def);
    this.languageMap = this.defaults.languageMap;
 
    this.selectedIndex = (this.defaults.def.Type === 1 ? 1 : 0);
    this.defaults.update ? this.mode = 'update' : this.mode = 'create';
    this.definitionGetWorkingTypes(100);
  }



  onTabChanged($event) {

    this.selectedIndex = $event.index;
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  definitionGetTypesDistibution(row) {

    let id = 0;
    if (row === null) id = 0; else id = row;
    this.definitionsService.DefinitionGetWorkingTypeDistribution(id)
      .subscribe((res) => {
        this.subject$.next(<Definition[]>res);
        this.dataSource = new MatTableDataSource();

        this.data$.pipe(
          filter<Definition[]>(Boolean)
        ).subscribe(definitions => {
          this.definitions = definitions;
          this.dataSource.data = definitions;

          //  console.log(this.dataSource.data);
        });

        this.searchCtrl.valueChanges.pipe(
          untilDestroyed(this)
        ).subscribe(value => this.onFilterChange(value));

        // console.log(row);
        if (row !== null)
          this.dataSource.data.forEach(row1 => (row1.id === row.id ? this.selection.select(row1) : null));


      }, err => {
        console.log(err);

      });

  }

  deleteDistibutionRow(row) {
    this.definitionsService.DefinitionDeleteWorkingTypeDist(row.id)
      .subscribe((res) => {
        this.definitionGetTypesDistibution(this.defaults.def.id);
      }, err => {
        console.log(err);

      });
  }


  ngOnDestroy() {
  }

  definitionGetTypes(type, row) {
    let data;
    let id = 0;
    if (row === null) id = 0; else id = row.id;
    this.definitionsService.DefinitionGetType(type, id)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].id, adi: res[key].name };
          if (type === 'roundingHour')
            this.roundingHours.push(data);
          if (type === 'roundingDay')
            this.roundingDays.push(data);;
        });

      }, err => {
        console.log(err);

      });

  }



  definitionGetWorkingTypeEnums(type, code) {
    let data;
    this.definitionsService.DefinitionGetWorkingTypeEnums(type, code)
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          let data = { kodu: res[key].Code, adi: res[key].Name };
          if (type === 'Type')
            this.workingTypesType.push(data);
          if (type === 'Status')
            this.workingTypesStatus.push(data);

        });

      }, err => {
        console.log(err);

      });

  }



  waitProgress(message, timer) {
    this.snackbar.dismiss();
    let config = new MatSnackBarConfig();
    if (timer !== undefined) {
      config.duration = timer;
    }
    config.panelClass = ['message-position'];
    this.snackbar.open(message, "", config);

  }



  createDefinition() {
    const definition = this.form.value;
    definition.id = 0;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));
    this.dialogRef.close(this.definitions);
  }


  definitionPostWorkingTypeDist(obj) {
    obj.workingTypeID = this.defaults.def.id;
    this.definitionsService.DefinitionPostWorkingTypeDist(obj)
      .subscribe((res) => {
        //  const row= this.dataSource.data.filter(x => x.id === obj.id);     
        this.definitionGetTypesDistibution(obj.workingTypeID);
      }, err => {
        console.log(err);

      });
  }

  createSubDefinition() {
    const definition = this.form.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));

    this.dialog.open(SubShiftDefinitionsComponent, {
      data: { def: { id: 0, workingTypeID: definition.id, code: '', status: '', multiplier: 0 }, update: false, id: 0, lowerLimit: '00:00', upperLimit: '00:00' }
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        this.definitionPostWorkingTypeDist(updatedDefinition);
      }
    });
  }


  updateDistibutionRow(row) {
    const definition = this.form.value;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));

    this.dialog.open(SubShiftDefinitionsComponent, {
      data: { def: row, update: true, id: row.id }
    }).afterClosed().subscribe(updatedDefinition => {

      if (updatedDefinition) {
        this.definitionPostWorkingTypeDist(updatedDefinition);
      }
    });
  }

  updateDefinition() {
    const definition = this.form.value;
    definition.id = this.defaults.def.id;
    definition.CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    definition.Username = JSON.parse(sessionStorage.getItem('Username'));

    this.dialogRef.close(definition);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}


@Component({
  selector: 'definitions',
  template: `
  <div mat-dialog fxLayout="row" fxLayoutAlign="space-between center"  >
  <div><h3>{{data.temp1}}</h3></div>
      </div>

      <mat-dialog-content>
          <p>{{data.temp2}}  </p>
          <br/>
      </mat-dialog-content>


      <mat-dialog-actions align="end">
      <button mat-button color="primary" (click)="close('Yes')">{{data.Evet}}</button>
      <button mat-button (click)="close('No')">{{data.Hayir}}</button>
      </mat-dialog-actions>
  `
})

export class DemoDialogComponent3 {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent3>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}