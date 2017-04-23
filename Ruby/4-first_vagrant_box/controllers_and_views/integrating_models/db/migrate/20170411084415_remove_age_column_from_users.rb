class RemoveAgeColumnFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :age
  end
end
