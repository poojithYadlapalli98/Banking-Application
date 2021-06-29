var customers=[];

 if(localStorage.getItem("customers")==null){

localStorage.setItem('customers',JSON.stringify(customers));

}


   function ActivateAccount(){

       event.preventDefault();
      AccountNo=getValueById("AccountNo");
      Name=getValueById("name");
      AdharNo=getValueById("AdharNo");

      var customer={
       accountNumber:AccountNo,
       name:Name,
       AdharNumber:AdharNo,
       accountBalance:10000
   }
    var allCustomers=JSON.parse(localStorage.getItem('customers'));

     allCustomers.push(customer);
    console.log(allCustomers)

    localStorage.setItem('customers',JSON.stringify(allCustomers));
      document.getElementById("activateForm").reset();
   }

   function depositForm(){
   event.preventDefault();
    window.location.href="deposit.html";

   }

   function withdrawForm(){
   event.preventDefault()
   
window.location.href="withdraw.html";

  }
  function transfer(){
      event.preventDefault();
      location.href="funds_transfer.html";
  }

  
  function getValueById(id){

      return document.getElementById(id).value;
  }

   function displayAccountDetails(){

       event.preventDefault();
       var index=0;
       while(index<length){

     var allCustomer=JSON.parse(localStorage.getItem('customers'));

           document.getElementById("displayDetails").innerHTML=allCustomers[index].name+"    "+allC3ustomers[index].accountBalance;

            index++;
       }
   }
 