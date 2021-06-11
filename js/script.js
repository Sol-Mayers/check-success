let checkSuccess = new Vue({
  el: '#check-success',
  data: {
    parameters: {
      netProfit: {
        name: 'Чистая прибыль',
        all: [],
        newValue: '',
        show: false,
      },
      equityСapital: {
        name: 'Собственный капитал',
        all: [],
        newValue: '',
        show: false,
      },
      dividends: {
        name: 'Дивиденды',
        all: [],
        newValue: '',
        show: false,
      },
      profitability: {
        name: 'Рентабельность',
        all: [],
        newValue: '',
        show: false,
      },
      rating: {
        name: 'Место в рейтинге',
        all: [],
        newValue: '',
        show: false,
      },
    },
    xDigits: [49, 147, 245, 343, 441, 539, 637, 735, 833, 931, 1029, 1127],
  },
  methods: {
    addValue: function (index) {
      this.parameters[index].all.push({ digit: this.parameters[index].newValue.replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ').replace(/[^\d]/g, ''), customize: false, });
      this.parameters[index].newValue = '';
    },
    custItem: function (item) {
      item.customize = true;
      item.digit = item.digit.replace(/[^\d]/g, '').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
    },
    acceptChange: function (item) {
      if (item.digit !== '') {
        item.digit = item.digit.replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ').replace(/[^\d]/g, '');
        item.customize = false;
      } else {
        item.customize = true;
      }
    },
    showParam: function (parameter) {
      if(parameter.show) {
        parameter.show = false;
      } else {
        parameter.show = true;
      }
    },
    showToolTip: function (parameter) {
      let addParamToTable = document.querySelector('.add-param-to-table');
      if (parameter.all.length === 12 || parameter.newValue === '') {
        let toolTip = document.querySelector('.tooltip');
        toolTip.classList.add('showtip');
      }
    },
    hideToolTip: function (parameter) {
      let addParamToTable = document.querySelector('.add-param-to-table');
      if (parameter.all.length < 12 || parameter.newValue !== '') {
        let toolTip = document.querySelector('.tooltip');
        toolTip.classList.remove('showtip');
      }
    },
  },
});

