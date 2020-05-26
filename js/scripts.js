//business logic

function Delivery(name, phone, address){
  this.name= name;
  this.phone= phone;
  this.address= address
}

//user interface logic
$(document).ready(function(){
    $("#deliver").click(function(){
        $("#deliverydetails").append(
        '<div class="deliverydetails"'+
        '<h6>Hi. Fill the delivery</h6>'+
        '<p>Delivery at sh.150</p>'+
        '<div class="form-group">' +
          '<label for="deliveryName">Name</label>' +
          '<input type="text" class="form-control deliveryName">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="deliveryNumber">Phone Number</label>' +
          '<input type="text" class="form-control deliveryNumber">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="deliveryAddress">Address</label>' +
          '<input type="text" class="form-control deliveryAddress">' +
        '</div>' +
        '<span class="btn btn-info" id="submit">Submit Details</span><br>'+
        '<span class="btn btn-secondary" id="checkout">Checkout</span>'+
        '<p class="total">Total: </p>'+
        '</div>');
    });
    $("span#submit").click(function(event){
      event.preventDefault();
      var inputtedName=  $("input.deliveryName").val();
      var inputtedNumber= $("input#deliveryNumber").val();
      var inputtedAddress= $("input#deliveryAddress").val();
      var newDelivery= new Delivery(inputtedName, inputtedNumber, inputtedAddress);
      alert("Hello "+inputtedName+ ", your delivery has been processed and will take upto 30 mins");    
    });
    $("#checkout").click(function(){
      let size = $("#size option:selected").val();
      let topping = $("#toppings option:selected").val();
      let totalPrice, price;
      topping=50;

      switch(size){
        case size= "small":
          price=550;
          totalPrice= price+topping+150;
        case size= "medium":
          price= 850;
          totalPrice= price+topping+150;
        case size= "large":
          price= 1200;
          totalPrice= price+topping+150;
      }
      $(".total").append(totalPrice);
    });
});