import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'CompanyName',
      type: 'input',
      templateOptions: {
        label: 'Company Name',
        placeholder: 'Company Name',
        description: 'Company Name',
      },
      className: 'Title',
    },
    {
      key: 'YearEnd',
      type: 'select',
      templateOptions: {
        label: 'Year End',
        options: [
          {
            label: '2019',
            value: '2019',
          },
          {
            label: '2020',
            value: '2020',
          },
          {
            label: '2021',
            value: '2021',
          },
          {
            label: '2022',
            value: '2022',
          },
        ],
      },
      className: 'Title',
    },
    {
      template: '<hr /><div><strong>Changes in year:</strong></div>',
    },
    {
      key: 'ChangeInYear',
      fieldGroup: [
        {
          key: 'isAddressChange',
          type: 'select',
          templateOptions: {
            label: 'Any change in address during the year ?',
            options: [
              {
                label: 'Yes',
                value: 'Yes',
              },
              {
                label: 'Yes',
                value: 'No',
              },
            ],
          },
          className: 'Title',
        },
        {
          key: 'IsActivityChange',
          type: 'select',
          templateOptions: {
            label: 'Any change in activity during the year ?',
            options: [
              {
                label: 'Yes',
                value: 'Yes',
              },
              {
                label: 'No',
                value: 'No',
              },
            ],
          },
          className: 'IsActivityChange',
        },
        {
          key: 'IsCapitalStructureChange',
          type: 'select',
          templateOptions: {
            label: 'Any change in capital structure during the year?',
            options: [
              {
                label: 'Yes',
                value: 'Yes',
              },
              {
                label: 'No',
                value: 'No',
              },
            ],
          },
        },
        {
          key: 'isSubsidiaries',
          type: 'select',
          templateOptions: {
            label: 'Any change in subsidiaries during the year?',
            options: [
              {
                label: 'Yes',
                value: 'Yes',
              },
              {
                label: 'No',
                value: 'No',
              },
            ],
          },
          className: 'isSubsidiaries',
        },
      ],
      fieldGroupClassName: 'ChangeInYear',
      className: 'Change',
    },
    {
      template:
        '<hr /><div><strong>Leasing commitments (engagements de crédit bail)</strong></div>',
    },
    {
      key: 'LeasingCommitments ',
      fieldGroup: [
        {
          key: 'FixedAssetsLeasing',
          type: 'input',
          templateOptions: {
            label: 'Fixed assets leasing commitments (excluding real estate)',
            type: 'number',
            placeholder: 'Fixed assets leasing commitments',
            description: 'Fixed assets leasing commitments',
          },
          className: 'FixedAssetsLeasing',
        },
        {
          key: 'InitialPriceFALeased',
          type: 'input',
          templateOptions: {
            label: 'Initial price of fixed assets leased',
            type: 'number',
            placeholder: 'Initial price of fixed assets leased',
            description: 'Initial price of fixed assets leased',
            required: true,
          },
          className: 'InitialPriceFALeased',
        },
        {
          key: 'RealEstateLeasing',
          type: 'input',
          templateOptions: {
            label: 'Real estate leasing commitments',
            type: 'number',
            placeholder: 'Real estate leasing commitments',
            description: 'Real estate leasing commitments',
          },
          className: 'RealEstateLeasing',
        },
      ],
      fieldGroupClassName: 'Leasing Commitments',
      className: 'LeasingCommitments',
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
