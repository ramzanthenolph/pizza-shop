//business logic
function Getpizza(size, topping, total){
  this.size= size;
  this.topping= topping;
  this.total= total;
}
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
        '<span class="btn btn-outline-info" id="submit">Submit Details</span><br>'+
        '<span class="btn btn-outline-secondary" id="checkout">Checkout</span>'+
        '</div>');
    });
    
});