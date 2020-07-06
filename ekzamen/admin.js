let choosed_obj;

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};



function print_arr_pagin(arr){
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	let page_container = document.querySelector('#print_rest');

			let update_page = true;
			
			
			
			
			
			
			
			const notesOnPage = 12;
			const countOfPages = Math.ceil(arr.length / notesOnPage);
			
			
			
			
			
			
			
			
			
			
			
			let pag_div = document.createElement("div");
			pag_div.id = "pagination"

			
			
			pag_div.innerHTML = 
			`<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class=" prev input-group-text" style="cursor:pointer">&laquo;</span>
				</div>
				<input type="text" style="width:50px" class="form-control" oninput="changedNumber()" value="1">
				<div class="input-group-append">
					<span class="next input-group-text" style="cursor:pointer">&raquo;</span>
				</div>
			</div>`
			
			
			document.getElementById('input_pagination').append(pag_div);
			

			
			
			
			document.querySelector('#pagination input').oninput = () => {
			    if(!update_page) return
			    if(!document.querySelector('#pagination input').value){
			        show(1)
			        return
			    }
			    if(document.querySelector('#pagination input').value > countOfPages || document.querySelector('#pagination input').value < 1) return
			    update_page = false
			    setInterval(() => {update_page = true}, 1000)
			    show(document.querySelector('#pagination input').value)
			}
			
			document.querySelector('#pagination .next').onclick = () => {
			    if(document.querySelector('#pagination input').value >= countOfPages) return 
			    	if(!document.querySelector('#pagination input').value) 
			    		document.querySelector('#pagination input').value = 1; 
			    document.querySelector('#pagination input').value = parseInt(document.querySelector('#pagination input').value) + 1
			    show(document.querySelector('#pagination input').value)
			}
			document.querySelector('#pagination .prev').onclick = () => {
			    if(document.querySelector('#pagination input').value <= 1) return
			    	 if(!document.querySelector('#pagination input').value) 
			    	 	document.querySelector('#pagination input').value = 1;
			    document.querySelector('#pagination input').value = parseInt(document.querySelector('#pagination input').value) - 1
			    show(document.querySelector('#pagination input').value)
			}
			show()
			function show(page = 1){
			    if (page > countOfPages) return
			    page_container.innerHTML = arr.slice((page - 1) * notesOnPage, page * notesOnPage).map((element) => {
			        return `
			        <div class="col-md-4">
			            <div class="card mb-4 shadow-sm">
							<div class="card-body">
								<div class="row">
									<div class="col-12" style=" height: 60px;"><p class="card-text" id="card">${String(element.name)}(${String(element.typeObject)})</p></div>
									<div class="col-12" style=" height: 120px;"><hr><small class="text-muted">${String(element.address)}</small></div>
								</div>	
								<div class="d-flex justify-content-between align-items-center">
									<div class="btn-group">
										<button type="button" class="moreInformation_button btn btn-sm btn-outline-success" data-toggle="modal" data-target="#moreInformation">...</button>
										
									</div>
									<div class="btn-group">
										<button type="button" class="changeInformation_button btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#changeInformation">
											<svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
												<path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
											</svg>
										</button>
									</div>
									
									
									
									
			              		</div>
			            	</div>
						</div>
					</div>
			        `;
			    }).join('')
			
			}
	
	
			ShowMoreInfo();
			changeInfo();
			deleteInfo();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//Для кнопки подробнее в списке заведений
	function ShowMoreInfo(){
		let all_moreInformation_buttons = document.getElementsByClassName('moreInformation_button btn btn-sm btn-outline-success');
		
		for (let button of all_moreInformation_buttons) { 
			button.onclick = () => {//начало события клика на выбранную кнопку у заведения
							
				
				
							
							
				console.log(String(button.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.innerHTML));//"имя"+(+"тип"+)				
				console.log(String(button.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.lastElementChild.innerHTML))//адрес выбранного заведения
								
								
				document.getElementById('modal_name').innerHTML="";
				document.getElementById('modal_admArea').innerHTML="";
				document.getElementById('modal_district').innerHTML="";
				document.getElementById('modal_address').innerHTML="";
				document.getElementById('modal_rate').innerHTML="";	
				document.getElementById('modal_operatingCompany').innerHTML = "";	
				document.getElementById('modal_isNetObject').innerHTML="";
				document.getElementById('modal_seatsCount').innerHTML="";
				document.getElementById('modal_socialPrivileges').innerHTML="";
				document.getElementById('modal_publicPhone').innerHTML="";
				document.getElementById('modal_geogr').innerHTML="";								
							
							
				let choosed_address = String(button.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.lastElementChild.innerHTML);
				let choosed_name_type = String(button.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.innerHTML);
				
				let arr_price_obj = arr.filter((element) => {
										
		
										
					if( (String(element.name+"("+element.typeObject+")") == choosed_name_type ) && (element.address ==  choosed_address) ){
											
						console.log(element);
						choosed_obj = element;//для модального окна
						return element;
											
					}
				});//для поиска данных о выбранном объекте		
							
							
							
							
							
							
							
				pItem_modal_address = document.createElement('p');
				pItem_modal_address.innerHTML = `<small class="text-muted">${String(choosed_obj.address)}</small>`;
										
				pItem_modal_rate = document.createElement('p');
				pItem_modal_rate.innerHTML =    `<svg class="bi bi-star-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
												</svg> ${String(choosed_obj.rate/10)}`;
		
				let socialPrivileges;				
				if (String(choosed_obj.socialPrivileges) == 0){
					socialPrivileges = "Нет"
				}
				else{
				socialPrivileges = "Есть"	
				} 				
				
				let isNetObject;				
				if (String(choosed_obj.isNetObject) == 0){
					isNetObject = "Нет"
				}
				else{
				isNetObject = "Да"	
				} 	
				
				
				let operatingCompany;
				if (String(choosed_obj.operatingCompany) == ""){
					operatingCompany = "Отсутствует"
				}
				else{
				operatingCompany = String(choosed_obj.operatingCompany);	
				} 				
								
				document.getElementById('modal_name').append(`${String(choosed_obj.name)}`);
				document.getElementById('modal_admArea').append(`${String(choosed_obj.admArea)}`);
				document.getElementById('modal_district').append(`${String(choosed_obj.district)}`);
				document.getElementById('modal_address').append(pItem_modal_address);
				document.getElementById('modal_rate').append(pItem_modal_rate);
				document.getElementById('modal_operatingCompany').append(`${operatingCompany}`);
				document.getElementById('modal_isNetObject').append(`${isNetObject}`);
				document.getElementById('modal_seatsCount').append(`${String(choosed_obj.seatsCount)}`);
				document.getElementById('modal_socialPrivileges').append(`${socialPrivileges}`);
				document.getElementById('modal_publicPhone').append(`${String(choosed_obj.publicPhone)}`);
				document.getElementById('modal_geogr').append(`-`);			
									
								
				
					
					
					
					
			};//конец события на нажатие кнокпи подробнее
		
		
		
		}//конец перебора кнопок
		
	}	
	
	
	
	

	
	
	
	//Для кнопки изменения информации	
	function changeInfo(){	
		let all_changeInformation_buttons = document.getElementsByClassName('changeInformation_button btn btn-sm btn-outline-secondary');
		
		for (let button of all_changeInformation_buttons) { 
			button.onclick = () => {//начало события клика на выбранную кнопку у заведения
				
				console.log(String(button.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.innerHTML));//"имя"+(+"тип"+)				
				console.log(String(button.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.lastElementChild.innerHTML))//адрес выбранного заведения
				
				
				
				
				
				
				document.getElementById('print_dishes').innerHTML="";
				
				document.getElementById('modal_name_2').innerHTML="";
	
				document.getElementById('modal_operatingCompany_2').innerHTML = "";
				

				document.getElementById('modal_socialDiscount_2').innerHTML="";

				document.getElementById('modal_seatsCount_2').innerHTML="";
				document.getElementById('modal_publicPhone_2').innerHTML="";
				document.getElementById('modal_address_2').innerHTML="";

				document.getElementById('modal_rate_2').innerHTML="";
				
	
		
				
		
				
				let choosed_address = String(button.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.lastElementChild.innerHTML);
				let choosed_name_type = String(button.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.innerHTML);

				let arr_price_obj = arr.filter((element) => {
										
		
										
					if( (String(element.name+"("+element.typeObject+")") == choosed_name_type ) && (element.address ==  choosed_address) ){
											
						console.log(element);
						choosed_obj = element;//для модального окна
						return element;
											
					}
				});//для поиска данных о выбранном объекте	
				
				
				
				
				
				console.log("Начало проверки");
							
				
				document.getElementById('modal_admArea_2').childNodes.forEach(element =>{
					if(String(element.innerHTML) == choosed_obj.admArea)
						element.setAttribute("selected","selected"); 
				})
				
				
				document.getElementById('modal_district_2').childNodes.forEach(element =>{
					if(String(element.innerHTML) == choosed_obj.district)
						element.setAttribute("selected","selected"); 
				
				})
				
				document.getElementById('modal_typeObject_2').childNodes.forEach(element =>{
					if(String(element.innerHTML) == choosed_obj.typeObject)
						element.setAttribute("selected","selected"); 
				
				})
				
				
				addAtribToCheck(choosed_obj.isNetObject, 'modal_isNetObject_2_1', 'modal_isNetObject_2_2');
				addAtribToCheck(choosed_obj.socialPrivileges, 'modal_socialPrivileges_2_1', 'modal_socialPrivileges_2_2');
				
				function addAtribToCheck(objVal, docId1, docId2){

					if(objVal == true)
						document.getElementById(docId1).setAttribute("checked","checked"); 
					else {
						document.getElementById(docId2).setAttribute("checked","checked");
					}
									
				};
				
				
				
				console.log("Конец проверки");
				
				
				
				
				
				let arr_price = Object.values(choosed_obj).slice(8,18);//делает объект price_obj массивом и вырезает ценники => массив цен
				console.log(arr_price);
				
				
				
				arr_price.forEach(function(element,i){
				let divItemPr = document.createElement('div');
						divItemPr.className = "form-group col-md-6";
						divItemPr.innerHTML = 
						`
							<label for="modal_set_${i+1}_2">set_${i+1}</label>
							<input type="text" class="form-control" id="modal_set_${i+1}_2" value='${element}'required>
						`
						document.getElementById('print_dishes').append(divItemPr);	
						
				});
				
				
				document.getElementById('modal_name_2').value = String(choosed_obj.name);
				document.getElementById('modal_operatingCompany_2').value = String(choosed_obj.operatingCompany);
				document.getElementById('modal_socialDiscount_2').value = String(choosed_obj.socialDiscount);
				document.getElementById('modal_seatsCount_2').value = String(choosed_obj.seatsCount);
				document.getElementById('modal_publicPhone_2').value = String(choosed_obj.publicPhone);
				document.getElementById('modal_address_2').value = String(choosed_obj.address);
				document.getElementById('modal_rate_2').value = String(choosed_obj.rate);
				

				
				change_Info_modal(document.getElementById("change_button_modal_2"), arr);
				
				

				
				
				
				
				
				
			};//конец события на нажатие кнокпи редактировать
		
		}//конец перебора кнопок редактирования
		
		
	}//конец функции	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	

	
}//конец функции 








let obXhr = new XMLHttpRequest();
obXhr.open('GET', `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1` );
obXhr.send();
	
obXhr.onreadystatechange =() => {
	if(obXhr.readyState != 4) return;
	if(obXhr.status != 200){
		alert('Error server ' + obXhr.status + ' ' + obXhr.statusText);
		return;
	}
	
	
	
	
	
	let arr_all = JSON.parse(obXhr.response).map(elem=>(
			{
				id : elem.id,
				name: elem.name ,
				address: elem.address ,
				admArea: elem.admArea ,
				district: elem.district ,
				rate: elem.rate ,
				typeObject: elem.typeObject,
				socialDiscount: elem.socialDiscount,
				set_1 : elem.set_1,
				set_2 : elem.set_2,
				set_3 : elem.set_3,
				set_4 : elem.set_4,
				set_5 : elem.set_5,
				set_6 : elem.set_6,
				set_7 : elem.set_7,
				set_8 : elem.set_8,
				set_9 : elem.set_9,
				set_10 : elem.set_10,
				operatingCompany : elem.operatingCompany,
				publicPhone : elem.publicPhone,
				seatsCount : elem.seatsCount,
				socialPrivileges : elem.socialPrivileges,
				created_at : elem.created_at,
				updated_at : elem.updated_at,
				isNetObject : elem.isNetObject
			}
		));
	
	
	
	
	
	
	
	
	
	
	
	
		
		
	function adminjs(){
			
			
		console.log(JSON.parse(obXhr.response));
		let admArea = JSON.parse(obXhr.response).map(Area => {return Area.admArea;});
		let district = JSON.parse(obXhr.response).map(District => {return District.district;});
		let typeObject = JSON.parse(obXhr.response).map(Type => {return Type.typeObject;});
		(unique(admArea)).forEach(element => {
			let admAreaOption = document.createElement('option');
			admAreaOption.innerHTML = `${String(element)}`;
			document.getElementById('inputadmArea').append(admAreaOption);
			let admAreaOption_modal_2 = document.createElement('option');
			admAreaOption_modal_2.innerHTML = `${String(element)}`;
			document.getElementById('modal_admArea_2').append(admAreaOption_modal_2);
			let admAreaOption_modal_4 = document.createElement('option');
			admAreaOption_modal_4.innerHTML = `${String(element)}`;
			document.getElementById('modal_admArea_4').append(admAreaOption_modal_4);
				
		});
		(unique(district)).forEach(element => {
			let districtOption = document.createElement('option');
			districtOption.innerHTML = `${String(element)}`;
			document.getElementById('inputDistrict').append(districtOption);
			let districtOption_modal_2 = document.createElement('option');
			districtOption_modal_2.innerHTML = `${String(element)}`;
			document.getElementById('modal_district_2').append(districtOption_modal_2);
			let districtOption_modal_4 = document.createElement('option');
			districtOption_modal_4.innerHTML = `${String(element)}`;
			document.getElementById('modal_district_4').append(districtOption_modal_4);
			
		});
		(unique(typeObject)).forEach(element => {
			let typeObjectOption = document.createElement('option');
			typeObjectOption.innerHTML = `${String(element)}`;
			document.getElementById('inputtypeObject').append(typeObjectOption);
			let typeObjectOption_modal_2 = document.createElement('option');
			typeObjectOption_modal_2.innerHTML = `${String(element)}`;
			document.getElementById('modal_typeObject_2').append(typeObjectOption_modal_2);
			let typeObjectOption_modal_4 = document.createElement('option');
			typeObjectOption_modal_4.innerHTML = `${String(element)}`;
			document.getElementById('modal_typeObject_4').append(typeObjectOption_modal_4);
			
		});
		
		
		print_arr_pagin(arr_all);
		
		
		

		
	}// конец 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
					


	
	function pag(){
			console.log('')

		itog = 0;
			
			
		document.getElementById('print_rest').innerHTML = "";
		document.getElementById('input_pagination').innerHTML = "";
			
			
		let typeOb = document.getElementById('inputtypeObject').value;
		let Distr = document.getElementById('inputDistrict').value;
		let admAr = document.getElementById('inputadmArea').value;

		let name = document.getElementById('inputName').value;
		
		let SocialPrivileges = document.getElementById('inputSocialPrivileges').value;
		let IsNetObj = document.getElementById('inputIsNetObj').value;
		let SeatsCountFrom = document.getElementById('inputSeatsCountFrom').value;
		let SeatsCountTo = document.getElementById('inputSeatsCountTo').value;
		let CreatedAtFrom = document.getElementById('inputCreatedAtFrom').value;
		let CreatedAtTo = document.getElementById('inputCreatedAtTo').value;
		
		
		arr_all.forEach((element) =>{
			if(element.created_at != null)
			console.log(String(element.created_at).split('T')[0]);
		})
		
		
		console.log(SeatsCountFrom +"-"+ SeatsCountTo);
		let k = 0;
		let arr_print = arr_all.filter((element) => {
			if( ((CreatedAtFrom.length == 0) && (CreatedAtTo.length == 0)) || ((CreatedAtFrom.length == 0) && ( String(element.created_at).split('T')[0] <= CreatedAtTo)) || ((String(element.created_at).split('T')[0] >= CreatedAtFrom) && (CreatedAtTo.length == 0)) || ((String(element.created_at).split('T')[0] >= CreatedAtFrom) && ( String(element.created_at).split('T')[0] <= CreatedAtTo))  )	
				if( ((SeatsCountFrom.length == 0) && (SeatsCountTo.length == 0)) || ((SeatsCountFrom.length == 0) && ( element.seatsCount <= Number(SeatsCountTo))) || ((element.seatsCount >= Number(SeatsCountFrom)) && (SeatsCountTo.length == 0)) || (element.seatsCount >= (Number(SeatsCountFrom)) && ( element.seatsCount <= Number(SeatsCountTo)))  )	
					if((element.name == name) || (name.length == 0))
				    	if((element.admArea == admAr) || (admAr.length == 0))
							if(Distr == element.district || Distr.length == 0)
								if( typeOb == element.typeObject || typeOb.length == 0)
									if(((SocialPrivileges == "Есть") && (Number(element.socialPrivileges) != 0)) || ((SocialPrivileges == "Нет") && (Number(element.socialPrivileges) == 0)) || (SocialPrivileges.length == 0))
										if(((IsNetObj == "Да") && (Number(element.isNetObject) != 0)) || ((IsNetObj == "Нет") && (Number(element.isNetObject) == 0)) || (IsNetObj.length == 0))
										{
											k++;
											return element;
			    						}
				
				
				
				
				
				
				
							    					
	    }).sort((a, b) => a.rate < b.rate ? 1 : -1);//конец фильтрации массива по нашим параметрам + отсортировано по убыванию рейтинга
	        
	        
	        
	    console.log(k);
	       		
			
		if(k>0 )
		{
		
			print_arr_pagin(arr_print);


		}//есть ли рестораны
		
		else{
			divrItem = document.createElement('div');
			divrItem.className = "col-md-12";
			divrItem.align = 'center';
			divrItem.innerHTML = '<h1>Ничего не найдено</h1> '
			document.getElementById('print_rest').append(divrItem);
		}

	}//Конец события на нажатие кнопку поиск(лупа) фильтра

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	document.addEventListener("DOMContentLoaded", adminjs());
		
	document.getElementById("FilterFindButton").addEventListener('click',pag);
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
}//запрос на получение всех данных










function createInfo(){
	
	
	
	
	
	
	
	let new_obj = {};
						
	new_obj["name"] = document.getElementById('modal_name_4').value;
							
						
	new_obj["operatingCompany"] = document.getElementById('modal_operatingCompany_4').value;
							
						
	new_obj["socialDiscount"] = Number(document.getElementById('modal_socialDiscount_4').value);
							
	new_obj["seatsCount"] = Number(document.getElementById('modal_seatsCount_4').value);
							
						
	new_obj["publicPhone"] = document.getElementById('modal_publicPhone_4').value;	
							
	new_obj["address"] = document.getElementById('modal_address_4').value;	
							
				
	new_obj["rate"] = Number(document.getElementById('modal_rate_4').value);	

	new_obj["admArea"] = document.getElementById('modal_admArea_4').value;
						
						
	new_obj["district"] = document.getElementById('modal_district_4').value;
							
						
	new_obj["typeObject"] = document.getElementById('modal_typeObject_4').value;
	
							
						

	getRadio2('input[name="inlineRadioOptions4_1"]', 'isNetObject');
	getRadio2('input[name="inlineRadioOptions4_2"]', 'socialPrivileges');
												
			
			
			
			
			
			
			
			
			
			
						
						
	function getRadio2(inputRadioName, keyName){
		let radio = document.querySelectorAll(inputRadioName);

			if (radio[0].checked) 
				new_obj[keyName] = 1;
				
				
			if(radio[1].checked)	
				new_obj[keyName] = 0;			      

			

	}
	
	console.log(new_obj);
	
	//для цен
	console.log(document.getElementById('print_dishes_4'));
	let prices_values_4 = document.getElementById('print_dishes_4').querySelectorAll("input");
				
	
				
				
	prices_values_4.forEach((element, i) =>{
		console.log(element);
		new_obj[`set_${i+1}`] = Number(element.value);	
						
	})

	
	
	
	fetch( `http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1`, {
	method: 'POST',
	body: JSON.stringify(new_obj),
	headers: {
	"Content-type": "application/json; charset=UTF-8"
	}
	})
	
	.then(response => response.json())
	
	
	
	.then(json => alert("id созданного документа - "+json.id))
	
	
	
}
