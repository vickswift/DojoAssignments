# BankAccount should have a method that returns a user's account number, account number 
# should be generated by a private method, account number should be random
#
# BankAccount should have a method that returns the user's checking account balance
#
# BankAccount should have a method that returns the user's saving account balance
#
# BankAccount should allow a user to deposit money into either their checking or
# saving account BankAccount should allow a user to withdraw money from one of their
# accounts, return an error if there are insufficient funds
#
# BankAccount should allow the user to view the total amount of money they have at
# the bank BankAccount should track how many accounts the bank currently has
#
# Add an interest_rate attribute that is not accessible by the user. Set it to 0.01
#
# BankAccount should have a method called account_information that displays the
# users account number, total money, checking account balance, saving account balance
# and interest rate
#
# A user should not be able to set any attributes from the BankAccount class

class BankAccount
  attr_reader :account_number, :checking, :saving

  @@bank_accounts = 0

  def initialize
    @account_number = create_account
    @checking = 0
    @saving = 0
    @@bank_accounts += 1
    # not accessible since we do not have a reader for it
    @interest_rate = 0.01
  end

  def deposit(account, amount)
    if account.downcase == "checking"
      @checking += amount
    else
      @saving += amount
    end
  end

  def withdrawal(account, amount)
    if account.downcase == "checking"
      if @checking - amount < 0
        raise "Insufficient Funds, you have #{@checking} in this account"
      else
        @checking -= amount
      end
    else
      if @saving - amount < 0
        raise "Insufficient Funds, you have #{@saving} in this account"
      else
        @saving -= amount
      end
    end
  end

  def total
    "Checking Balance: #{@checking}\nSaving Balance: #{@saving}\nTotal Balance: #{@checking + @saving}"
  end

  def account_information
    "Account Number: #{@account_number}\nInterest Rate: #{@interest_rate}\n#{self.total}"
  end

  def self.number_of_accounts
    @@bank_accounts
  end

  private
    def create_account
      Array.new(10).map { rand(1..9) }.join
    end
end