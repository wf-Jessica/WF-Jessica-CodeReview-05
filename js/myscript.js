


for(var datas of data){
	row1.innerHTML += 
	`			
				
				<div class="card col-sm-12 col-md-6 col-lg-3 bg-light border rounded-lg shadow mb-5 mt-4 bg-white rounded" >
					
					<img class="card-img-top picture border rounded-lg shadow bg-white rounded"  src="${datas.img}" >
				
				
			
				<div class="card-body">
					<h3 class="card-title"> ${datas.Name},${datas.age}</h3>
					<p class="card-text font-italic">${datas.Motto}</p>
					<button class="border rounded-lg shadow bg-white rounded bg-info "id=${datas.id}>Read more..</button>
					<button class=" heart bg-light" id=${datas.id} >&#9825;</button>

					
				</div>
			</div>
			<div class="more">
				
			</div>
	`
	$(".heart").click(like);
	$(".heart").dblclick(like1);
		}
		function like() {
			$(this).css("color","red");
		
		}
		
		function like1() {
			$(this).css("color","dimgray");
		}


let arr=[]
  let buttons = document.querySelectorAll("button")
  console.log(buttons)
  for(button of buttons){
    button.onclick= function(e){
      arr.push(this.id);


      row2.innerHTML += 
	`			
				
				<div class=" card col-md-5 m-2 p-2 bg-light border rounded-lg shadow mb-5 mt-4 bg-white rounded" >
					<img class="card-img-top border rounded-lg shadow bg-white rounded" id="picture1"  src="${data[parseInt(this.id) - 1].img}" >
				
				<div class="card-body">
					<h3 class="card-title">Name: ${data[parseInt(this.id) - 1].Name}</h3>
					<h6 class="card-text">Age: ${data[parseInt(this.id) - 1].age}</h6>
					<p class="card-text font-italic"> Motto: ${data[parseInt(this.id) - 1].Motto}</p>
					<p class="card-text ">Hobbys: ${data[parseInt(this.id) - 1].hobbys}</p>
					<p class="card-text ">Favourite Music: ${data[parseInt(this.id) - 1].favMusic}</p>
					<button class=" remove border rounded-lg shadow bg-white rounded bg-info">Remove</button>
				</div>
			</div>
			<div id="more">
				
			</div>
	`
	$(".remove").click(remove);
}
}
function remove() {
			$(this.parentNode.parentNode).remove();
		
		}

