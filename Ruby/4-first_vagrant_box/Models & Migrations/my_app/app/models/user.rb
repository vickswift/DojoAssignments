class User < ActiveRecord::Base
  has_many :messages
  has_one :address 

  # def messages
  #   User.find_by_sql("SELECT * FROM messages WHERE messages.user_id = #{self.id}")
  # end

end
