let sub = document.getElementById('sub')

let sal = document.getElementById('sal')

let sal1 = document.getElementById('sal1')

let sal3 = document.getElementById('sal3')

let sal4 = document.getElementById('sal4')








let obj = {

	value: 6000000,
	myfunction: function(){
		
		return (sub.value * 21) / 100;
	},

	mysoc: function () {
		if(sub.value <= 500000){

			return (sub.value * 4.5) /100
		}else if (sub.value > 500000 && sub.value <= 1020000) {
			return ((sub.value * 10)/100 - 27500)
		}else{
			return(74500)
		}

		
	},

	mydrosh: function () {

		if (sub.value > 100000) {

			return(1500)

		}else if(sub.value >= 100001 && sub.value <= 200000){

			return(3000)
		}else if(sub.value >= 200001 && sub.value <= 500000){

			return(5500)
		}else if(sub.value >= 500001 && sub.value <= 1000000){

			return(8500)
		}else if(sub.value > 1000001){

			return(15000)
		}


			
		},


	mysalary:function (){
		return(this.value - (this.myfunction() + this.mysoc() + this.mydrosh()))
	},

};



console.log(obj.myfunction());
console.log(obj.mysoc());
console.log(obj.mydrosh());
console.log(obj.mysalary());


	document.getElementById("sub").addEventListener("keyup" , function(){

	obj.value = +document.getElementById('sub')

	document.getElementById('sal').innerHTML=obj.myfunction()

	document.getElementById('sal1').innerHTML=obj.mysoc()

	document.getElementById('sal3').innerHTML=obj.mydrosh()

	document.getElementById('sal4').innerHTML=obj.mysalary()

	

})




		






