class Dojo < ActiveRecord::Base

  validates :branch, :street, :city, :state, presence: true
  validates :state, length: { is: 2}

  # this callback will run after creating a new user
  after_create :successfully_created

  # this callback will run after updating an existing user
  after_update :successfully_updated

  private
  def successfully_created
    puts "Successfully created a new user"
  end
  def successfully_updated
    puts "Successfully updated a existing user"
  end

end
