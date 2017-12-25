document.addEventListener("DOMContentLoaded", function() {

	/* Your code goes here */
	

	var rootButton = document.querySelector('#root');
	rootButton.addEventListener('click',function(){
		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/',
			method: 'GET',
			dataType: 'Text'
		});
	});

	var pingButton = document.querySelector('#ping');
	var section3456 = document.querySelector('#step3456')
	var newElement = document.createElement('div');
	section3456.appendChild(newElement);
	pingButton.addEventListener('click',function(){
		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/pong',
			method: 'GET',
			dataType: 'Text'
		}).done(function(responseData){
			console.log(responseData)
			newElement.innerHTML = responseData
		}).fail(function(){
			newElement.innerHTML = 'Not Ping'
			console.log('failed the request')
		}).always(function(){
			console.log('Hey the request finished');
		});
	});

	var countButton = document.querySelector('#count');
	var section7 = document.querySelector('#step7');
	var newElement2 = document.createElement('div');
	section7.appendChild(newElement2);
	countButton.addEventListener('click',function(){
		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/count',
			method: 'GET',
			dataType: 'Text'
		}).done(function(responseData){
			newElement2.innerHTML = responseData
			console.log(responseData);
		});
	});

	var timeButton = document.querySelector('#time');
	var section8 = document.querySelector('#step8');
	var newElement3 = document.createElement('div');
	section8.appendChild(newElement3);
	timeButton.addEventListener('click',function(){
		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/time',
			method: 'GET',
			data: '{timezone: Europe/Sofia}',
			dataType: 'Text'
		}).done(function(responseData){
			newElement3.innerHTML = responseData
			console.log(responseData);
		});
	});


	var carButton = document.querySelector('#html');
	var section9 = document.querySelector('#step9');
	var newElement4 = document.createElement('ul');
	section9.appendChild(newElement4);
	carButton.addEventListener('click',function(){
		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/a_car',
			method: 'GET',
			dataType: 'html'
		}).done(function(responseData){
			var listItem = document.createElement('li');
			newElement4.insertAdjacentElement('beforeend',listItem);
			listItem.innerHTML = responseData;
			console.log(responseData);
		});
	});

});
