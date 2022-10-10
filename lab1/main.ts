class Account{
    Acc_no:number;
    balance:number;
     getBalance(){
        return this.balance;
     }
     creditAmount(){};
     debitAmount(){};


}

interface Accounti{
    date_of_opening : number;
    addCutomer();
    removeCustomer();
}
 
class Saving_Account extends Account implements Accounti{
    date_of_opening: number;
    min_balance: number;

    addCutomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    
}

class Current_Acount extends Account implements Accounti{
    date_of_opening: number;
    interset_rate :number;
    addCutomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    
}

