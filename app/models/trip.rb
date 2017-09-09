class Trip < ApplicationRecord
  has_one :packing_list
  has_many :destinations
  has_and_belongs_to_many :attendees

  belongs_to :creator
end
