import {Component, OnInit} from '@angular/core';
import {ChartsModel} from './charts.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  private chartWidth = 600;
  private chartHeight = 500;
  private chartTitle = 'Company Hiring Report';

  chartModel: ChartsModel;
  chartType = '';

  private singleColumnChart() {
    this.chartModel = {
      title: 'Country Growth',
      type: 'ColumnChart',
      data: [
        ['2014', 500],
        ['2015', 430],
        ['2016', 600],
        ['2017', 150],
        ['2018', 700]
      ],
      columnNames: ['Year', 'USA'],
      width: this.chartWidth,
      height: this.chartHeight
    };
  }

  private multiColumnChart() {
    this.chartModel = {
      title: this.chartTitle,
      type: 'ColumnChart',
      data: [
        ['2014', 500, 200],
        ['2015', 430, 560],
        ['2016', 600, 200],
        ['2017', 150, 400],
        ['2018', 700, 480]
      ],
      columnNames: ['Year', 'USA', 'Canada'],
      width: this.chartWidth,
      height: this.chartHeight
    };
  }

  private stackedColumnChart() {
    this.chartModel = {
      title: this.chartTitle,
      type: 'ColumnChart',
      data: [
        ['2014', 500, 200],
        ['2015', 430, 560],
        ['2016', 600, 200],
        ['2017', 150, 400],
        ['2018', 700, 480]
      ],
      columnNames: ['Year', 'USA', 'Canada'],
      width: this.chartWidth,
      height: this.chartHeight,
      options: {
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          minValue: 0
        },
        isStacked: true
      }
    };
  }

  private pieChart() {
    this.chartModel = {
      title: 'Country Growth',
      type: 'PieChart',
      data: [
        ['USA', 45.0],
        ['Canada', 26.8],
        ['India', 12.8],
        ['United Kingdom', 8.5],
        ['Germany', 6.2],
        ['France', 0.7]
      ],
      columnNames: ['Country', 'Percentage'],
      width: this.chartWidth,
      height: this.chartHeight,
      options: {
        colors: [
          '#1a34e0',
          '#5b17e0',
          '#7754ec',
          '#4ec5f1',
          '#b3fffd'],
        is3D: true
      }
    };
  }

  private basicAreaChart() {
    this.chartModel = {
      title: 'Company Review',
      type: 'AreaChart',
      data: [
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]
      ],
      columnNames: ['Year', 'Sales', 'Expenses'],
      width: this.chartWidth,
      height: this.chartHeight,
    };
  }

  private basicLineChart() {
    this.chartModel = {
      title: 'Average Temperatures of Cities',
      type: 'LineChart',
      data: [
        ['Jan', 7.0, -0.2, -0.9, 3.9],
        ['Feb', 6.9, 0.8, 0.6, 4.2],
        ['Mar', 9.5, 5.7, 3.5, 5.7],
        ['Apr', 14.5, 11.3, 8.4, 8.5],
        ['May', 18.2, 17.0, 13.5, 11.9],
        ['Jun', 21.5, 22.0, 17.0, 15.2],
        ['Jul', 25.2, 24.8, 18.6, 17.0],
        ['Aug', 26.5, 24.1, 17.9, 16.6],
        ['Sep', 23.3, 20.1, 14.3, 14.2],
        ['Oct', 18.3, 14.1, 9.0, 10.3],
        ['Nov', 13.9, 8.6, 3.9, 6.6],
        ['Dec', 9.6, 2.5, 1.0, 4.8]
      ],
      columnNames: ['Month', 'Washington', 'New York', 'L.A.', 'Seattle'],
      width: this.chartWidth,
      height: this.chartHeight,
      options: {
        hAxis: {
          title: 'Month'
        },
        vAxis: {
          title: 'Temperature'
        }
      }
    };
  }

  private loadChart(chartType: string) {
    switch (chartType) {
      case 'multiColumn':
        this.multiColumnChart();
        break;
      case 'stackedColumn':
        this.stackedColumnChart();
        break;
      case 'pie':
        this.pieChart();
        break;
      case 'basicArea':
        this.basicAreaChart();
        break;
      case 'basicLine':
        this.basicLineChart();
        break;
      case 'singleColumn':
        this.singleColumnChart();
        break;
      default:
        break;
    }
  }

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.chartType = this.activatedRoute.snapshot.params.chartType;

    this.activatedRoute.queryParams.subscribe(queryParams => {
      // console.info('queryParams', queryParams);
      this.chartType = queryParams.chartType;
      this.loadChart(queryParams.chartType);
    });
    this.activatedRoute.params.subscribe(routeParams => {
      // console.info('routeParams', routeParams);
      this.chartType = routeParams.chartType;
      this.loadChart(routeParams.chartType);
    });
  }

}
