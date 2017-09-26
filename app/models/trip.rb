class Trip < ApplicationRecord
  has_one :packing_list
  has_many :destinations

  has_many :user_trips
  has_many :users, through: :user_trips
  belongs_to :creator, class_name: "User"
  has_many :expenses

end
