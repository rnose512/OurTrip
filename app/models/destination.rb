class Destination < ApplicationRecord
  has_many :events
  has_many :flights
  has_many :accomodations
  has_many :expenses

  belongs_to :trips

  validates :name, :trip_id, :start_date, :end_date, presence: true
end
