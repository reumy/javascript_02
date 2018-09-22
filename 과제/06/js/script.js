class TV {
	constructor(){
	  let _company = '삼성';
	  this.inch = '50';
	  this.model = 'UHD50';

		this.getCompany = () => {
			console.log(_company);
		}

		this.setCompany = (company) => {
	    _company = company
	  }
	}
}

class AppTV extends TV {
	constructor(){
		super();
		this.inch = '60';
	}
	app (){
		// 앱기능 추가
	}
}

var tv = new TV();
var apptv = new AppTV();

console.log(tv._company);
tv.setCompany('LG');
tv.getCompany();
console.log(apptv.inch);
