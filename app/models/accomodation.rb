class Accomodation < ApplicationRecord
  belongs_to :destination

  validates :name, :price, :destination_id, :check_in, :check_out, presence: true
end
