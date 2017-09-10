class Trip < ApplicationRecord
  has_one :packing_list
  has_many :destinations
  has_and_belongs_to_many :attendees, class_name: "User"
  belongs_to :creator, class_name: "User"
  has_many :expenses, through: :destinations

end
