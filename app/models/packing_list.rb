class PackingList < ApplicationRecord
  belongs_to :trip
  has_many :items

  validates :trip_id, presence: true
end
