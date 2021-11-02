function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

let account1 = {};

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
};





$(document).ready(function() {
  $("form#register").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let balance = parseFloat($("#initial-deposit").val());
    account1 = new BankAccount(name, balance);
    $("#balance").html(account1.balance);
    $("#name").val("");
    $("#initial-deposit").val("");
    $(".bank").show();
    $(".register").hide();
  });
  $("form#bank").submit(function(event) {
    event.preventDefault();
    let deposit = parseFloat($("#deposit-amount").val());
    let withdrawal = parseFloat($("#withdrawal-amount").val());
    account1.deposit(deposit);
    account1.withdraw(withdrawal);
    $("#balance").html(account1.balance);
    $("#deposit-amount").val("");
    $("#withdrawal-amount").val("");
  });

});