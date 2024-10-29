// This is just a parody of ExpantaNum
class UltimiNumber
{
	constructor(number, arrow, repeat, layer)
	{
		this.number = (number>1e10)?Math.log10(number):number;
		this.arrow = arrow;
		this.repeat = (number>1e10)?(repeat+1):repeat;
		this.layer = layer;
		return {
			array: [[0,this.number],[1,this.repeat],[2,this.arrow],[3,this.layer]],
			string: "in beta"
		};
	}
}
UltimiNumber.tetrate = function(number, repeat)
{
	this.number = (number>10)?number:(10**number);
	this.repeat = (number>10)?(repeat+1):repeat;
	return "10^".repeat(this.repeat)+((repeat>1)?this.tetrate(this.number, this.repeat-1):this.number);
}
