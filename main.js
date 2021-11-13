menu_list_array = ["Chicken Golden Delight","Non-Veg Supreme","Chicken Dominator","Indi-Chicken Tikka","Mexican Green Wave","Deluxe Veggie","Veg Extravaganza","Indi-Tandoori Paneer"];

function getmenu(){
   var x = document.getElementById("display_menu");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("menu_list").innerHTML="Hide Menu"
    } else {
      x.style.display = "none";
      document.getElementById("menu_list").innerHTML="Show Menu"
    }
  }
function show_top(){
  var y = document.getElementById("display_top");
  if (y.style.display === "none") {
    y.style.display = "block";
    document.getElementById("show_top").innerHTML="Hide Toppings"
  } else {
    y.style.display = "none";
    document.getElementById("show_top").innerHTML="Show Toppings"
  }
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

// topping array inputs
topping_array = [];
function add_item_GM(){
  if (topping_array.includes('Grilled Mushroom')==false){
    topping_array.push("Grilled Mushroom");
    console.log(topping_array);
  }
  console.log(topping_array.includes("Grilled Mushroom"));
}
function add_item_O(){
  if (topping_array.includes('Onion')==false){
  topping_array.push("Onion");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Onion"));
}
function add_item_CC(){
  if (topping_array.includes('Crisp Capsicum')==false){
  topping_array.push("Crisp Capsicum");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Crisp Capsicum"));
}
function add_item_FT(){
  if (topping_array.includes('Fresh Tomato')==false){
  topping_array.push("Fresh Tomato");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Fresh Tomato"));
}
function add_item_P(){
  if (topping_array.includes('Paneer')==false){
  topping_array.push("Paneer");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Paneer"));
}
function add_item_RP(){
  if (topping_array.includes('Red Pepper')==false){
  topping_array.push("Red Pepper");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Red Pepper"));
}
function add_item_J(){
  if (topping_array.includes('Jalepeno')==false){
  topping_array.push("Jalepeno");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Jalepeno"));
}
function add_item_GC(){
  if (topping_array.includes('Golden Corn')==false){
  topping_array.push("Golden Corn");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Golden Corn"));
}
function add_item_BO(){
  if (topping_array.includes('Black Olive')==false){
  topping_array.push("Black Olive");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Black Olive"));
}
function add_item_PBC(){
  if (topping_array.includes('Pepper Barbeque Chicken')==false){
  topping_array.push("Pepper Barbeque Chicken");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Pepper Barbeque Chicken"));
}
function add_item_PPC(){
  if (topping_array.includes('Peri-Peri Chicken')==false){
  topping_array.push("Peri-Peri Chicken");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Peri-Peri Chicken"));
}
function add_item_GCR(){
  if (topping_array.includes('Grilled Chicken Rasher')==false){
  topping_array.push("Grilled Chicken Rasher");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Grilled Chicken Rasher"));
}
function add_item_CT(){
  if (topping_array.includes('Chicken Tikka')==false){
  topping_array.push("Chicken Tikka");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Chicken Tikka"));
}
function add_item_CP(){
  if (topping_array.includes('Chicken Pepperoni')==false){
  topping_array.push("Chicken Pepperoni");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Chicken Pepperoni"));
}
function add_item_CK(){
  if (topping_array.includes('Chicken Keema')==false){
  topping_array.push("Chicken Keema");
  console.log(topping_array);
  }
  console.log(topping_array.includes("Chicken Keema"));
}

final_menu=[]
function choose_pizza(){
  console.log(document.getElementById("add_item").value);
  var z = document.getElementById("add_item").value;
  if (menu_list_array.includes(z)===true) {
  final_menu.push(z);
  console.log(final_menu);
  }
}

function add_top(){
  final_menu.push(topping_array);
  console.log(final_menu)
}

function see_cart(){
  document.getElementById("display_addedmenu").innerHTML=final_menu
}