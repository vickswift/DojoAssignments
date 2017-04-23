require_relative 'bankaccount'
RSpec.describe BankAccount do
before(:each) do
  @bank_account = BankAccount.new
end


  it 'has a getter method for retrieving the checking account balance' do
    expect(@bank_account.checking).to eq(0)
  end

  it "has a getter method that retrieves the total account balance" do
    expect(@bank_account.total).to eq("Checking Balance: 0\nSaving Balance: 0\nTotal Balance: 0")
  end

  context "withdrawing money" do
    it "raises an error if user tries to withdraw more money than the have in checkings" do
      expect{ @bank_account.withdrawal("checking", 100) }.to raise_error("Insufficient Funds, you have 0 in this account")
    end

    it "raises an error if user tries to withdraw more money than the have in savings" do
      expect{ @bank_account.withdrawal("savings", 100) }.to raise_error("Insufficient Funds, you have 0 in this account")
    end
  end

  it "raises an error when the user attempts to retrieve the total number of bank accounts" do
    expect{ @bank_account.number_of_accounts }.to raise_error(NoMethodError)
  end

  it "raises an error when the user attempts to set the interest rate" do
    expect{ @bank_account.interest_rate }.to raise_error(NoMethodError)
  end

end
